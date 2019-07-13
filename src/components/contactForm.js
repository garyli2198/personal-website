import React from "react"
import styled from "styled-components"

const Hidden = styled.p`
  display: none;
`

const Form = styled.form`
`

const Label = styled.label`
`

const ContactForm = () => (
  <Form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
    <Hidden>
      <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </Hidden>
    <p>
      <Label>Email: <input type="text" name="email" /></Label>
    </p>
    <p>
      <Label>Message: <textarea name="message"></textarea></Label>
    </p>
    <button type="submit">Send</button>
  </Form>
)

export default ContactForm
