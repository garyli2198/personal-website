import React from "react"
import styled from "styled-components"
import { Parallax } from "react-spring/renderprops-addons.cjs"

import Landing from "../components/sections/landing"
import Experience from "../components/sections/experience"
import About from "../components/sections/about"
import Contact from "../components/sections/contact";

import Layout from "../components/layout"
import Image from "../components/image"
import { Inner } from "../components/shared/content"

const IndexPage = () => (
  <Layout>
    <Parallax pages={5}>
      <Landing offset={0} />
      <Experience offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
)

export default IndexPage
