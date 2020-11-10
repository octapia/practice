import React from "react";
import "./Tweet.css";
import moment from "moment";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message message={tweet.message} />

        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionButton />
        </div>
      </div>
    </div>
  );
}

export default Tweet;

// ************Micro-components***************


function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

const Message = ({ message }) => <div className="message">{message}</div>;

function Author({ author }) {
  const { name, handle } = author;
  return (
    <div className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </div>
  );
}

const Time = ({time}) => {
    const timestamp = moment(time).fromNow();
return (<span className="time">{timestamp}</span>)
}

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;

// ************Retweet***************
const RetweetButton = ({count}) =>{ 
    
const getRetweeet = count => count>0 ? <span className="retweet-count">{count}</span>:null;

return (
    <span className="retweet-button">
        <i className="fa fa-retweet"></i>
        {getRetweeet(count)}
    </span>
)
}

// ************like***************

const LikeButton = ({count}) => {

return (
    <span className="like-button">
        <i className="fa fa-heart"></i>
        {count>0 && <span className="like-count">{count}</span>}
    </span>
)
}

const MoreOptionButton = () =>{ return (
  <i className="fa fa-ellipsis-h more-option-button"></i>
)}
