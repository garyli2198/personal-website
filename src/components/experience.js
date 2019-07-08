import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Experience = ({children, offset}) => (
  <>
    {children}
  </>
)

export default Experience

Experience.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}