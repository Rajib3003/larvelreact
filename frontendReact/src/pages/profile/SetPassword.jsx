/* eslint-disable no-unused-vars */


import { useState } from "react";

export default function SetPassword() {
     const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password does not match!");
      return;
    }

    try {
      const res = await fetch(
        `${baseApiUrl}/auth/set-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      console.log("test data",data)

      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
      } else {
        setMessage("Password set successfully!");
      }
    } catch (error) {
      setMessage("Network error, try again later.");
    }
  };

  return (
     <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Set Your Password</h3>

          {message && (
            <div
              className={`alert ${
                message.includes("success") ? "alert-success" : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control bg-transparent py-3 ps-4"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="form-control bg-transparent py-3 ps-4"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              {/* Optional: Back to Login */}
              <button
                type="button"
                className="btn btn-link"
                onClick={() => (window.location.href = "/login")}
              >
                Back to Login
              </button>

              <button type="submit" className="btn btn-primary">
                Set Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

