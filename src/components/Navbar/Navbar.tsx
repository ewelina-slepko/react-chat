import React, { FC } from "react";
import {
  StyledNavbar,
  Icon,
  Title,
  HamburgerContainer,
  Line,
} from "./Navbar.styled";
import img from "../../assets/chat.png";
import { HamburgerProps } from "./Navbar.d";

export const Navbar: FC<HamburgerProps> = ({ isActive, onToggle }) => (
  <StyledNavbar>
    <HamburgerContainer isActive={isActive} onClick={onToggle}>
      <Line />
      <Line />
      <Line />
    </HamburgerContainer>
    <Icon src={img} width="40" height="40" />
    <Title>Chat</Title>
  </StyledNavbar>
);
