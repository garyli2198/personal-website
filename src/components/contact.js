import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Contact = ({ children, offset }) => (
  <>
    {children}
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
