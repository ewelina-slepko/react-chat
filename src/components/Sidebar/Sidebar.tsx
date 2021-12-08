import React from "react";
import { StyledSidebar } from "./Sidebar.styled";
import { Hamburger } from "./Hamburger/Hamburger";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Hamburger />
    </StyledSidebar>
  );
};
