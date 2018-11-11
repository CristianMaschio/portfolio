import React, { Component } from "react";
import "./Home.css";
import imageProfile from "./imageProfile.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <div className="header-blue" />
          <div className="header-information">
            <div className="image-container">
              <img className="image-profile" src={imageProfile} />
            </div>
            <text>Prova</text>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
