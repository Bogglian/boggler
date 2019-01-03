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

import * as postingActions from "../store/modules/posting";
import * as audioActions from "../store/modules/audio";
import * as api from "../lib/api";

class AudioContainer extends Component {
  handleBuffer = () => {
    const { PostingActions } = this.props;

    PostingActions.bufferMedia();
  };
  handlePlay = () => {
    const { PostingActions } = this.props;

    PostingActions.bufferDone();
  }
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

    AudioActions.uploadFile({file: e.target.files[0]});
  }
  //액션함수를 호출하면 렌더가 계속 됌
  handleClickSave = () => {
    const { id } = this.props;
    if( id !== 0 ){
      console.log("Modify Posts")
      this.modifyPosts()
      return;
    }
    console.log("New Posts")
    this.createPosts()
  };

  modifyPosts = async () => {
    const { PostingActions, AudioActions } = this.props;
    const { id, title, content } = this.props;
    const modifiedPosts = {
      title: title,
      content: content
    }
    PostingActions.editorOff();
    await api.modifyPosts(id, modifiedPosts)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(err => {
        alert('수정에 실패 하였습니다.')
      })
  }

  createPosts = async () => {
    const { PostingActions, AudioActions } = this.props;
    const { title, content, file } = this.props;

    const formData = new FormData()
    formData.append("audiofile", file)
    formData.append("content", content)
    formData.append("title", title)

    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
    }}

    PostingActions.editorOff();
    PostingActions.bufferMedia();
    await api.writePosts(formData, headers)
      .then(response => {
        console.log(JSON.stringify(response.data));
        AudioActions.getAudio(response.data.board);
        PostingActions.bufferDone();
        PostingActions.editorOn();
      })
  }
  render() {
    const { buffering, editorMode, id, title, content, file } = this.props;

    console.log("Hell" + content);
    const filePath = "https://www.youtube.com/watch?v=YBzJ0jmHv-4";
    return (
      <Positioner clasName="audio">
        <AudioProgressbar className={buffering ? "" : "none"} />
        <AudioLayout>
          <ShadowedBox>
            <div className="voicewave-box">
              <Wave
                audioPath={filePath}
                onBuffer={this.handleBuffer}
                onReady={this.handleReady}
                onPlay={this.handlePlay}
              />
            </div>
          </ShadowedBox>
        </AudioLayout>
        <ContentLayout>
          {editorMode ? (
            <Editor
              title={title}
              content={content}
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
  file: audio.file,
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
