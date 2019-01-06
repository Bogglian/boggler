import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {
  SPostItem,
  PostItemLinkBtn,
  PostItemContent,
  PostItemTime,
  PostItemLayout,
  PostItemBtnLayout,
  EditorBtn
} from "../../styledComponents";

const PostItem = ({id, title, content, createdTime, onClick, deletePosts}) => {
  return (
             <SPostItem>
              <PostItemLayout>
                <PostItemLinkBtn to={`/speech/audio/${id}`} onClick={() => onClick(id)}>
                  {title}
                </PostItemLinkBtn>
                <PostItemContent>
                  {content}
                <PostItemTime>
                  {createdTime}
                </PostItemTime>
                </PostItemContent>
              </PostItemLayout>
              <PostItemBtnLayout>
              <EditorBtn className="delete-btn" onClick={() => deletePosts(id)} >
                Delete
              </EditorBtn>
              </PostItemBtnLayout>
             </SPostItem>
         );
};


class PostListItems extends Component {

  render() {
    const { postList, onClick, deletePosts } = this.props;
    const postListItems = postList.map(
      ({ id, title, content, created_time }) => (
        <PostItem
          id={id}
          onClick={onClick}
          deletePosts={deletePosts}
          title={title}
          content={content}
          createdTime={created_time}
          key={id}
        />
      )
    );

    return(
      <div>
        { postListItems }
      </div>
    );
  }
}

export default PostListItems;
