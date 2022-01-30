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
    background: #31a235;
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

  :focus {
    outline: none;
    border: 0;
  }

  :focus ~ label,
  :valid ~ label {
    top: -1rem;
    font-size: .75rem;
    color: #31a235;
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
  left: .25rem;
  top: .125rem;
  transition: 0.2s ease all;
`;
