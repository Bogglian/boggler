import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Article, Editor, Playback, Wave } from "../components";
import {
  AudioLayout,
  ContentLayout,
  Positioner,
  ShadowedBox
} from "../styledComponents";
import * as api from '../lib/api';

import * as playbackActions from "../store/modules/playback";
import * as audioActions from "../store/modules/audio";

class AudioContainer extends Component {

  render() {
    const editorMode = true;
    const { id, title, content, filename } = this.props;
    console.log(this.props.id);
    return (
      <Positioner clasName="audio">
        <AudioLayout>
          <ShadowedBox>
            <div className="playback-box">
              <Playback />
            </div>
            <div className="voicewave-box">
              <Wave />
            </div>
          </ShadowedBox>
        </AudioLayout>
        <ContentLayout>{editorMode ? <Editor /> : <Article />}</ContentLayout>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ playback, audio }) => ({
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
