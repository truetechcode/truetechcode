import React, { Component } from 'react'
import Header from "../Common/Header";
// import image from "../assets/img/map-image.png";
import "../../css/Home.css";

//Re-usable components

class Home extends Component {
  render() {
    const h = window.screen.height * 0.63
    return (
      <Header
        headerHeight={{height: `${h}px`}}
        title="Working Remotely."
        subtitle="Full Stack Web Developer."
        buttonText="Hire Me!"
        link="/contact"
        showButton={true}
      />
    )
  }
}

export default Home
