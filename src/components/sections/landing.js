import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider } from "../shared/divider";
import Content from "../shared/content";
import Intro from "../intro";

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 66.67%;
  }
`;

const Landing = ({ offset }) => (
  <>
    <Divider speed={0.2} offset={offset}></Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>
        <Intro />
      </Wrapper>
    </Content>
  </>
);

export default Landing;

Landing.propTypes = {
  offset: PropTypes.number.isRequired,
};
