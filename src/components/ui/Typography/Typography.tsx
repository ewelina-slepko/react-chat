import { FC } from "react";
import { H1, H2, H3, H4, H5, Paragraph, Caption } from "./Typography.styled";
import { TypographyVariant, TypographyProps } from "./Typography.types";

const components: Record<TypographyVariant, FC> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  caption: Caption,
  paragraph: Paragraph,
};

export const Typography: FC<TypographyProps> = ({ variant, ...props }) => {
  const StyledTypography = components[variant];

  return <StyledTypography {...props} />;
};
