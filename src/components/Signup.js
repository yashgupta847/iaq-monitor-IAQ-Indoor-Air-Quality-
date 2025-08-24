// src/components/Signup.js
import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { loginWithRedirect } = useAuth0();

  const handleSignup = (e) => {
    e.preventDefault();
    loginWithRedirect({ screen_hint: "signup" });
  };

  return (
    <form
      onSubmit={handleSignup}
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Signup</button>
      <p style={{ color: "red" }}>{error}</p>
      <p style={{ color: "green" }}>{success}</p>
      <p>
        Already A user ? <Link to="/login">Login here</Link>
      </p>{" "}
    </form>
  );
};

export default Signup;
