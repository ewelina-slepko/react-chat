import React, { ButtonHTMLAttributes, FC } from "react";
import { SubmitButton } from "./Button.styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: FC<ButtonProps> = (props) => {
    return <SubmitButton {...props}/>;
};
