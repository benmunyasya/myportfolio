import React from 'react'
import './portfolio.css'

import IMG2 from '../../assets/billssystem2.PNG'
import IMG3 from '../../assets/school.jpg'
import IMG4 from '../../assets/loginpageworkflow1.jpg'
import IMG5 from '../../assets/hr.jpg'


const data = [

{
	id: 2,
	image:IMG2,
	title: 'A fully functional utility billing system built with python django.The user interface is done with Bootstrap 4,Vanilla js ,HTML,CSS.',
	github: '#',
	demo: 'bills.pythonanywhere.com'
},
{
	id: 3,
	image:IMG3,
	title: 'Complete School Management System developed in Python-Django',
	github: '#',
	demo: '#'
},
{
	id: 4,
	image:IMG4,
	title: 'A fully functional Form approval workflow for an organisation build using django viewflow process and states management library.Authentication connected to the Active directory.',
	github: '#',
	demo: '#'
},
{
	id: 5,
	image:IMG5,
	title: 'House Rental Management System Built with python django',
	github: 'https://github.com',
	demo: 'https://github.com'
},

]

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Projects</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{
					data.map(({id, image, title, github, demo}) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a href={github} className="btn" target="_blank">Github</a>
									<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Portfolio
