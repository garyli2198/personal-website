import React from "react"
import PropTypes from "prop-types"
import Content, { Inner, Title } from "../shared/content"
import { Divider, DividerMiddle } from "../shared/divider"
import Card, { CardsContainer } from "../card"

const Experience = ({ offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
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
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
    </Divider>
  </>
)

export default Experience

Experience.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}