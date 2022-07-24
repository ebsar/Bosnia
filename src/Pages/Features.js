import React from "react";
import './Features.css';
import Group107 from './Features/Group107.png';
import Group108 from './Features/Group108.png';
import Group109 from './Features/Group109.png';
import { BsChevronRight } from 'react-icons/bs';
function Features() {
    return (
        <div className='Features'>
            <div className="Bosnia-Features">
                <h1>Bosniaoutsources Features</h1>
            </div>
            <div className="Cards">
                <div className="Card-1">
                    <img src={Group107} />
                    <h5>Software Development</h5>
                    <p>Translate unique client requirements into custom software solutions with premier quality and advanced technologies</p>
                    <p>Learn More <BsChevronRight /> </p>
                </div>
                <div className="Card-2">
                    <img src={Group108} />
                    <h5>Web Development</h5>
                    <p>Revolutionize your business ideas using web development services for innovative and next gen web apps. </p>
                        <p>Learn More <BsChevronRight /></p>
                </div>
                <div className="Card-3">
                    <img src={Group109} />
                    <h5>Mobile App Development</h5>
                    <p >Achieve digital transformation by developing scalable, engaging and feature rich mobile applications</p>
                    <p>Learn More <BsChevronRight /></p>
                    
                </div>
            </div>
        </div>
    );
}
export default Features;