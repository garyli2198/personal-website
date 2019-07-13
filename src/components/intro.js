import React from "react"
import styled from "styled-components"

const Greeting = styled.h1`
  letter-spacing: 0.025em;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  @media (min-width: 900px) {
    font-size: 4rem;
  }
`

const SubTitle = styled.p`
  letter-spacing: 0.025em;
  margin-top: 2rem;
  font-size: 1.5rem;
  @media (min-width: 900px) {
    font-size: 2.25rem
  }
`

const Intro = () => (
  <>
    <Greeting>Hi, <br /> I'm Gary</Greeting>
    <SubTitle>Web Developer. CS @ Berkeley. Extremely Mediocre Home Cook.</SubTitle>
  </>
)

export default Intro
