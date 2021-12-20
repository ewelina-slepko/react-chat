import React, { FC } from "react";
import {Bar, Group, Highlight, Label, StyledInput} from "./Input.styled";

export type InputProps = {
  value: string;
  label: string;
  type: string;
  onChange: (e: any) => void;
};

export const Input: FC<InputProps> = ({ value, label, type, onChange }) => {
  return (
    <Group>
      <StyledInput value={value} type={type} onChange={onChange} />
      <Highlight />
      <Bar />
      <Label>{label}</Label>
    </Group>
  );
};
