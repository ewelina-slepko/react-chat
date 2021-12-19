import React, { FC } from "react";
import {
  StyledNavbar,
  Title,
  HamburgerContainer,
  Line,
  LinesWrapper,
  MenuContainer,
  Icon,
} from "./Navbar.styled";
import mainIcon from "../../../assets/chat.png";
import logoutIcon from "../../../assets/logout.png";
import { HamburgerProps } from "./Navbar.d";
import { handleLogout } from "../../../services/auth";

export const Navbar: FC<HamburgerProps> = ({ isActive, onToggle }) => {
  return (
    <StyledNavbar>
      <MenuContainer>
        <HamburgerContainer>
          <LinesWrapper isActive={isActive} onClick={onToggle}>
            <Line />
            <Line />
            <Line />
          </LinesWrapper>
        </HamburgerContainer>
        <Icon src={mainIcon} width="35" height="35" />
        <Title>Chat</Title>
      </MenuContainer>
      <Icon src={logoutIcon} width="20" height="20" onClick={handleLogout} />
    </StyledNavbar>
  );
};
