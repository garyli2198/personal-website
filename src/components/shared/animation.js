import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const bounceAnimation = () => css`
  animation: ${bounce} 2s infinite;
`;

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`;
