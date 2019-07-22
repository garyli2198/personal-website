import React from "react";
import styled, { css } from "styled-components";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Landing from "../components/sections/landing";
import Experience from "../components/sections/experience";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Layout from "../components/layout";

const Hidden = styled.label`
  display: none;
`

const sharedInputStyle = css`
  display: block;
  font-family: "Nunito", sans-serif;
  font-size: 1.125rem;
  width: 75%;
  background: #24262B;
  border: 0;
  border-radius: .5rem;
  padding: .5rem;
  margin: 0 auto 1rem auto;
  color: #FFF;
  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
    margin-left: 0;
    width: 50%;
  }
  @media (min-width: 1600px) {
    width: 66.67%;
  }
`

const Input = styled.input`
  ${sharedInputStyle}
`
const TextArea = styled.textarea`
  ${sharedInputStyle}
  resize: none;
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: #8300ff;
  border: 2px solid #8300ff;
  color: #FFF;
  font-family: "Nunito", sans-serif;
  font-size: 1.125rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
  }
  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`

const IndexPage = () => (
  <Layout>
    <Parallax pages={5}>
      <Landing offset={0} />
      <Experience offset={1} />
      <About offset={3} />
      <Contact offset={4}>
      <form name="contact" method="post" netlify netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <Hidden>Don’t fill this out if you're human: <input name="bot-field" type="text"/></Hidden>
        <Input type="text" name="name" placeholder="Name" required/>
        <Input type="email" name="email" placeholder="Email" required/>
        <Input type="text" name="organization" placeholder="Organization"/>
        <TextArea rows="6" name="message" placeholder="Your Message" required></TextArea>
        <Button type="submit">Send Message</Button>
      </form>
      </Contact>
    </Parallax>
  </Layout>
)

export default IndexPage
