import React from "react";
import PropTypes from "prop-types";
import Content, { Inner, Title } from "../shared/content";
import { Divider, DividerMiddle } from "../shared/divider";
import Card, { CardsContainer } from "../card";

const Experience = ({ offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>
        <Title>Experience</Title>
        <CardsContainer>
          <Card
            title="Stitch Fix"
            link="https://multithreaded.stitchfix.com/engineering"
            background="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            I interned at Stitch Fix the summer of 2019, working on extracting the checkout experience from
            the existing monolith to its own micro frontend.
          </Card>
          <Card
            title="Cal Hacks"
            link="https://calhacks.io"
            background="linear-gradient(to right top, #3B9AC1, #00B4C9, #00CCBF, #60E0A6, #ABF087, #F9F871)"
          >
            I'm an organizer of Cal Hacks, the worlds largest collegiate
            hackathon.
          </Card>
          <Card
            title="VMware"
            link="https://www.vmware.com/products/appvolumes.html"
            background="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            I interned at VMware the summer of 2018 on the AppVolumes team,
            helping implement the newly designed application packaging workflow.
          </Card>
          <Card
            title="ANova"
            link="https://www.berkeleyanova.org/"
            background="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I'm part of ANova, an organization with a mission to improve
            computer science education in under-resourced communities across the
            Bay Area.
          </Card>
        </CardsContainer>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}></Divider>
  </>
);

export default Experience;

Experience.propTypes = {
  offset: PropTypes.number.isRequired,
};
