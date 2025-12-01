

import { useState} from "react";
import { useSearchParams } from "react-router-dom";

export default function ResetPassword() {
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
     const response = await fetch(`${baseApiUrl}/auth/reset-password`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${token}` 
  },
  body: JSON.stringify({ id, newPassword: password }),
  credentials: "include",
});

      const result = await response.json();
      setMessage(result.message || "Password reset successfully!");
      setPassword("");
      setConfirmPassword("");     
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Reset Password</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Reset Password
        </button>
      </form>

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

