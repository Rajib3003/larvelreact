import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = () => {
      
      if (username === "asd" && password === "asd") {
        setIsLoggedIn(true); 
        navigate("/student-profile"); 
      } else {
        alert("Invalid username or password!");
      }
    };
return (
  <div className="d-flex align-items-center justify-content-center min-vh-100">
    <div className="card shadow-lg w-100" style={{ maxWidth: "400px" }}>
      <div className="card-body">
        <h3 className="text-center mb-4">Login</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevents default form submission
            handleLogin(); // Triggers login
          }}
        >
          <div className="mb-3">
            <input
              className="form-control bg-transparent py-3 ps-4"
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control bg-transparent py-3 ps-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
  
