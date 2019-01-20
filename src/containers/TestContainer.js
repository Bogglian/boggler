import React, { Component } from "react";

import AudioContainer from "./AudioContainer";

class TestContainer extends Component {

  state= {
    file:null
  }

  onChangeFile = e => {
    this.setState({
      file: e.target.files[0]
    });
  }

  render() {
    const file = this.state.file;

    return (
      <div>
        <input
        type="file"
        name="uploadFile"
        id="uploadFile"
        onChange={this.onChangeFile}
        accept=".wav, .raw, .mp3, .mp4, .flex, .m4a"
        />
        <AudioContainer file={file} />
      </div>
    );
  }
}

export default TestContainer;
