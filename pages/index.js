import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "../components/App";

class IndexPage extends Component {
  static propTypes = {
    jobs: PropTypes.array.isRequired,
    query: PropTypes.object.isRequired
  };

  render() {
    return (
      <App>
        <div>Hi, there</div>
      </App>
    );
  }
}

export default IndexPage;
