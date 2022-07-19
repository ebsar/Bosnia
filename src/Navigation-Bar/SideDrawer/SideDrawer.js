import React from "react";
import '../SideDrawer/SideDrawer.css';
import { GrClose } from "react-icons/gr";
import GroupIcon from './Icon/GroupIcon.png';
import DrawerToggleButton from "./DrawerToggleButton";
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <div className="Drawer-Container">
        <div className="Icon-Container" >
                <img src={GroupIcon} />
            </div>
            <div className="Title-Container" >
                <span>Bosniaoutsource</span>
            </div>
            <div onClick={props.click} >
                 <GrClose/>
            </div>
            </div>
        <div>
        </div>
        <ul>
        <li> <a href="" >Home</a> </li>
                    <li> <a href="" >Serrvices</a></li>
                    <li> <a href="" >Resources</a></li>
                    <li> <a href="" >Academy</a></li>
                    <li> <a href="" >Company</a>  </li>
                    <li> <a href="" >Blog</a> </li>
                    <li> <a href="" >Career</a></li>
        </ul>
        <div className="Btn-Conatiner" >
                <button className="Login-Container" >Log in</button>
                <button className="Signup-Container" >Sign up</button>
            </div>
    </nav>
    );
};
export default sideDrawer;