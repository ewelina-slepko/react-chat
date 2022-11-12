import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

export const SubmitButton = styled.button<ButtonProps>(
  ({ color = "primary" }) => css`
    background: ${{
      primary: "#865ff3",
      secondary: "#f3f3f3",
    }[color]};
    cursor: pointer;
    border: none;
    border-radius: 4px;
    min-width: 8rem;
    padding: 0;
    font-size: 1rem;
    height: 3rem;
    color: ${{
      primary: "#fff",
      secondary: "#616161",
    }[color]};
    cursor: pointer;
  `
);
