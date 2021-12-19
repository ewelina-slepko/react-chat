import React, { useState } from "react";
import { handleRegister } from "../../../services/auth";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    handleRegister(email, password).then((userCredential) => {
      const user = userCredential?.user;
      console.log("Registered user: ", user);
    });
    console.log(email, password);
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      <button onClick={register}>Submit</button>
    </div>
  );
};
