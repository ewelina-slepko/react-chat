import React, { ChangeEvent, useState } from "react";
import { handleRegister } from "../../../services/auth";
import { Input } from "../../ui/Input/Input";

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
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        E-mail
        <Input
          value={email}
          label="E-mail"
          type="text"
          onChange={handleEmail}
        />
      </div>
      <div>
        Password
        <Input
          value={password}
          label="Password"
          type="password"
          onChange={handlePassword}
        />
      </div>
      <button onClick={register}>Submit</button>
    </div>
  );
};
