import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <button
          onClick={() => loginWithRedirect()}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;
