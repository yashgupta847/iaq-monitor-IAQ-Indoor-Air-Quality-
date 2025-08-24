import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("✅ Reset email sent! Check your inbox.");
    } catch (err) {
      setMsg("❌ Error sending email. Check your input.");
    }
  };

  return (
    <form onSubmit={handleReset} style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <button type="submit">Reset Password</button>
      <p>{msg}</p>
    </form>
  );
};
export default ForgotPassword;
