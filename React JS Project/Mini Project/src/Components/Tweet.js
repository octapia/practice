import React from "react";
import "./Tweet.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />

        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionButton />
        </div>
      </div>
    </div>
  );
}

export default Tweet;

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less than 140 characters.</div>;
}
function Author() {
  return (
    <div className="author">
      <span className="name">Tahidur_rahman</span>
      <span className="handle">@my_handle</span>
    </div>
  );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;

const RetweetButton = () => <i className="fa fa-retweet retweet-button"></i>;
const LikeButton = () => <i className="fa fa-heart like-button"></i>;
const MoreOptionButton = () => (
  <i className="fa fa-ellipsis-h more-option-button"></i>
);
