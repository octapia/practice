import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../Stateprovider";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarItem src={user.photoURL} title={user.displayName} />
      <SidebarItem
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarItem Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarItem Icon={PeopleIcon} title="Friends" />
      <SidebarItem Icon={ChatIcon} title="Messenger" />
      <SidebarItem Icon={StorefrontIcon} title="Marketplace" />
      <SidebarItem Icon={VideoLibraryIcon} title="Video" />
      <SidebarItem Icon={ExpandMoreIcon} title="More" />
    </div>
  );
}

export default Sidebar;
