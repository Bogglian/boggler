import React, { Component } from 'react';
import { ButtonLayout, Positioner, StyledInput } from '../../styledComponents';
import { AudioProgressbar } from '../AudioProgressbar';

class InputFileForm extends Component {
  render() {
    const { onChange, onClick, progress } = this.props;
    return (
      <Positioner>
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
          <AudioProgressbar className={progress ? '-stt ' : 'none'} />
        </ButtonLayout>
      </Positioner>
    );
  }
}

export { InputFileForm };
