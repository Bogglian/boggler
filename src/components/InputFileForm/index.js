import React, { Component } from 'react';
import { ButtonLayout, Positioner, StyledInput, ProgressLayout } from '../../styledComponents';
import {AudioProgressbar} from '../AudioProgressbar'

class InputFileForm extends Component {
  render() {
    const { onChange, onClick, progress } = this.props;
    return (
      <Positioner>
        <ProgressLayout>
          <AudioProgressbar className={progress ? "-stt " : "none"} />
        </ProgressLayout>
        <ButtonLayout>
          <form>
            <label htmlFor="file-upload">UPLOAD</label>
            <StyledInput
              type="file"
              name="upload"
              id="file-upload"
              onChange={onChange}
              accept=".wav"
            />
            <StyledInput
              id="file-submit"
              type="button"
              value="SUBMIT"
              onClick={onClick}
            />
          </form>
        </ButtonLayout>
      </Positioner>
    );
  }
}

export { InputFileForm };
