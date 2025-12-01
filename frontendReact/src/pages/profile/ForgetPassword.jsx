

import { useState } from "react";

export default function ForgetPassword() {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseApiUrl}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const result = await response.json();
      setMessage(result.message || "Password reset link sent successfully!");
      setEmail("");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Forget Password</h2>

       {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control bg-transparent py-3 ps-4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 p-3">
          Send Reset Link
        </button>
      </form>

     
    </div>
  );
}

