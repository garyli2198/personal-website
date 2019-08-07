import React from "react";
import styled, { css } from "styled-components";

const Hidden = styled.label`
  display: none;
`;

const sharedInputStyle = css`
  display: block;
  font-family: "Nunito", sans-serif;
  font-size: 1.125rem;
  width: 75%;
  background: #24262b;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0 auto 1rem auto;
  color: #fff;
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
`;

const Input = styled.input`
  ${sharedInputStyle}
`;
const TextArea = styled.textarea`
  ${sharedInputStyle}
  resize: none;
`;

const Button = styled.button`
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    }).catch(error => alert(error));
  };

  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Hidden>
          Don’t fill this out if you're human:{" "}
          <input name="bot-field" type="text" onChange={this.handleChange} />
        </Hidden>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          required
        />
        <Input
          type="text"
          name="organization"
          placeholder="Organization"
          onChange={this.handleChange}
        />
        <TextArea
          rows="6"
          name="message"
          placeholder="Your Message"
          onChange={this.handleChange}
          required
        ></TextArea>
        <Button type="submit">Send Message</Button>
      </form>
    );
  }
}
