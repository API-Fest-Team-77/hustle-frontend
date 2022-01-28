import React from 'react'
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';
import { ReactComponent as YourSvg } from './h-3.svg';

function Sidebar() {
    return (
        <div className = "sidebar">
            {/* App icon */}
            <YourSvg className= "sidebar__hustleIcon" />
            {/* Sidebar option */}
            <SidebarOption Icon = {HomeIcon} text = "Home"/>
            <SidebarOption Icon = {SearchIcon} text = "Explore"/>
            <SidebarOption Icon={ListAltIcon} text="List of ideas" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="Categories" />

            {/* Button -> post */}

            <Button variant = "outlined" className = "sidebar__hustle" fullWidth>Post</Button>
        </div>
    );
}

export default Sidebar
