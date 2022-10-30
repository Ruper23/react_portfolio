import './Portfolio.scss'
import PortfolioCard from './PortfolioCard'
import React from 'react'

const Portfolio = () => {
  const cards = [
    {
      key: 1,
      name: 'Meta',
      src: 'img/portfolio/meta.jpg',
      link: 'https://ruper23.github.io/Meta_RL/'
    },
    {
      key: 2,
      name: 'Lyma',
      src: 'img/portfolio/lyma.jpg',
      link: 'https://ruper23.github.io/Lyma-figma/'
    },
    {
      key: 3,
      name: 'Virtual Keyboard',
      src: 'img/portfolio/keyboard.jpg',
      link: 'https://ruper23.github.io/keyboard/'
    },
    {
      key: 4,
      name: 'Cozy House',
      src: 'img/portfolio/cozy-house.jpg',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFE2022Q1/shelter/pages/main/'
    },
    {
      key: 5,
      name: 'Tic Tac Toe',
      src: 'img/portfolio/tictactoe.jpg',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFEPRESCHOOL/tic-tac-toe/'
    },
    {
      key: 6,
      name: 'RSS Portfolio',
      src: 'img/portfolio/portfolio.jpg',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFEPRESCHOOL/portfolio/'
    },
    {
      key: 7,
      name: 'Eco-sound',
      src: 'img/portfolio/eco-sound.jpg',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFEPRESCHOOL/eco-sounds/'
    },
    {
      key: 8,
      name: 'Image-gallery',
      src: 'img/portfolio/image-gallery.jpg',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFEPRESCHOOL/image-galery/'
    },
    {
      key: 9,
      name: 'Icrowedme',
      src: 'img/portfolio/crowd-me.jpg',
      link: 'https://ruper23.github.io/icrowedmw-no-/'
    },
    {
      key: 10,
      name: 'Momentum',
      src: 'img/portfolio/momentum.png',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFE2021Q3/momentum/'
    },
    {
      key: 11,
      name: 'Museum',
      src: 'img/portfolio/museum.jpg',
      link: 'https://rolling-scopes-school.github.io/ruper23-JSFE2021Q3/museum-dom/'
    },
    {
      key: 12,
      name: 'Kaberda',
      src: 'img/portfolio/kaberda.jpg',
      link: 'https://ruper23.github.io/kaberda/'
    },
  ]
  return (
    <section className="portfolio">
      <div className="portfolio__wrap">
        <h3 className="portfolio__title slide-title">Портфолио</h3>
        <div className="portfolio__cards">
          {cards.map(card => {
            return (
              <PortfolioCard
                key={card.key}
                name={card.name}
                src={card.src}
                link={card.link} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Portfolio