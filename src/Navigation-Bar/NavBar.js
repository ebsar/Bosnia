import { BsChevronDown } from "react-icons/bs";
import Group109 from './Icon/Group109.png';
import './NavBar.css';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
const NavBar = props =>( 
        <div className='Basic-Container'>
            <div className="Icon-Container" >
                <img className="Icon-Images" src={Group109} />
                <span className="Title-Container">Bosniaoutsource</span>
            </div>
            <div className="Nav-Container" >
                <ul className="Nav-Section">
                    <li> <a href="" >Home</a> </li>
                    <li> <a href="" >Serrvices</a></li>
                    <li> <a href="" >Resources</a></li>
                    <li> <a href="" >Academy</a></li>
                    <li> <a href="" >Company</a>  </li>
                    <li> <a href="" >Blog</a> </li>
                    <li> <a href="" >Career</a></li>
                </ul>
            </div>
            <div className="Btn-Conatiner" >
                <button className="Login-Container" >Log in</button>
                <button className="Signup-Container" >Sign up</button>
            </div>
            <div className="toggle-container">
            <DrawerToggleButton click= {props.drawerClickHandler}/>
        </div>
        </div>
    
);
export default NavBar;