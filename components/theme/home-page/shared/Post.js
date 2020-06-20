import React from "react";
import { PostStyles } from "./styles/PostStyles";

const Post = ({ src, date, text }) => {
  return (
    <PostStyles>
      <div className="post">
        <img src={"/" + src} alt="picture" className="post__image" />
        <span className="post__date">{date}</span>
        <p className="post__text">{text}</p>
      </div>
    </PostStyles>
  );
};

export default Post;
