import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as editActions from "../store/modules/edit";

class PostListContainer extends Component {
  render() {
    return <div>PostList</div>;
  }
}

const mapStateToProps = ({ edit }) => ({});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  EditActions: bindActionCreators(editActions, dispatch)
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
