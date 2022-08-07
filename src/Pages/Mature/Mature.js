import React from "react";
import Group110 from './Mature-Photo/Group110.png';
import Group112 from './Mature-Photo/Group112.png';
import './Mature.css';

function Mature (){
    return(
        <div className="Mature-Main">
            <div className="First-Image">
            <img src={Group110} />
            </div>
            <div className="Text">
                <span>
                Mature and expanding IT market
                </span>
                <p> 
                The IT industry is one of the most rapidly growing segments of the Bosnian economy. For the last five years, it has been on a constant rise, with 20% year-over-year growth. More than 100 of the Fortune 500 global technology companies
                </p>
                <div className="btn-Container">
                <button className="GetStarted-btn">
                    Get Started
                </button>
                <button className="ReadMore-btn">
                    Read More
                </button>
                </div>
            </div>
            <div className="Second-Image" >
                <img src={Group112} />
            </div>
        </div>
    );
}
export default Mature;