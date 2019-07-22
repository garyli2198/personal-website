import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Landing from "../components/sections/landing";
import Experience from "../components/sections/experience";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <Parallax pages={5}>
      <Landing offset={0} />
      <Experience offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
);

export default IndexPage;
