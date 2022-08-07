import React from "react";
import './Future.css'
import Group111 from './Future/Group111.png'
import Group112 from './Future/Group112.png'
import Group113 from './Future/Group113.png'

function Future() {
    return (
        <div className="Future">
            
                <div className="title-images">
                <img className="Image-1" src={Group112}/>
                    <span className="Text-111">
                        Globally recognized outsourcing destination
                    </span>
                    <p className="Test-112">
                        Bosnia has gained compelling positions in prominent international technology related rankings. Global Outsourcing has listed 18 Bosnian software development outsourcing companies among the best outsourcing companies in Eastern Europe.
                    </p>
                </div>
                <div className="Image-Video">
                    <img src={Group111} />
                    <p>See Video</p>
                </div>
                <div className="Main-Image">
                    <img src={Group113}/>
                </div>
            </div>
    );
}
export default Future;