//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

function tick() {
    counter++git r
    let arraycounter = counter.toString().padStart(6,0).split('');
    
    const element = (
        
        <div className=" container d-flex justify-content-center" 
        style={{marginTop: "25px", color: "white"}}>
            <h1 className="text-center" style={{color: "red"}}>C O N T A D O R</h1>
            <br />

            <div className="d-flex" style={{marginTop: "100px"}}>
                <i className="fa fa-clock" style={{fontSize: "40px"}}></i>
            {
                arraycounter.map((count,i)=>(
                    <h2 key = {i} className="text-center" style={{marginLeft: "95px"}}>{count}</h2>            
                ))
            }
            </div>
      </div>
    );
    ReactDOM.render(element,document.querySelector("#app"));
  }
  
  setInterval(tick, 1000);
//ReactDOM.render( < Home / > , document.querySelector("#app"));