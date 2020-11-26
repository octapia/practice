import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../Stateprovider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* Header Left */}
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
          alt="facebook-logo"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="facebook search.." />
        </div>
      </div>

      {/* Header Center */}
      <div className="header_center">
        <div className="header_options active">
          <HomeIcon size="large" />
        </div>
        <div className="header_options">
          <FlagIcon size="large" />
        </div>
        <div className="header_options">
          <SubscriptionsIcon size="large" />
        </div>
        <div className="header_options">
          <StorefrontIcon size="large" />
        </div>
        <div className="header_options">
          <SupervisedUserCircleIcon size="large" />
        </div>
      </div>

      {/* Header Right */}
      <div className="header_right">
        <Avatar alt="Remy Sharp" src={user.photoURL} />
        <h4>{user.displayName}</h4>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
