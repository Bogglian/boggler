import React from 'react';
import PostListItems from './PostListItems';

const PostList = ({ onClick, postList }) => {
  return (
    <PostListItems onClick={onClick} postList={postList}/>
  );
}

export { PostList };
