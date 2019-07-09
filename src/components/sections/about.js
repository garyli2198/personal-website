import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Divider } from "../shared/divider"
import Content, { Inner } from "../shared/content"

const About = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>

    </Divider>
    <Content offset={offset}>
      <Inner>{ children }</Inner>
    </Content>
  </>
)

export const AboutDesc = styled.div`

`

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}