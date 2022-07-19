import React from "react";
import '../BackDrop/Backdrop.css';
const Backdrop = props =>(
    <div className="backdrop" onClick={props.click} />
)
export default Backdrop;