import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>TripPlanner ✈️</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px",
            width: "250px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px",
            width: "250px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 30px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
