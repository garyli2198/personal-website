import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Divider } from "../shared/divider"
import Content, { Inner, Title } from "../shared/content"
import ContactForm from "../contactForm"

const WaveWrapper = styled.div`
  position: absolute;
  width:100%;
  bottom: 0;
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const SubTitle = styled.p`
  position: relative;
  color: #dae4e9;
  font-size: 1.125rem;

  @media (min-width: 600px) {
    font-size: 1.25rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`

const Contact = ({ offset, children }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>

    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <Title>Get in Touch</Title>
        <SubTitle>Say Hello!</SubTitle>
        {children}
      </Inner>
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
