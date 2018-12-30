import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Positioner,
  PostWrapper,
  SPostItem,
  SPostNav
} from "../styledComponents";

import * as postingActions from "../store/modules/posting";

const PostItem = () => {
  return <SPostItem>Test Post</SPostItem>;
};

class PostListContainer extends Component {
  render() {
    return (
      <Positioner className="postlist">
        <PostWrapper>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <SPostNav>Test Nav</SPostNav>
        </PostWrapper>
      </Positioner>
    );
  }
}

const mapStateToProps = ({ edit }) => ({});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  PostingActions: bindActionCreators(postingActions, dispatch)
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
