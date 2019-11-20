import React, { Component } from 'react';
import TeamMember from './TeamMember';

import img from "../assets/img/team/1.jpg";

const teamMembers = [
  {name: 'Terver Aosu', title: 'Full Stack Web Developer', image: img, twitter: '//www.twitter.com/truetech_code', linkedin: '//www.linkedin.com/in/terver-aosu/'}
]
class Team extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
            <TeamMember {...teamMembers[0]} />
            <div className="col-sm-12 col-md-12 col-lg-8 bg-light">
            <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Keywords: </span><span className="btn-group ml-2"><span className="btn btn-primary">Git</span> <span className="btn btn-primary">Heroku</span> <span className="btn btn-primary">JavaScript</span> <span className="btn btn-primary">Ruby</span> <span className="btn btn-primary">php</span><span className="btn btn-primary">Rails</span> <span className="btn btn-primary">React</span> <span className="btn btn-primary">Laravel</span></span></p>  
            <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Languages: </span><span className="btn-group ml-2"><span className="btn btn-primary">JavaScript</span> <span className="btn btn-primary">Ruby</span> <span className="btn btn-primary">php</span></span></p>  
            <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Frameworks: </span><span className="btn-group ml-2"><span className="btn btn-primary">Rails</span> <span className="btn btn-primary">React</span> <span className="btn btn-primary">Laravel</span></span></p>  
            <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Databases: </span><span className="btn-group ml-2"><span className="btn btn-primary">Postgresql</span> <span className="btn btn-primary">MySQL</span> <span className="btn btn-primary">Sqlite</span> </span></p>  
            <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Tools: </span><span className="btn-group ml-2"><span className="btn btn-primary">Git</span> <span className="btn btn-primary">Github</span> <span className="btn btn-primary">Heroku</span> <span className="btn btn-primary">Webpack</span> <span className="btn btn-primary">Rspec</span> <span className="btn btn-primary">Jest</span></span></p>  
            <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Interests: </span> <span className="ml-2"><span className="btn-group ml-2"> <span className="btn btn-primary">Reading</span><span className="btn btn-primary">Running</span> <span className="btn btn-primary">AI</span> <span className="btn btn-primary">ML</span></span></span></p>  
            </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">I am driven by a desire to be productive at my job, and A hunger to learn. I am adaptable, result oriented, self-driven, highly motivated,
smart and hungry to learn new technologies, methodologies,
strategies, and processes.</p>
          </div>
        </div>
      </div>
    </section>  
    )
  }
}

export default Team
