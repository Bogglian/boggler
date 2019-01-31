import React, { Component } from "react";
import axios from 'axios';

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
  onFileSubmit = () => {
    const formData = new FormData();
    formData.append("audiofile", this.state.file);
    const headers = {
	    headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data"
	    }
    };
    axios.post(`http://localhost:8080/deepspeech`, formData, headers).then(result=> {
      this.handleAddResult("\n```\n"+result.data.ds+"\n```\n")
    })
  }

  handleAddResult=value=>{
    this.setState(prevState => ({input: prevState.input + value}));
  }

  render() {
    const file = this.state.file;
    const input = this.state.input;
    return (
      <div>
        <input type="text" value={input} />
        <input type="button" value="submit" onClick={this.onFileSubmit} />
        <InputFileForm onChangeFile={this.onChangeFile} />
        <AudioContainer file={file} />
      </div>
    );
  }
}

export default TestContainer;
