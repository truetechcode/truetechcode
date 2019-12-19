import React, { Component } from 'react'

import PortfolioItem from "../Common/PortfolioItem";
import Header from "../Common/Header";

import img4 from "../assets/img/portfolio/04-thumbnail.jpg";
import img5 from "../assets/img/portfolio/05-thumbnail.png";
import img6 from "../assets/img/portfolio/06-thumbnail.jpg";

const portfolio = [
  {title: 'Portfolio Site', subtitle: 'My Portfolio Site designed with Twitter Bootstrap and build with React.js', image: img4, link: '/', github: ''},
  {title: 'Property Listing', subtitle: 'Property Listing Landing Page designed with Twitter Bootstrap', image: img5, link: '//property-agent.terveraosu.now.sh/', github: '//github.com/truetechcode/property-listing-ui'},
  {title: 'BattleShip Game', subtitle: 'A BattleShip Game build with JavaScript and bundled with Webpack', image: img6, link: '//rawcdn.githack.com/truetechcode/battleship-game/9768495e4e92db01a47aac64ca4ab17633435af0/dist/index.html', github: '//github.com/truetechcode/battleship-game'},
  {title: 'Private Event', subtitle: 'A lite clone of Eventbrite designed with Twitter Bootstrap and build with Ruby on Rails', image: img4, link: '//young-retreat-43768.herokuapp.com/', github: '//github.com/truetechcode/private-events'}
]
class Portfolio extends Component {
  render() {
    return (
      <>
        <Header

          title=""
          subtitle="Portfolio"
          showButton={false}
        />
      <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          {portfolio.map((item, index) => {
            return <PortfolioItem {...item} key={index} />
          })}
        </div>
      </div>
    </section>  
    </>
    )
  }
}

export default Portfolio

