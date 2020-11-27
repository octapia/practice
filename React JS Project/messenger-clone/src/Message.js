import React from "react";
import "./App.css";

const Message = ({ username, message }) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"} `}>
    
            {!isUser && `${message.username || 'Unknown User'}: `}{message.message}
          
    </div>
  );
}

export default Message;