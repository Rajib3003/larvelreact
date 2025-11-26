import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";


export default function Login({ setIsLoggedIn }) {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext); // 👈 get setUser from context

  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch(
        // "https://ph-tour-managment-system.vercel.app/api/v1/auth/login",
        `${baseApiUrl}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Login failed");
        return;
      }

      // Login successful
      setIsLoggedIn(true);

      // Save user data in context
      if (result.data?.user) {
        setUser(result.data.user); // 👈 Save logged-in user info
      }

      // Optionally save token
      if (result.data?.token) {
        localStorage.setItem("token", result.data.token);
      }

      navigate("/student-profile");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <input
                className="form-control bg-transparent py-3 ps-4"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control bg-transparent py-3 ps-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
