import React, { ChangeEvent, FormEvent, useState } from "react";
import { handleRegister } from "../../../services/auth";
import { Input } from "../../ui/Input/Input";
import { Form, Container } from "./Authentication.styled";
import { Button } from "../../ui/Button/Button";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e: FormEvent) => {
    e.preventDefault();
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
    <Container>
      <h1>Sign Up</h1>
      <Form onSubmit={register}>
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
        <span>Do you have an account? Sign In!</span> 
      </Form>
    </Container>
  );
};
