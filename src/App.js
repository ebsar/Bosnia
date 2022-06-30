import React from "react";
import NavBar from "./NavBar";
import './index.css';
import ebay from './Company/ebay.png';
import ebay1 from './Company/ebay1.png';
import ebay2 from './Company/ebay2.png';
import Layer1 from './Company/Layer1.png';
import Path2141 from './Photos/Path2141.png';
import Group110 from './Photos/Group110.png';
function App() {
  return (
    <div className="Apps">
      <div className="NavBar-Section">
        <NavBar />
      </div>
      <div className="All" >
        <div className="Image">
           <img className='Image1' src={Path2141} alt='Image1' /> 
        </div>
        <div className="Text-Section">
          <h1 className="Text1" >Sculpt your thoughts to reality</h1>
          <h6 className="Text2" >Since 1989. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow</h6>
          <div className="Text-Section1" >
              <button className="GS-btn">Get Started</button>
              <h6 className="RM-btn">Read More</h6>
          </div>
          <div className="Company-Section">
            <img className='Company1' src={Layer1} alt='Company1' />
              <img className='Company2' src={ebay2} alt='Company2' />
             <img className='Company3' src={ebay1} alt='Company3' />
            <img className='Company4' src={ebay} alt='Company4' /> 
          </div>
        </div>
        <div className="Image-Section">
        <img className='Images' src={Group110} alt='Images' />
        </div>
      </div> 
    </div>
  );
}

export default App;
