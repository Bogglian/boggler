import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { PostList } from "../components";

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

const test = [ { id: 1, title: "hey", content: "hello" }, { id: 2, title: "hi", content: "hi2" } ];

class PostListContainer extends Component {

  handleClick = async (id) => {
    console.log("here " + id);
    const { AudioActions } = this.props;
    AudioActions.getAudio({id: id, title: "hello", content:"state", filename:'q.java'});
    // const response = await api.getAudio(id);
    // console.log(`AudioPosts data : ${response}`);
    // AudioActions.getAudio(response);
  }

  render() {
    const { postList } = this.props;
    return (
      <Positioner className="postlist">
        <Link to="/speech/audio/write">
          <EditorBtn className="write-btn">Write</EditorBtn>
        </Link>
        <PostWrapper>
          <PostList onClick={this.handleClick} postList={test}/>
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
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
