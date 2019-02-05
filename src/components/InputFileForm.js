import React, { Component } from 'react';

class InputFileForm extends Component {
  onChangeFile = e => {
    this.props.onChangeFile(e);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label for="fileUpload">UPLOAD</label>
            <input
              type="file"
              name="upload"
              id="fileUpload"
              onChange={this.onChangeFile}
              accept=".wav, .raw, .mp3, .mp4, .flex, .m4a"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default InputFileForm;