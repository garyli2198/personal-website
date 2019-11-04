import React from "react";
import { Helmet } from "react-helmet"
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

const Meet = () => (
  <Layout>
    <Helmet>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
    </Helmet>
    <Container>
      <CalendlyWidget className="calendly-inline-widget" data-url="https://calendly.com/gary-li/60min?background_color=23262B&text_color=f5f5f5&primary_color=B568FF" />
    </Container>
  </Layout>
)

export default Meet;
