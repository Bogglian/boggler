import React from 'react';
import PostListItems from './PostListItems';

const PostList = ({ onClick, postList, deletePosts }) => {
  return (
    <PostListItems onClick={onClick} postList={postList} deletePosts={deletePosts}/>
  );
}

export { PostList };
