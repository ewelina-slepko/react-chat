import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.types";

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const H2 = styled.h1`
  font-size: 2rem;
`;

export const H3 = styled.h1`
  font-size: 2rem;
`;

export const H4 = styled.h1`
  font-size: 2rem;
`;

export const H5 = styled.h1`
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
`;

export const Caption = styled.span<TypographyProps>(
  ({ weight, align, color }) => css`
    font-size: 14px;
    text-align: ${align ? align : "left"};
  `
);
