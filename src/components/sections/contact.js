import React from "react";
import PropTypes from "prop-types";
import { Divider } from "../shared/divider";
import Content, { Inner, Title } from "../shared/content";
import { ReactTypeformEmbed } from "react-typeform-embed";

const typeformStyle = {
  height: "500px",
  position: "relative"
}

export default class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showTypeform: true };
  }

  render() {
    const { offset } = this.props;
    const { showTypeform } = this.state;
    return (
      <>
        <Divider fill="#23262b" speed={0.2} offset={offset}></Divider>
        <Content speed={0.4} offset={offset}>
          <Inner>
            <Title>Contact</Title>
            {showTypeform && <ReactTypeformEmbed url="https://garyli.typeform.com/to/J9C865" hideHeaders={true} hideFooter={true} style={typeformStyle} />}
          </Inner>
        </Content>
        <Divider speed={0.1} offset={offset}></Divider>
      </>
    )
  }
}

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
};
