import styled, { css } from "styled-components";
import { HamburgerContainerProps } from "../Sidebar/Sidebar.styled";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #eeeeee;
`;

export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const HamburgerContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.75rem;
  border-radius: 1.5rem;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinesWrapper = styled.div<HamburgerContainerProps>(
  ({ isActive }) => css`
    :hover {
      cursor: pointer;
    }

    & :nth-child(1) {
      transform: ${isActive && "translateY(6px) rotate(45deg)"};
    }

    & :nth-child(2) {
      opacity: ${isActive && "0"};
    }

    & :nth-child(3) {
      transform: ${isActive && "translateY(-6px) rotate(-45deg)"};
    }
  `
);

export const Line = styled.span`
  width: 20px;
  height: 3px;
  background-color: #6f6f6f;
  display: block;
  margin: 3px auto;
  transition: all 0.3s ease-in-out;
`;

export const Icon = styled.img`
  margin: 0 0.5rem;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  color: #6f6f6f;
  margin: 0 0.25rem;
`;
