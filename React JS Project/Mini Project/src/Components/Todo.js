import React from "react";
import "./Todo.css";
import db from '../Firebase'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Icon,
  Button
} from "@material-ui/core";

function Todo({ todo, serial }) {
  return (
    <ListItem style={{ color: "red" }}>
      <ListItemAvatar>
        <Avatar>
          <Icon className="fa fa-asterisk" style={{ fontSize: 20,color:'blue' }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`Task ${serial + 1}`} secondary={todo.todo} />
      <Button
          variant="contained"
          color="secondary"
          onClick={e=>db.collection('todos').doc(todo.id).delete()}>
      <i className="fa fa-trash" style={{color:'white'}}  aria-hidden="true"></i>
      </Button>
    </ListItem>
  );
}

export default Todo;
