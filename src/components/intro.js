import React from "react"
import styled from "styled-components"

const Greeting = styled.h1`
  font-size: 2.25rem;
  color: #000;
  letter-spacing: 0.025em;
  margin-bottom: 1.5rem;
`

const SubTitle = styled.p`
  font-size: 2.25rem;
  color: #000;
  letter-spacing: 0.025em;
  margin-top: 2rem;
`

const Intro = () => (
  <>
    <Greeting>Hi, <br /> I'm Gary</Greeting>
    <SubTitle>Blah. BlAH BLHA. aweifaawefawefi.</SubTitle>
  </>
)

export default Intro
