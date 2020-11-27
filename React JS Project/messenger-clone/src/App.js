import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import firebase from "firebase/app";
import db from "./firebase";

function App() {
  const [input, setinput] = useState("");
  const [username, setusername] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect((e) => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect((e) => {
    setusername(prompt("What's your name ? "));
  }, []);

  const send = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="message">
      <h2>Messenger</h2>

      <form onSubmit={send}>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit" disabled={!input}>
          Send
        </button>
      </form>

      {messages.map(({ id, message }) => {
        return (
          <>
            <Message message={message} username={username} key={id} />
          </>
        );
      })}
    </div>
  );
}

export default App;
