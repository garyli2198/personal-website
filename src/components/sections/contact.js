import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Divider } from "../shared/divider"
import Content from "../shared/content"

const WaveWrapper = styled.div`
  position: absolute;
  width:100%;
  bottom: 0;
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const Contact = ({ children, offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>

    </Divider>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>

    </Divider>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
