import React from "react";
import Path2141 from "./Photo/Path2141.png";
import Group110 from './Photo/Group110.png';
import ebay from './Photo/Company/ebay.png';
import ebay1 from './Photo/Company/ebay1.png';
import ebay2 from './Photo/Company/ebay2.png';
import Layer1 from './Photo/Company/Layer1.png'
import './Footer.css';

function Footer() {
    return (
        <div className="Container-1">
            <img className="Icon-Purple" src={Path2141} />
            <div className="Text-Container">
                <h1 className="text-1">Sculpt your thoughts
                    to reality</h1>
                <p className="Text-2">Since 1989. For millions of users. We transform businesses with powerful and adaptable digital
                    solutions that satisfy the needs of today and unlock the opportunities of tomorrow
                </p>
                <div className="btn-more">
                    <button className="getstarted-btn">
                        Get Started
                    </button>
                    <button className="readmore-btn">
                        Read More
                    </button>
                </div>
                <div className="Company-Container">
                    <img className="ebay-icon" src={Layer1} alt='Layer1'/>
                    <img className="anydesk-icon" src={ebay2}  alt='ebay2'/>
                    <img className="frloitte-icon" src={ebay1} alt='ebay1'/>
                    <img className="viber-icon" src={ebay} alt='ebay'/>
                </div>
            </div>
            <div className="Group110">
                <img className="Group110-img" src={Group110} />
            </div>
        </div>
    );
};
export default Footer;
