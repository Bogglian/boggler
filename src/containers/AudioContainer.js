import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Article, AudioProgressbar, Editor, Wave } from "../components";
import {
  AudioLayout,
  ContentLayout,
  Positioner,
  ShadowedBox
} from "../styledComponents";
import { getAudioBuffer, getContext } from "../lib/utils";

import * as postingActions from "../store/modules/posting";
import * as audioActions from "../store/modules/audio";
import * as api from "../lib/api";

class AudioContainer extends Component {
  componentWillMount() {
    const { AudioActions } = this.props;
    const audioContext = getContext();

    // setContext 액션함수 추가 필요
    AudioActions.setContext({
      context: audioContext
    });
  }

  handleBuffer = () => {
    const { PostingActions } = this.props;

    PostingActions.bufferMedia();
  };
  handlePlay = () => {
    const { PostingActions } = this.props;

    PostingActions.bufferDone();
  };
  handleChangeInput = e => {
    const { AudioActions } = this.props;
    const { name, value } = e.target;

    AudioActions.changeInput({
      name,
      value
    });
  };

  handleClickBold = () => {};
  handleClickHeader = () => {};
  handleClickItelic = () => {};
  handleClickQuote = () => {};

  handleClickEdit = () => {
    const { PostingActions } = this.props;

    PostingActions.editorOn();
  };

  handleReady = () => {
    const { PostingActions } = this.props;

    PostingActions.bufferMedia();
  };

  handleUploadFile = e => {
    const { AudioActions } = this.props;
    const fileURL = window.URL.createObjectURL(e.target.files[0]);

    this.getFile(fileURL);

    // uploadFile 액션함수 수정 필요( 인자 2개로 )
    AudioActions.uploadFile({ file: e.target.files[0], url: fileURL });
  };

  //액션함수를 호출하면 렌더가 계속 됌
  handleClickSave = () => {
    const { PostingActions, id } = this.props;
    if (id !== 0) {
      console.log("Modify Posts");
      this.modifyPosts();
      return;
    }
    console.log("New Posts");
    this.createPosts();
    PostingActions.bufferDone();
  };

  handlePosChange = pos => {
    const { AudioActions } = this.props;

    // setPosition 액션함수 필요
    AudioActions.setPosition({ markerPosition: pos });
  };

  getFile = async (path = "audio/test.mp3") => {
    const { AudioActions, context } = this.props;
    const fileBuffer = await getAudioBuffer(path, context);

    // uploadBuffer 액션함수 필요
    AudioActions.uploadBuffer(fileBuffer);
  };

  modifyPosts = async () => {
    const { PostingActions } = this.props;
    const { id, title, content } = this.props;
    const modifiedPosts = {
      title: title,
      content: content
    };

    PostingActions.editorOff();
    await api
      .modifyPosts(id, modifiedPosts)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(err => {
        alert("수정에 실패 하였습니다.");
      });
  };

  createPosts = async () => {
    const { PostingActions, AudioActions } = this.props;
    const { title, content, file } = this.props;

    const formData = new FormData();
    formData.append("audiofile", file);
    formData.append("content", content);
    formData.append("title", title);

    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    };

    PostingActions.editorOff();
    PostingActions.bufferMedia();
    await api.writePosts(formData, headers).then(response => {
      console.log(JSON.stringify(response.data));
      AudioActions.getAudio(response.data.board);
      PostingActions.bufferDone();
      PostingActions.editorOn();
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
      markerPosition
    } = this.props;

    return (
      <Positioner clasName="audio">
        <AudioProgressbar className={buffering ? "" : "none"} />
        <AudioLayout>
          <ShadowedBox>
            <div className="voicewave-box">
              <Wave
                audioPath={url}
                onBuffer={this.handleBuffer}
                onReady={this.handleReady}
                onPlay={this.handlePlay}
                onPosChange={pos => this.handlePosChange(pos)}
                buffer={buffer}
                position={markerPosition}
                markerStyle={{
                  color: "#030303",
                  width: 4
                }}
                waveStyle={{
                  animate: true,
                  color: "#020202",
                  plot: "bar",
                  pointWidth: 1
                }}
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

const mapStateToProps = ({ posting, audio }) => ({
  id: audio.id,
  title: audio.title,
  content: audio.content,
  context: audio.context,
  file: audio.file,
  markerPosition: audio.markerPosition,
  editorMode: posting.editorMode,
  buffering: posting.buffering
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다
const mapDispatchToProps = dispatch => ({
  PostingActions: bindActionCreators(postingActions, dispatch),
  AudioActions: bindActionCreators(audioActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioContainer);
