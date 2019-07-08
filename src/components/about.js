import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const About = ({ children, offset }) => (
  <>
    { children }
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}