import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import MoreIcon from "@material-ui/icons/More";

import React from "react";
import "./Post.css";

function Post({ postMan, postManImg, timestamp, postImg, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={postManImg} />
        <div className="post__top__right">
          <h4>{postMan}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__center">
        <p>{message}</p>
        <img src={postImg} alt="" />
      </div>

      <div className="post__bottom">
        <div className="post__options">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__options">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__options">
          <ShareIcon />
          <p>Share</p>
        </div>
        <div className="post__options">
          <MoreIcon />
          <p>More</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
