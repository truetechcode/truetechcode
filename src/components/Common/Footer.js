import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12">
          <ul className="list-inline social-buttons">
          <li className="list-inline-item">
              <Link target="_blank" to="//www.github.com/truetechcode/">
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" to="//www.linkedin.com/in/terver-aosu/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" to="//www.twitter.com/truetech_code">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" to="//www.dev.to/truetechcode">
                <i className="fab fa-dev"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-12 mt-4">
          <ul className="list-inline footer-links">
          <li className="list-inline-item">
            <Link className="btn btn-secondary" target="_blank" to="//drive.google.com/open?id=1vQDuGsZLDlts8DgIwGw4isKpItzydmFg">
              My Resume
            </Link>
          </li>
          <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/about">
                Me
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/work">
                Work
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer

