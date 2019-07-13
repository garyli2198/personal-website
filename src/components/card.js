import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export const CardsContainer = styled.div`
  justify-content: space-between;
  margin-top: 2rem;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const Container = styled.a`
  width: 100%;
  background: ${props => props.background};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: relative;
  text-decoration: none;
  border-radius: .5rem;
  padding: 2rem;

  @media (min-width: 600px) {
    padding: 6rem 2rem;
  }
`
const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.025em;
  padding-top: 2rem;
  color: #FFF;

  @media (min-width: 600px) {
    font-size: 1.875rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.25rem;
  }
`
const Description = styled.div`
  opacity: .75;
  font-size: .875rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: #FFF;
  @media (min-width: 600px) {
    font-size: 1rem;
  }
`

const Card = ({ title, link, children, background }) => (
  <Container href={link} target="_blank" rel="noopener noreferrer" background={background}>
    <Description>{children}</Description>
    <Title>{title}</Title>
  </Container>
)

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  background: PropTypes.string.isRequired,
}