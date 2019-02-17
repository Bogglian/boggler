import React, { Component } from 'react';
import { ButtonLayout, Positioner, StyledInput } from '../../styledComponents';
import { AudioProgressbar } from '../AudioProgressbar';

class InputFileForm extends Component {
  render() {
    const {
      file,
      onChange,
      onClick,
      onConvertToMD,
      onConvertToPDF,
      progress,
    } = this.props;
    const submit = () => {
      if (!file || progress) {
        return (
          <StyledInput
            id="file-submit-block"
            type="button"
            value="SUBMIT"
            onClick={onClick}
            disabled
          />
        );
      } else {
        return (
          <StyledInput
            id="file-submit"
            type="button"
            value="SUBMIT"
            onClick={onClick}
          />
        );
      }
    };
    const fileUpload = () => {
      if (progress) {
        return (
          <StyledInput
            type="file"
            name="upload"
            id="file-upload-block"
            onChange={onChange}
            accept=".wav"
            disabled
          />
        );
      } else {
        return (
          <StyledInput
            type="file"
            name="upload"
            id="file-upload"
            onChange={onChange}
            accept=".wav"
          />
        );
      }
    };
    const toPdf = () => {
      if (progress) {
        return (
          <StyledInput
            id="file-submit"
            type="button"
            value="TO PDF"
            onClick={onConvertToPDF}
            disabled
          />
        );
      } else {
        return (
          <StyledInput
            id="file-submit"
            type="button"
            value="TO PDF"
            onClick={onConvertToPDF}
          />
        );
      }
    };
    const toMd = () => {
      if (progress) {
        return (
          <StyledInput
            id="file-submit"
            type="button"
            value="TO MD"
            onClick={onConvertToMD}
            disabled
          />
        );
      } else {
        return (
          <StyledInput
            id="file-submit"
            type="button"
            value="TO MD"
            onClick={onConvertToMD}
          />
        );
      }
    };
    return (
      <Positioner className="button">
        <ButtonLayout id={progress ? 'block' : 'hover'}>
          <form>
            <label htmlFor="file-upload">UPLOAD</label>
            {fileUpload()}
            {submit()}
            {toPdf()}
            {toMd()}
          </form>
          <AudioProgressbar className={progress ? '-stt ' : 'none'} />
        </ButtonLayout>
      </Positioner>
    );
  }
}

export { InputFileForm };
