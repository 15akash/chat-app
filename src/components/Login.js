import React from "react";
import "./Login.css";
import LoginIcon from "@mui/icons-material/Login";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/message-icon-design-template-ff734aad72da096f0e49f3d693042135_screen.jpg?ts=1581057128"
          alt=""
        />
      </div>
      <div className="sign-in" onClick={signIn}>
        <h2>Sign in</h2>
        <LoginIcon className="sign-in-button" />
      </div>
    </div>
  );
};

export default Login;
