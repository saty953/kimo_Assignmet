import React from "react";
import "./FirstPage.css";
import NavbarPage from "./Navbar";
import {Container} from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome ">
      <Container> <NavbarPage /></Container>  
     <div className="container-fluid">
       
        <div className="d-f">
          <div
            className="abc"
            style={{ 
              fontSize: "110px",
              background: "none",
              color: "white",
              opacity: "0.7",
              fontFamily: "IBM Plex Mono",
            }}
          >
            Welcome <br/> to Hawaii
          </div>
          </div>
          </div>
    </div>
  );
};

export default Welcome;
