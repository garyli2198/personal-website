import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider } from "../shared/divider";
import Content, { Inner, Title } from "../shared/content";

const AboutDesc = styled.p`
  color: #dae4e9;
  text-align: justify;
  font-size: 1.125rem;
  line-height: 2.5rem;
  @media (min-width: 600px) {
    font-size: 1.25rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

const About = ({ offset }) => (
  <>
    <Divider
      bg="#23262b"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset} />
    <Content offset={offset}>
      <Inner>
        <Title>About</Title>
        <AboutDesc>
          Heya stranger! I'm a recent UC Berkeley Computer Science graduate. In the fall, I'll be working for
          <a href="https://flexport.com">Flexport</a>. In my free time, I love to game and
          <a href="https://www.airbnb.com/experiences/1260549">teach people how to cook Dongbei cuisine</a>.
        </AboutDesc>
      </Inner>
    </Content>
  </>
);

export default About;

About.propTypes = {
  offset: PropTypes.number.isRequired,
};
