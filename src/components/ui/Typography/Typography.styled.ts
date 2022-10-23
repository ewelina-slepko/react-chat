import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.types";

const commonStyles = ({ align, color }: TypographyProps) => css`
  text-align: ${align};
  color: ${color};
`;

export const H1 = styled.h1<TypographyProps>(
  ({ weight }) => css`
    font-size: 2rem;
    font-weight: ${weight ? weight : "bold"};
    ${commonStyles};
  `
);

export const H2 = styled.h1<TypographyProps>(
  ({ weight }) => css`
    font-size: 2rem;
    font-weight: ${weight};
    ${commonStyles};
  `
);

export const H3 = styled.h1<TypographyProps>(
  ({ weight }) => css`
    font-size: 1.75rem;
    font-weight: ${weight ? weight : "bold"};
    ${commonStyles};
  `
);

export const H4 = styled.h1<TypographyProps>(
  ({ weight }) => css`
    font-size: 1.5rem;
    font-weight: ${weight};
    ${commonStyles};
  `
);

export const H5 = styled.h1<TypographyProps>(
  ({ weight }) => css`
    font-size: 1.25rem;
    font-weight: ${weight ? weight : "light"};
    ${commonStyles};
  `
);

export const Paragraph = styled.p<TypographyProps>(
  ({ weight }) => css`
    font-size: 1rem;
    font-weight: ${weight};
    ${commonStyles};
  `
);

export const Caption = styled.span<TypographyProps>(
  ({ weight }) => css`
    font-size: 14px;
    font-weight: ${weight};
    ${commonStyles};
  `
);
