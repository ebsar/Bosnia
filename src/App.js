import React, { Component, useEffect } from "react";
import NavBar from "./Navigation-Bar/NavBar";
import './index.css';
import ebay from './Company/ebay.png';
import ebay1 from './Company/ebay1.png';
import ebay2 from './Company/ebay2.png';
import Layer1 from './Company/Layer1.png';
import Path2141 from './Photos/Path2141.png';
import Group110 from './Photos/Group110.png';
import Aos from "aos";
import SideDrawer from "./Navigation-Bar/SideDrawer/SideDrawer";
import Backdrop from "./Navigation-Bar/SideDrawer/BackDrop/Backdrop";

class App extends Component{
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState ({sideDrawerOpen: false});
  };
  render (){
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen){
      sideDrawer=<SideDrawer click={this.backdropClickHandler} />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return(
      <div style={{height:'100%'}} className="Apps">
        <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
       {sideDrawer}
       {backdrop }
      </div>
    )
  }
}

export default App;
