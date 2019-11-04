import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const CalendlyWidget = styled.div`
  width: 100vw;
  height: 100vh;
`
const Container = styled.div`
  background-color: #161719;
  margin: 0;
`
export default class Meet extends React.Component {
  state = {
    widget: null
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);

    this.setState({
      widget: <CalendlyWidget className="calendly-inline-widget" data-url="https://calendly.com/gary-li/60min?background_color=23262B&text_color=f5f5f5&primary_color=B568FF" />
    })
  }

  render() {
    const { widget } = this.state;
    return (
      <Layout>
        <Container>
          {widget}
        </Container>
      </Layout>
    )
  }
}

