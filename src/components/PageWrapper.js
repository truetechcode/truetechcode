import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">truetech</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
        <i className="fas fa-bars"></i>
            </button>            
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="//drive.google.com/open?id=10PFSkYZHtZfrATwBOXBQzZc52E9Ud-g-">My Resume</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">Me</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/work">Work</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default PageWrapper
