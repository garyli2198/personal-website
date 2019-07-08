import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import Intro from "../components/intro"
import Card, { CardsContainer } from "../components/card"
import Experience from "../components/experience"
import About from "../components/about"
import Contact from "../components/contact";

const Title = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2.25rem;
  color: #000;
  margin-bottom: 2rem;
  letter-spacing: 0.025em;
`

const IndexPage = () => (
  <Layout>
    <Intro />
    <Experience>
      <Title>Things I do</Title>
      <CardsContainer>
        <Card
          title="Stitch Fix"
          link="https://multithreaded.stitchfix.com/engineering"
          background="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
        >
          blah blah
        </Card>
        <Card
          title="Cal Hacks"
          link="https://calhacks.io"
          background="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
        >
          blah blah
        </Card>
        <Card
          title="VMware"
          link="https://www.vmware.com/products/appvolumes.html"
          background="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
        >
          blah blah
        </Card>
        <Card
          title="ANova"
          link="https://www.berkeleyanova.org/"
          background="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
        >
          blah blah blah
        </Card>
      </CardsContainer>
    </Experience>
    <About>
      <Title>About</Title>
    </About>
    <Contact>
      <Title>Get in Touch</Title>
    </Contact>

  </Layout>
)

export default IndexPage
