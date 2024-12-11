import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Dummy login check (replace with your authentication logic)
      if (username === "asd" && password === "asd") {
        setIsLoggedIn(true); // Update login status in the parent component
        navigate("/student-profile"); // Redirect to the home page or any other page
      } else {
        alert("Invalid username or password!");
      }
    };
  
    return (
      

      <form
  onSubmit={(e) => {
    e.preventDefault(); // Prevents default form submission
    handleLogin(); // Triggers login
  }}
>
  <div className="col-lg-3 col-md-6 mx-auto">
    <h3 className="text-center">Login</h3>
    <input
      className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
      type="text"
      placeholder="User Name"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      className="form-control bg-transparent w-100 py-3 ps-4 mt-2 pe-5"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <div className="d-flex justify-content-end">
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </div>
  </div>
</form>

    );
  }
  
