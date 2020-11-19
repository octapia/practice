import React from "react";
import "./Todo.css";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Icon,
} from "@material-ui/core";

function Todo({ todo, serial }) {
  return (
    <ListItem style={{ color: "red" }}>
      <ListItemAvatar>
        <Avatar>
          <Icon className="fa fa-asterisk" style={{ fontSize: 20 }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`Task ${serial + 1}`} secondary={todo} />
    </ListItem>
  );
}

export default Todo;
