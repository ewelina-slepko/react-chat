import { ChangeEvent, FormEvent, useState } from "react";
import { handleLogin, handleLoginWithGoogle } from "../../../services/auth";
import { Input } from "../../ui/Input/Input";
import {
  ButtonBox,
  ButtonContainer,
  Container,
  Form,
  GoogleButtonContent,
  GoogleIcon,
} from "./Authentication.styled";
import { Button } from "../../ui/Button/Button";
import { Typography } from "../../ui/Typography/Typography";
import { Link } from "../../ui/Link/Link.styled";
import googleIcon from "../../../assets/google-logo.svg";

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
            onChange={handleEmail}
            required
          />
          <Input
            value={password}
            label="Password"
            type="password"
            onChange={handlePassword}
            required
          />
        </div>
        <ButtonContainer>
          <ButtonBox>
            <Button type="submit">Submit</Button>
          </ButtonBox>

          <Button
            type="button"
            color="secondary"
            onClick={handleLoginWithGoogle}
          >
            <GoogleButtonContent>
              <GoogleIcon src={googleIcon} width="25" height="25" />
              Sign In with Google
            </GoogleButtonContent>
          </Button>
          <Typography variant="caption" align="center">
            Don't you have an account? <Link to="/register">Sign Up!</Link>
          </Typography>
        </ButtonContainer>
      </Form>
    </Container>
  );
};
