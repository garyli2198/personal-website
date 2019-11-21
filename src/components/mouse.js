import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const ScrollContainer = styled.div`
  position: absolute;
  margin: auto;
  right: 0;
  bottom: 1.25rem;
  left: 0;
  width: 2.125rem;
  height: 3.4375rem;
  display: none;
  cursor: pointer;
  @media (min-width: 900px) {
    display: block;
  }
`;

const Mouse = styled.div`
  width: 0.1875rem;
  padding: 0.625rem 0.9375rem;
  height: 2.1875rem;
  border: 0.125rem solid #fff;
  border-radius: 1.5625rem;
  opacity: 0.75;
  box-sizing: content-box;
`;

const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0.9375rem); opacity: 0;}
`;

const Scroller = styled.div`
  width: 0.1875rem;
  height: 0.625rem;
  border-radius: 25%;
  background-color: #fff;
  animation: ${scroll} 2s cubic-bezier(.15,.41,.69,.94) infinite;
`;

const ScrollMouse = ({ scrollDown }) => (
  <ScrollContainer onClick={scrollDown}>
    <Mouse>
      <Scroller />
    </Mouse>
  </ScrollContainer>
);

ScrollMouse.propTypes = {
  scrollDown: PropTypes.func.isRequired,
};

export default ScrollMouse;
