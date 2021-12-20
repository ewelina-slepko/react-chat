import React, { ChangeEvent, useState } from "react";
import { handleLogin } from "../../../services/auth";
import { Input } from "../../ui/Input/Input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    handleLogin(email, password).then((userCredential) => {
      const user = userCredential?.user;
      console.log("Singed in user: ", user);
    });
  };
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <Input
          value={email}
          label="E-mail"
          type="text"
          onChange={handleEmail}
        />
      </div>
      <div>
        <Input
          value={password}
          label="Password"
          type="password"
          onChange={handlePassword}
        />
      </div>
      <button onClick={logIn}>Submit</button>
    </div>
  );
};
