import { Avatar } from "@material-ui/core";
import React,{useState} from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoIcon from '@material-ui/icons/Photo';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "./PostSender.css";
import { useStateValue } from "../Stateprovider";
import firebase from 'firebase'
import db from '../firebase'

function PostSender() {
    const [input,setInput] = useState('');
    const [url,setUrl] = useState('');
    const [{user},dispatch] = useStateValue();
    const handleSubmit = e => {
        e.preventDefault();
        // CLever DB
        db.collection('posts').add({
          message : input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          profilePic:user.photoURL,
          username:user.displayName,
          image:url
        })

        setInput('');
        setUrl('');

    }
  return (
    <div className="postsender">
      {/* Post Sender Top */}
      <div className="postsender__top">
        <Avatar src={user.photoURL} />
        <form  onSubmit={handleSubmit}>
        <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder={`What's on your mind, ${user.displayName.split(' ')[0]} ?`} />
        <input value={url} onChange={e=>setUrl(e.target.value)} type="text" placeholder="imageURL(optional) ?" />
        <button type="submit">
        </button>
        </form>
      </div>
      {/* Post Sender Bottom */}
      <div className="postsender__bottom">
        <div className="postsender__options">
          <VideoCallIcon />
          <h4>Live Video</h4>
        </div>
        <div className="postsender__options">
          <PhotoIcon />
          <h4>Photo/Gallery</h4>
        </div>
        <div className="postsender__options">
          <EmojiEmotionsIcon />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default PostSender;
