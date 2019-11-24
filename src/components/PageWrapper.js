import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PageWrapper extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       collapse: false
    }
  }

  onClickHandler = (e) => {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand" to="/">truetech</Link>
            <button onClick={this.onClickHandler} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
        <i className="fas fa-bars"></i>
            </button>            
            <div style={{display: this.state.collapse ? '' : 'none'}} className="navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">Me</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/work">Work</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-danger btn-sm js-scroll-trigger" to="//drive.google.com/open?id=10PFSkYZHtZfrATwBOXBQzZc52E9Ud-g-">My Resume</Link>
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
