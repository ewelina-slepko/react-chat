import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonVariant;
};

export type ButtonVariant = "primary" | "secondary";
