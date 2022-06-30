import { BsChevronDown } from "react-icons/bs";
import Group109 from './Icon/Group109.png';
import './NavBar.css';
function NavBar() {
    return (
        <div className='App'>
            <div className='Logo'>
                <img className='Logo1' src={Group109} alt='Logo1' />
            </div>
            <div className='Name'>
                <h3>Bosniaoutsource</h3>
            </div>
            <nav className='Hero'>
                <ul className='Hero-Section' >
                    <li className='Hero1' >Home</li>
                    <li className='Hero2'>Services </li>
                    <li className='Hero3'>Resources</li>
                    <li className='Hero4'>Academy</li>
                    <li className='Hero5'>Company</li>
                    <li className='Hero6'>Blog</li>
                    <li className='Hero7'>Career</li>
                </ul>
            </nav>
            <div className='btn'>
                <h5 className='Login-btn' >Log In</h5>
                <button className='Signup-btn' >Sign up</button>
            </div>
        </div>
    );
}
export default NavBar;