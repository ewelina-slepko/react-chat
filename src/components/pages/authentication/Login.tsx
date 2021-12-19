import React, { useState } from "react";
import {
  checkIfUserIsAuthenticated,
  handleLogin,
} from "../../../services/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    handleLogin(email, password).then((userCredential) => {
      const user = userCredential?.user;
      console.log("Singed in user: ", user);
    });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        E-mail
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button onClick={logIn}>Submit</button>
    </div>
  );
};
