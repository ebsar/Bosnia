import React, { Component, useEffect } from "react";
import NavBar from "./Navigation-Bar/NavBar";
import './index.css';
import Aos from "aos";
import SideDrawer from "./Navigation-Bar/SideDrawer/SideDrawer";
import Backdrop from "./Navigation-Bar/SideDrawer/BackDrop/Backdrop";
import Footer from "./Pages/Footer";

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
      </div>
    )
  }
}

export default App;
