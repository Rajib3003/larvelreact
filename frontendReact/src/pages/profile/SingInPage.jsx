

import { useState } from "react";

import googleLogo from "/assets/frontend_assets/img/google-logo.png";

export default function SignInPage() {
const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${baseApiUrl}/user/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();
      setMessage(result.message || "Registered successfully!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Sign Up</h2>

       {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}

      {/* Google Registration */}
      <div className="mb-3">
        {/* <a
          href={`${baseApiUrl}/auth/google`}
          className="btn btn-danger w-100"
        >
          Sign Up with Google
        </a> */}
        <a
  href={`${baseApiUrl}/auth/google`}
  className="btn w-100 d-flex align-items-center justify-content-center p-3"
  style={{
    backgroundColor: "#4285F4", // Google blue
    color: "white",
    fontWeight: "500",
    gap: "8px",
  }}
>
  <img
    src={googleLogo}
    alt="Google"
    style={{ width: "20px", height: "20px" }}
  />
  Sign in with Google
</a>

      </div>

      <hr />

      {/* Local Registration Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control bg-transparent py-3 ps-4"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control bg-transparent py-3 ps-4"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control bg-transparent py-3 ps-4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 p-3">
          Register
        </button>
      </form>

     
    </div>
  );
}

