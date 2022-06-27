import Path2134 from './Icon/Path2134.png';
import Path2135 from './Icon/Path2135.png';
import Path2136 from './Icon/Path2136.png';
import Path2137 from './Icon/Path2137.png';
import Path2196 from './Icon/Path2196.png';
import Rectangle26 from './Icon/Rectangle26.png';
import './NavBar.css';
function NavBar (){
    return(
    <div className='App'>
       <div className='Logo'>
       <img className='Logo1' src={Path2134} />
            <img className='Logo2' src={Path2135} />
            <img className='Logo3' src={Rectangle26} />
            <img className='Logo4' src={Path2196} />
            <img className='Logo5' src={Path2136} />
            <img className='Logo6' src={Path2137} />
       </div>
       <div className='Name'>
        <h2>Bosniaoutsources</h2>
       </div>
       <nav className='Hero'>
        <ul className='Hero-Section' >
            <li className='Hero1' >Home</li>
            <li className='Hero2'>Services</li>
            <li className='Hero3'>Resources</li>
            <li className='Hero4'>Academy</li>
            <li className='Hero5'>Company</li>
            <li className='Hero6'>Blog</li>
            <li className='Hero7'>Career</li>
        </ul>
       </nav>
       <div className='btn'>
        <button className='Login-btn' >Log In</button>
        <button className='Signup-btn' >Sign up</button>
       </div>
        </div>
    );
}
export default NavBar;