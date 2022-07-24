import React, { Component, useEffect } from "react";
import NavBar from "./Navigation-Bar/NavBar";
import './index.css';
import Aos from "aos";
import SideDrawer from "./Navigation-Bar/SideDrawer/SideDrawer";
import Backdrop from "./Navigation-Bar/SideDrawer/BackDrop/Backdrop";
import Footer from "./Pages/Footer";
import Features from "./Pages/Features";
import Future from "./Pages/Future";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer click={this.backdropClickHandler} />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }} className="Apps">
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <Footer />
        <Features/>
        <Future/>
      </div>
    )
  }
}

export default App;
