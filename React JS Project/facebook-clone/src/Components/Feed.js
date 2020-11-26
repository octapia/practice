import React, { useState, useEffect } from "react";
import { useStateValue } from "../Stateprovider";
import Post from "./Post";
import PostSender from "./PostSender";
import Storyreel from "./Storyreel";
import db from "../firebase";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="feed">
      <Storyreel />
      <PostSender />
      {posts.map((post) => {
        return (
          <>
            <Post
              key={post.id}
              postMan={post.data.username}
              postManImg={post.data.profilePic}
              timestamp={post.data.timestamp}
              postImg={post.data.image}
              message={post.data.message}
            />
          </>
        );
      })}
    </div>
  );
}

export default Feed;
