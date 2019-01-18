import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PostList } from '../components';
import * as api from '../lib/api';

import {
  Positioner,
  PostWrapper,
  SPostItem,
  SPostNav,
  EditorBtn,
} from '../styledComponents';

import * as audioActions from '../store/modules/audio';
import * as audioListActions from '../store/modules/audioList';

class PostListContainer extends Component {
  handleClick = async id => {
    const { AudioActions, PostingActions } = this.props;
    const response = await api.getAudio(id);

    AudioActions.editorOff();
    console.log(`AudioPosts data : ${JSON.stringify(response)}`);
    AudioActions.getAudio(response.data.board);
  };

  handleClickWrite = () => {
    const { AudioActions } = this.props;

    AudioActions.editorOn();
  };

  getPostList = async () => {
    const { AudioListActions } = this.props;
    // AudioListActions.getAudioList();
    await api.getAudioList().then(response => {
      console.log(
        `Get PostList from server : ${JSON.stringify(response.data)}`,
      );
      AudioListActions.getAudioList(response.data.boards);
    });
  };

  deletePosts = async id => {
    const { AudioListActions } = this.props;
    const { postList } = this.props;

    const deletedPostList = postList.filter(posts => posts.id !== id);
    await api.deletePosts(id).then(response => {
      AudioListActions.deletePosts(deletedPostList);
    });
  };

  componentDidMount() {
    this.getPostList();
  }

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
          <PostList
            onClick={this.handleClick}
            postList={postList}
            deletePosts={this.deletePosts}
          />
          <SPostNav>Test Nav</SPostNav>
        </PostWrapper>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ audioList }) => ({
  postList: audioList.audios,
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  AudioActions: bindActionCreators(audioActions, dispatch),
  AudioListActions: bindActionCreators(audioListActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListContainer);
