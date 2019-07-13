import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Divider } from "../shared/divider"
import Content, { Inner, Title } from "../shared/content"

const AboutDesc = styled.p`
  color: #dae4e9;
  text-align: justify;
  font-size: 1.125rem;

  @media (min-width: 600px) {
    font-size: 1.25rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`

const About = ({ offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>

    </Divider>
    <Content offset={offset}>
      <Inner>
        <Title>About</Title>
        <AboutDesc>
          Hey! I'm a student at UC Berkeley studying computer science.
        </AboutDesc>
      </Inner>
    </Content>
  </>
)



export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}