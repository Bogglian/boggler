import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Positioner,
  PostWrapper,
  SPostItem,
  SPostNav
} from "../styledComponents";

import * as postingActions from "../store/modules/posting";
import * as audioActions from "../store/modules/audio";

const PostItem = ({onClick}) => {
  return <SPostItem><Link to="/speech/audio/3" onClick={onClick}>Test Post</Link></SPostItem>;
};

class PostListContainer extends Component {

  handleClick = async (id) => {
    console.log("here");
    const { AudioActions } = this.props;
    AudioActions.getAudio({id: 3, title: "hello", content:"state", filename:'q.java'});
    // const response = await api.getAudio(id);
    // console.log(`AudioPosts data : ${response}`);
    // AudioActions.getAudio(response);
  }

  render() {
    return (
      <Positioner className="postlist">
        <PostWrapper>
          <PostItem onClick={this.handleClick}/>
          <PostItem onClick={this.handleClick}/>
          <PostItem onClick={this.handleClick}/>
          <PostItem onClick={this.handleClick}/>
          <SPostNav>Test Nav</SPostNav>
        </PostWrapper>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ edit }) => ({});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  PostingActions: bindActionCreators(postingActions, dispatch),
  AudioActions: bindActionCreators(audioActions, dispatch)
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
