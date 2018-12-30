import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {
  SPostItem,
} from "../../styledComponents";

const PostItem = ({id, title, content, onClick}) => {
  return (
           <Link to={`/speech/audio/${id}`} onClick={() => onClick(id)}>
             <SPostItem>{title} - {content}</SPostItem>
           </Link>
         );
};


class PostListItems extends Component {

  render() {
    const { postList, onClick } = this.props;
    const postListItems = postList.map(
      ({ id, title, content }) => (
        <PostItem id={id} onClick={onClick} title={title} content={content} key={id} />
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
