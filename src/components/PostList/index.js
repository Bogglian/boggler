import React from 'react';
import PostListItems from './PostListItems';

const PostList = ({ onClick, postList, deletePosts }) => {
  return (
    <PostListItems onClick={onClick} postList={postList} delete={deletePosts}/>
  );
}

export { PostList };
