import React, { ChangeEvent, FormEvent, useState } from "react";
import { handleLogin } from "../../../services/auth";
import { Input } from "../../ui/Input/Input";
import { Container, Form } from "./Authentication.styled";
import { Button } from "../../ui/Button/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e: FormEvent) => {
    e.preventDefault();
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
    <Container>
      <h1>Sign In</h1>
      <Form onSubmit={logIn}>
        <div>
          <Input
            value={email}
            label="E-mail"
            type="email"
            required={true}
            onChange={handleEmail}
          />
          <Input
            value={password}
            label="Password"
            type="password"
            required={true}
            onChange={handlePassword}
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
