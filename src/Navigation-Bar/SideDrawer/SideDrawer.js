import React from "react";
import '../SideDrawer/SideDrawer.css';
import { GrClose } from "react-icons/gr";
import GroupIcon from './Icon/GroupIcon.png';
import DrawerToggleButton from "./DrawerToggleButton";
function SideDrawer (props) {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="Drawer-Container">
                <div className="Icon-Container1" >
                    <img className="icon-png" src={GroupIcon} />
                    <span className="Title-Container1" >Bosniaoutsource</span>
                  </div>
                <div className="Close-Icon" onClick={props.click} >
                    <GrClose />
                </div>
            </div>
            <div>
            </div>
            <ul>
                <li> <a href="" >Home </a> </li>
                <li> <a href="" >Serrvices</a></li>
                <li> <a href="" >Resources</a></li>
                <li> <a href="" >Academy</a></li>
                <li> <a href="" >Company</a>  </li>
                <li> <a href="" >Blog</a> </li>
                <li> <a href="" >Career</a></li>
            </ul>
            <div className="btn-container">
                <button className="Login-btn">Log in</button>
                <button className="Signup-btn">Sign up</button>
            </div>
        </nav>
    );
};
export default SideDrawer;