import React, { useState } from "react";
import { HamburgerContainer, Line } from "../Sidebar.styled";

export const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);
  return (
    <HamburgerContainer isActive={isActive} onClick={toggle}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </HamburgerContainer>
  );
};
