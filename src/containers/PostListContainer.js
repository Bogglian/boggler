import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { PostList } from "../components";
import * as api from "../lib/api";

import {
  Positioner,
  PostWrapper,
  SPostItem,
  SPostNav,
  EditorBtn
} from "../styledComponents";

import * as postingActions from "../store/modules/posting";
import * as audioActions from "../store/modules/audio";
import * as audioListActions from "../store/modules/audioList";

const test = [
  { id: 1, title: "hey", content: "hello", createdTime: "2018-12-31" },
  { id: 2, title: "hi", content: "hi2", createdTime: "2019-01-01" }
];

class PostListContainer extends Component {
  handleClick = async id => {
    console.log("Cliked Posts : " + id);
    const { AudioActions, PostingActions } = this.props;

    PostingActions.editorOff();
    AudioActions.getAudio({
      id: id,
      title: "hello",
      content: "state",
      filename: "q.java"
    });
    // const response = await api.getAudio(id);
    // console.log(`AudioPosts data : ${response}`);
    // AudioActions.getAudio(response.data);
  };

  handleClickWrite = () => {
    const { PostingActions } = this.props;

    PostingActions.editorOn();
  };

  getPostList = async () => {
    const { AudioListActions } = this.props;
    const response = await api.getAudioList();
    console.log(`Get PostList from server : ${response.data}`);
    AudioListActions.getAudioList();
    // await api.getAudioList()
    //   .then(response => {
    //     console.log(`Get PostList from server : ${response.data}`);
    //     AudioListActions.getAudioList();
    //   });
  };

  render() {
    const { postList } = this.props;
    return (
      <Positioner className="postlist">
        <Link to="/speech/audio/write">
          <EditorBtn className="write-btn" onClick={this.handleClickWrite}>
            Write
          </EditorBtn>
        </Link>
        <PostWrapper>
          <PostList onClick={this.handleClick} postList={test} />
          <SPostNav>Test Nav</SPostNav>
        </PostWrapper>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ audioList }) => ({
  postList: audioList.audios
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  PostingActions: bindActionCreators(postingActions, dispatch),
  AudioActions: bindActionCreators(audioActions, dispatch),
  AudioListActions: bindActionCreators(audioListActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
