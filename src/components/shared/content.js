import styled from "styled-components"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export const Inner = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: 900px) {
    text-align: left;
  }
  @media (min-width: 1600px) {
    width: 66.67%;
  }
`

export const Title = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2.25rem;
  margin-bottom: 2rem;
  letter-spacing: 0.025em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

const Content = styled(ParallaxLayer)`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  z-index: 50;
  @media (min-width: 600px) {
    padding: 3rem;
  }
  @media (min-width: 900px) {
    padding: 6rem;
  }
`

export default Content
