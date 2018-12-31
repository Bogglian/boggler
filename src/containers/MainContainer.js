import React, { Component } from "react";
import { LinkBtn } from "../styledComponents";

class Maincontainer extends Component {
  render() {
    return (
      <div>
        <LinkBtn to="/speech/postlist">postList</LinkBtn>
        <LinkBtn to="/speech/audio/write">audio</LinkBtn>
      </div>
    );
  }
}

export default Maincontainer;
