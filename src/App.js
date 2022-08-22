import React from "react";
import NavBar from "./Navigation-Bar/NavBar";
import './index.css';
import Footer from "./Pages/Footer";
import Features from "./Pages/Features";
import Future from "./Pages/Future";
import Mature from "./Pages/Mature/Mature";

function App (){
    return (
      
     <div>
      <NavBar/>
      <Footer/>
      <Features/>
      <Future/>
      <Mature/>
     </div>
    )
  }

export default App;
