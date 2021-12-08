import React, { FC } from "react";
import { StyledNavbar, Icon, Title } from "./Navbar.styled";
import { NavbarProps } from "./Navbar.d";
import img from "./chat.png";

export const Navbar: FC<NavbarProps> = () => {
  return (
    <StyledNavbar>
      <Icon src={img} width="40" height="40" />
      <Title>Chat</Title>
    </StyledNavbar>
  );
};
