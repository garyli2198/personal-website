import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider } from "../shared/divider";
import Content from "../shared/content";
import Intro from "../intro";
import ScrollMouse from "../mouse";

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 66.67%;
  }
`;

const Landing = ({ offset, scrollDown }) => (
  <>
    <Divider speed={0.2} offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Wrapper>
        <Intro />
        <ScrollMouse scrollDown={scrollDown} />
      </Wrapper>
    </Content>
  </>
);

Landing.propTypes = {
  offset: PropTypes.number.isRequired,
  scrollDown: PropTypes.func.isRequired,
};

export default Landing;
