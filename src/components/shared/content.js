import styled from "styled-components"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export const Inner = styled.div`
  width: 100%;
  text-align: center;
  @media (max-width: 1280px) {
    width: 66.67%;
    text-align: left;
  }
`

const Content = styled(ParallaxLayer)`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  z-index: 50;
  @media (max-width: 768px) {
    padding: 3rem;
  }
  @media (max-width: 1024) {
    padding: 6rem;
  }
`

export default Content
