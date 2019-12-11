import React, { Component } from 'react'

import PortfolioItem from "../Common/PortfolioItem";
import Header from "../Common/Header";

import img4 from "../assets/img/portfolio/04-thumbnail.jpg";
import img5 from "../assets/img/portfolio/05-thumbnail.png";
import img6 from "../assets/img/portfolio/06-thumbnail.jpg";

const portfolio = [
  {title: 'TrueTech', subtitle: 'My Portfolio Site build with React', image: img4, link: '/'},
  {title: 'Property Listing Template', subtitle: 'Property Listing Landing Page using Twitter Bootstrap', image: img5, link: 'https://github.com/truetechcode/property-listing-ui'},
  {title: 'BattleShip Game', subtitle: 'A BattleShip Game build with JavaScript and Webpack', image: img6, link: '//rawcdn.githack.com/truetechcode/battleship-game/9768495e4e92db01a47aac64ca4ab17633435af0/dist/index.html'}
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

