import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider } from "../shared/divider";
import Content, { Inner, Title } from "../shared/content";

const Button = styled((props) => <Link {...props} />)`
  padding: 1rem 2rem;
  background: #8300ff;
  border: 2px solid #8300ff;
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 1.125rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
  }
  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.p`
  color: #dae4e9;
  font-size: 1.125rem;
  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Contact = ({ offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner>
        <Title>Contact</Title>
        <SubTitle>
          If you're interested in me and what I do,
          {" "}
          want to see my resume, or just wanna chat, get in touch.
        </SubTitle>
        <br />
        <Button to="/contact/">Say Hello!</Button>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} />
  </>
);

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
};

export default Contact;
