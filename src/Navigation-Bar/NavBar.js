import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Group109 from './Icon/Group109.png';
import './NavBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./SideDrawer/BackDrop/Backdrop";
import Login from "../LoginApp/Login";
import App from "../App";

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
        <Router>
        <div className='Basic-Container'>
            <div className="Icon-Container" >
                <img className="Icon-Images" src={Group109}/>
                <span className="Title-Container"><Link to='App'> Bosniaoutsource </Link></span>
            </div>
            <div className="Nav-Container" >
                <Router>
                    <ul className="Nav-Section">
                        <li><a>Home</a></li>
                        <li>
                                <a onClick={onClick} href="#">Services   <BsChevronDown className="Reac-Icon1"/> </a>
                                {show && <div className="Services-Container">
                                    <ul className="Nav-Section1">
                                        <li><Link to='/Login'> Service1 </Link></li>
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
                </Router>
            </div>

            <div className="Btn-Conatiner" >
                <Router>
                    <button className="Login-Container" ><Link to='Login'> Login </Link></button>
                    <button className="Signup-Container" >Sign up</button>
                </Router>
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
            
                <Switch>
                <Route path='/' component={App}/>
                <Route path='/Login' component={Login}/>
                </Switch>
            
        </div>
        </Router>
    )
};
export default NavBar;