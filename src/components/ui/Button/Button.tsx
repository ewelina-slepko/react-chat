import { FC } from "react";
import { SubmitButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = (props) => <SubmitButton {...props} />;
