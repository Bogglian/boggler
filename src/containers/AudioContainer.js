import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Article, AudioProgressbar, Editor, Wave } from '../components';
import {
  AudioLayout,
  ContentLayout,
  Positioner,
  ShadowedBox,
} from '../styledComponents';
import { getAudioBuffer, getContext } from '../lib/utils';

import * as audioActions from '../store/modules/audio';
import * as api from '../lib/api';

class AudioContainer extends Component {
  componentWillMount() {
    const { AudioActions } = this.props;

    AudioActions.setContext({ context: getContext() });
  }

  handleBuffer = () => {
    const { AudioActions } = this.props;

    AudioActions.bufferMedia();
  };
  handlePlay = () => {
    const { AudioActions } = this.props;

    AudioActions.bufferDone();
  };
  handleChangeInput = e => {
    const { AudioActions } = this.props;
    const { name, value } = e.target;

    AudioActions.changeInput({
      name,
      value,
    });
  };

  handleClickBold = () => {};
  handleClickHeader = () => {};
  handleClickItelic = () => {};
  handleClickQuote = () => {};
  handleReady = () => {};

  handleClickEdit = () => {
    const { AudioActions } = this.props;

    AudioActions.editorOn();
  };

  handleUploadFile = e => {
    const { AudioActions } = this.props;
    const audioFile = e.target.files[0];
    const fileURL = window.URL.createObjectURL(audioFile);

    AudioActions.uploadFile({ file: audioFile, url: fileURL });
    this.getFile(fileURL);
  };

  //액션함수를 호출하면 렌더가 계속 됌
  handleClickSave = () => {
    const { AudioActions, id } = this.props;
    if (id !== 0) {
      console.log('Modify Posts');
      this.modifyPosts();
      return;
    }
    console.log('New Posts');
    this.createPosts();
    AudioActions.bufferDone();
  };

  handlePosChange = pos => {
    const { AudioActions } = this.props;

    AudioActions.setPosition(pos);
  };

  getFile = async path => {
    const { AudioActions, context } = this.props;
    const fileBuffer = await getAudioBuffer(path, context);

    AudioActions.uploadBuffer({ buffer: fileBuffer });
  };

  modifyPosts = async () => {
    const { AudioActions } = this.props;
    const { id, title, content } = this.props;
    const modifiedPosts = {
      title: title,
      content: content,
    };

    AudioActions.editorOff();
    await api
      .modifyPosts(id, modifiedPosts)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(err => {
        alert('수정에 실패 하였습니다.');
      });
  };

  createPosts = async () => {
    const { AudioActions } = this.props;
    const { title, content, file } = this.props;

    const formData = new FormData();
    formData.append('audiofile', file);
    formData.append('content', content);
    formData.append('title', title);

    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    AudioActions.bufferMedia();
    await api.writePosts(formData, headers).then(response => {
      console.log(JSON.stringify(response.data));
      AudioActions.saveAudio(response.data.board);
    });
  };

  render() {
    const {
      buffering,
      editorMode,
      title,
      content,
      file,
      url,
      buffer,
      position,
    } = this.props;

    return (
      <Positioner clasName="audio">
        <AudioProgressbar className={buffering ? '' : 'none'} />
        <AudioLayout>
          <ShadowedBox>
            <div className="voicewave-box">
              <Wave
                url={url}
                onBuffer={this.handleBuffer}
                onReady={this.handleReady}
                onPlay={this.handlePlay}
                onPosChange={pos => this.handlePosChange(pos)}
                buffer={buffer}
                position={position}
              />
            </div>
          </ShadowedBox>
        </AudioLayout>
        <ContentLayout>
          {editorMode ? (
            <Editor
              title={title}
              content={content}
              file={file}
              onChangeFile={this.handleUploadFile}
              onChangeInput={this.handleChangeInput}
              onClickBold={this.handleClickBold}
              onClickHeader={this.handleClickHeader}
              onClickItelic={this.handleClickItelic}
              onClickQuote={this.handleClickQuote}
              onSubmit={this.handleClickSave}
            />
          ) : (
            <Article
              title={title}
              content={content}
              onClickEdit={this.handleClickEdit}
            />
          )}
        </ContentLayout>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ audio }) => ({
  id: audio.id,
  title: audio.title,
  content: audio.content,
  context: audio.context,
  file: audio.file,
  buffer: audio.buffer,
  url: audio.url,
  position: audio.position,
  editorMode: audio.editorMode,
  buffering: audio.buffering,
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다
const mapDispatchToProps = dispatch => ({
  AudioActions: bindActionCreators(audioActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioContainer);
