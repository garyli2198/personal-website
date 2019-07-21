import styled, { css, keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`
