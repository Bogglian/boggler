import React, { Component } from 'react';
import { ButtonLayout, Positioner, StyledInput } from '../../styledComponents';

class InputFileForm extends Component {
  render() {
    const { onChange, onClick } = this.props;
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
        </ButtonLayout>
      </Positioner>
    );
  }
}

export { InputFileForm };
