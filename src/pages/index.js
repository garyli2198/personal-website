import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"

const Greeting = styled.h1`
  font-size: 2.25rem;
  color: #000;
  letter-spacing: 0.025em;
  margin-bottom: 1.5rem;
`

const SubTitle = styled.p`
  font-size: 2.25rem;
  color: #000;
  letter-spacing: 0.025em;
  margin-top: 2rem;
`

const IndexPage = () => (
  <Layout>
    <Greeting>
      Hi, <br /> I'm Gary
    </Greeting>
    <SubTitle>
    Lorem ipsum dolor. amet tousled williamsburg. raw denim.
    </SubTitle>
  </Layout>
)

export default IndexPage
