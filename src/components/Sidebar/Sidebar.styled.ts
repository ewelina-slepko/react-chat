import styled, { css } from "styled-components";

export type HamburgerContainerProps = {
  isActive: boolean;
};

export const StyledSidebar = styled.div`
  width: 4rem;
  border-right: 1px solid #eeeeee;
`;

export const HamburgerContainer = styled.div<HamburgerContainerProps>(
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
