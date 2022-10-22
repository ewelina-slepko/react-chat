export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "paragraph"
  | "caption";

export type TypoGraphyWeight = "bold" | "normal" | "light";

export type TypoGraphyAlign = "left" | "center" | "right";

export type TypographyProps = {
  variant: TypographyVariant;
  weight?: TypoGraphyWeight;
  align?: TypoGraphyAlign;
  color?: string;
};
