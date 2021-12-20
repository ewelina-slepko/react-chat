import styled from "styled-components";

export const Group = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  font-size: 1.125rem;
  padding: 0.625rem;
  display: block;
  width: 10rem;
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }
`;

export const Highlight = styled.span``;

export const Bar = styled.span``;

export const Label = styled.label`
  position: absolute;
  color: #757575;
  left: 5px;
  top: 10px;
`;
