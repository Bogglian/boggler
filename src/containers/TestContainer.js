import React, { Component } from 'react';
import axios from 'axios';

import { InputFileForm } from '../components';
import AudioContainer from './AudioContainer';
import MarkdownContainer from './MarkdownContainer';

class TestContainer extends Component {
  state = {
    input:
    '# Headline\n\n## sub-title\n\n* option\n  * sub-option1\n  * sub-option2\n\n> tip\n>\n> tipe contents\n\n\n```\ntest conetnts\n\ntest input\n\n```',
    file:null,
    progress:false
  }

  onChangeFile = e => {
    this.setState({
      file: e.target.files[0],
    });
  };

  onFileSubmit = () => {
    const formData = new FormData();
    formData.append('audiofile', this.state.file);
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    this.handleToggleProgress()
    axios.post(`http://localhost:8080/deepspeech`, formData, headers)
    .then(result=> {
      this.handleAddResult("\n```\n"+result.data.ds+"\n```\n")
      this.handleToggleProgress()
    })
  }

  handleToggleProgress= () => {
    this.setState(prevState => ({
      progress: !prevState.progress
    }))
  }

  handleAddResult = value => {
    this.setState(prevState => ({ input: prevState.input + value }));
  };

  handleBeforeChange = (editor, data, value) => {
    this.setState({ input: value });
  };

  render() {
    const {
      file,
      input,
      progress
    } = this.state;
    return (
      <div>
        <AudioContainer file={file} />
        <InputFileForm
          file={file}
          progress={progress}
          onChange={this.onChangeFile}
          onClick={this.onFileSubmit}
        />
        <MarkdownContainer
          input={input}
          onBeforeChange={this.handleBeforeChange}
        />
      </div>
    );
  }
}

export default TestContainer;
