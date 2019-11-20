import React, { Component } from 'react'
import Header from "../Common/Header";
// import image from "../assets/img/map-image.png";

import Team from "../Common/Team";

class About extends Component {
  render() {
    return (
      <div>
        <Header

          title=""
          subtitle="Great to meet you!"
          showButton={false}
          // image={image}
        />
        <Team />
        {/* <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">My Journey</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>November 2019</h4>
                        <h4 className="subheading">JPMorgan Chase & Co.</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Software Engineering Virtual Experience,
I participated in an online software engineering internship, that saw me working of some software tasks
from the company’s day to day operations.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>November 2019</h4>
                        <h4 className="subheading">Microverse</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Student Mentor, I mentor learners in the software developers program.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2018 ​ - 2019</h4>
                        <h4 className="subheading">AskWonder</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Research Analyst, I was part of a research team that helps deliver quality research to clients on various topics.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2017 ​ - 2019</h4>
                        <h4 className="subheading">Tivkpaa Modern Technologies Nig. Ltd.</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Trainer, Application Developer and IT Technician
Training, Website Design, Maintenance and installation of I.T systems.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part
                    <br />Of Our
                    <br />Story!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    )
  }
}

export default About
