import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button" >
        <AiOutlineMenu className="MenuIcon" />
    </button>
);
export default DrawerToggleButton;