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

import * as playbackActions from "../store/modules/playback";
import * as audioActions from "../store/modules/audio";

class AudioContainer extends Component {
  handleBuffer = () => {};
  handleChangeTitle = () => {};
  handleChangeTextArea = () => {};
  handleClickBold = () => {};
  handleClickHeader = () => {};
  handleClickItelic = () => {};
  handleClickQuote = () => {};
  handleEdit = () => {};
  handleReady = () => {};

  render() {
    const { id, title, content, filename } = this.props;
    console.log(this.props.content);
    const editorMode = false;
    const filePath = "https://www.youtube.com/watch?v=YBzJ0jmHv-4";
    const buffering = true;
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
              onChangeTitle={this.handleChangeTitle}
              onChangeTextArea={this.handleChangeTextArea}
              onClickBold={this.handleClickBold}
              onClickHeader={this.handleClickHeader}
              onClickItelic={this.handleClickItelic}
              onClickQuote={this.handleClickQuote}
            />
          ) : (
            <Article
              title={title}
              content={content}
              onEdit={this.handleEdit}
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
  filename: audio.filename
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  PlaybackActions: bindActionCreators(playbackActions, dispatch),
  AudioActions: bindActionCreators(audioActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioContainer);
