import React, { Component } from "react";

import AudioContainer from "./AudioContainer";
import InputFileForm from "../components/InputFileForm";

class TestContainer extends Component {

  state= {
    input:`default data`,
    file:null
  }

  onChangeFile = e => {
    this.setState({
      file: e.target.files[0]
    });
  }

  render() {
    const file = this.state.file;
    const input = this.state.input;
    return (
      <div>
        <input type="text" value={input} />
        <InputFileForm onChangeFile={this.onChangeFile}/>
        <AudioContainer file={file} />
      </div>
    );
  }
}

export default TestContainer;
