import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  const expsFe = [
    {
      name: 'HTML',
      exp: 'Experienced'
    },
    {
      name: 'CSS',
      exp: 'Intermediate'
    },
    {
      name: 'JavaScript',
      exp: 'Experienced'
    },
    {
      name: 'Vuejs',
      exp: 'Experienced'
    },
    {
      name: 'React',
      exp: 'Experienced'
    },
  ]
  const expsBe = [
    {
      name: 'MySQL',
      exp: 'Basic'
    },
    {
      name: 'PHP',
      exp: 'Basic'
    },
  ]
  return (
    <section id='experience'>
      <h5>What Skills Have</h5>
      <h2>My Experience</h2>
      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            {
              expsFe.map((item, index) => (
                <article className='exp__details' key={index}>
                  <BsPatchCheckFill />
                  <div>
                    <h4>{ item.name }</h4>
                    <small className='text-light'>{ item.exp }</small>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            {
              expsBe.map((item, index) => (
                <article className='exp__details' key={index}>
                  <BsPatchCheckFill />
                  <div>
                    <h4>{ item.name }</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience