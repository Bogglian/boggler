import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Article, Editor } from "../components";
import {
  ContentLayout,
  Positioner,
  ShadowedBox,
  WaveLayout
} from "../styledComponents";
import * as api from '../lib/api';

import * as playbackActions from "../store/modules/playback";
import * as audioActions from "../store/modules/audio";

class AudioContainer extends Component {

  render() {
    const editorMode = true;
    const { id, title, content, filename } = this.props;
    console.log(this.props.title);
    return (
      <Positioner clasName="audio">
        <WaveLayout>
          <ShadowedBox>
            <div className="playback-box" />
            <div className="voicewave-box" />
          </ShadowedBox>
        </WaveLayout>
        <ContentLayout>{editorMode ? <Editor /> : <Article />}</ContentLayout>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ playback, audio }) => ({
  id: audio.audio.id,
  title: audio.audio.title,
  content: audio.audio.content,
  filename: audio.audio.filename
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
