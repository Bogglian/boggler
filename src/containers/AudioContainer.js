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

class AudioContainer extends Component {
  handleBuffer = () => {
    const { PostingActions } = this.props;

    PostingActions.bufferMedia();
  };
  handleChangeInput = e => {
    const { PostingActions } = this.props;
    const { name, value } = e.target;

    PostingActions.changeInput({
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
  handleClickSave = () => {
    const { PostingActions } = this.props;

    PostingActions.editorOff();
  };
  render() {
    const { buffering, editorMode, id, title, content, filename } = this.props;

    console.log(this.props.content);
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
              />
            </div>
          </ShadowedBox>
        </AudioLayout>
        <ContentLayout>
          {editorMode ? (
            <Editor
              title={title}
              textarea={content}
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
  filename: audio.filename,
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
