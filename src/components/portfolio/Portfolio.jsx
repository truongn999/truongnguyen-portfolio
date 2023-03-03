import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
const Portfolio = () => {
  const portfolioes = [
    {
      name: 'Cao Su',
      github: '',
      demo: '',
      img: IMG1,
    },
    {
      name: 'Nong Nghiep',
      github: '',
      demo: '',
      img: IMG2,
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioes.map((item, index) => (
            <article key={index} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{ item.name }</h3>
              <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio