import React, { Component } from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";

import Landing from "../components/sections/landing";
import Experience from "../components/sections/experience";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Layout from "../components/layout";

export default class Main extends Component {
  scrollDown = () => {
    this.parallax.scrollTo(3);
  }

  render() {
    return (
      <Layout>
        <Parallax pages={5} ref={(ref) => { this.parallax = ref; }}>
          <Landing offset={0} scrollDown={this.scrollDown} />
          <Experience offset={1} />
          <About offset={3} />
          <Contact offset={4} />
        </Parallax>
      </Layout>
    );
  }
}
