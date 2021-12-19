import React, { FC } from "react";
import {
  StyledNavbar,
  Icon,
  Title,
  HamburgerContainer,
  Line,
  LinesWrapper,
} from "./Navbar.styled";
import img from "../../../assets/chat.png";
import { HamburgerProps } from "./Navbar.d";

export const Navbar: FC<HamburgerProps> = ({ isActive, onToggle }) => (
  <StyledNavbar>
    <HamburgerContainer>
      <LinesWrapper isActive={isActive} onClick={onToggle}>
        <Line />
        <Line />
        <Line />
      </LinesWrapper>
    </HamburgerContainer>
    <Icon src={img} width="35" height="35" />
    <Title>Chat</Title>
  </StyledNavbar>
);
