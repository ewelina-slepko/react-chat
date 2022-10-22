import styled, { css } from "styled-components";

const animation = css`
  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  ${animation};
`;

export const Bar = styled.span`
  display: block;
  width: 16rem;

  :before {
    left: 50%;
  }

  :after {
    right: 50%;
  }

  :before,
  :after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #a395cc;
    transition: 0.2s ease all;
  }
`;

export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 6.25rem;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.375rem;
  display: block;
  width: 16rem;
  border: none;
  border-bottom: 1px solid #757575;
  background: #252626;
  color: #dadada;

  :focus {
    outline: none;
    border: 0;
  }

  :focus ~ label,
  :valid ~ label,
  :invalid ~ label {
    top: -1rem;
    font-size: 0.75rem;
    color: #a395cc;
  }

  :focus ~ ${Bar}:before, :focus ~ ${Bar}:after {
    width: 50%;
  }

  :focus ~ ${Highlight} {
    animation: inputHighlighter 0.3s ease;
  }
`;

export const Label = styled.label`
  color: #999;
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.25rem;
  top: 0.125rem;
  transition: 0.2s ease all;
`;
