import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Group109 from './Icon/Group109.png';
import './NavBar.css';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./SideDrawer/BackDrop/Backdrop";
import { Outlet } from "react-router-dom";
function NavBar(props) {
    const [show1, setShow1] = useState(false);
    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow((prev) => !prev);
    };
    const onClick1 = () => {
        setShow1((prev) => !prev);
    };
    const [Nav, setNav] = useState(false);
    const onPress = () => {
        setNav((prev) => !prev);
    }
    return (
        <div className='Basic-Container'>
            <div className="Icon-Container" >
                <img className="Icon-Images" src={Group109}/>
                <span className="Title-Container">Bosniaoutsource </span>
            </div>
            <nav className="Nav-Container" >
                    <ul className="Nav-Section">
                        <li><a>Home</a></li>
                        <li>
                                <a onClick={onClick} href="#">Services   <BsChevronDown className="Reac-Icon1"/> </a>
                                {show && <div className="Services-Container">
                                    <ul className="Nav-Section1">
                                        <li>Service1</li>
                                        <li><a>Service 2</a></li>
                                    </ul>
                                </div>
                                }
                        </li>
                        <li><li> <a href="" >Resources</a></li></li>
                        <li>
                            <a onClick={onClick1} href="#"> Academy   <BsChevronDown className="Reac-Icon1" /></a>
                            {show1 && <div className="Academy-Container">
                                <ul className="Nav-Section1">
                                    <li> <a href="www.facebook.com"> Summer Academy</a> </li>
                                    <li><a href="#">Winter Academy</a> </li>
                                </ul>
                            </div>
                            }
                        </li>
                        <li> <a href="" >Company</a>  </li>
                        <li> <a href="" >Blog</a> </li>
                        <li> <a href="" >Career</a></li>
                    </ul>
            </nav>
            <div className="Btn-Conatiner" >
                    <button className="Login-Container" >Login</button>
                    <button className="Signup-Container" >Sign up</button>
            </div>
            <div onClick={onPress} className="toggle-container">
                <DrawerToggleButton />
                {
                    Nav &&
                    <SideDrawer/>
                }
                {
                    Nav && 
                    <Backdrop/>
                }
            </div>
        </div>
    )
};
export default NavBar;