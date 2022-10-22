import styled, { css } from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #363636;
  background: #252626;
`;

export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  margin: 0 0.5rem 0 1rem;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  margin: 0 0.25rem;
`;
