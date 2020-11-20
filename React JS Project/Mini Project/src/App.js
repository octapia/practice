import React, { useState,useEffect } from "react";
import { Button, Icon, TextField } from "@material-ui/core";
import "./App.css";
import Todo from "./Components/Todo";
import db from './Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';

export default function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTask(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
  },[])

  const addTask = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setTask([...task, input]);
    setInput("");
  };
  return (
    <>
      <h2
        style={{
          marginBottom: "50px",
          color: "steelblue",
          textAlign: "center",
        }}
      >
        <Icon className="fa fa-tasks" style={{ fontSize: 30 }} /> Todo List
      </h2>

      <form onSubmit={addTask} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!input}
        >
          Add Task&nbsp;
          <Icon className="fa fa-plus-circle" style={{ fontSize: 20 }} />
        </Button>
      </form>

      <ul style={{height:'70vh'}}>
        {task.map((todo, index) => (
          <Todo todo={todo} key={index} serial={index} />
        ))}
      </ul>
    </>
  );
}
