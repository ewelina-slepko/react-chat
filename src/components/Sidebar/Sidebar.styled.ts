import styled, { css } from "styled-components";

export type HamburgerContainerProps = {
  isActive: boolean;
};

export const StyledSidebar = styled.div<HamburgerContainerProps>(
  ({ isActive }) => css`
    width: ${isActive ? "16rem" : "4rem"};
    border-right: 1px solid #eeeeee;
    transition: 0.25s ease;
    box-shadow: ${isActive &&
    "-10px 13px 9px 0px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)"};
  `
);
