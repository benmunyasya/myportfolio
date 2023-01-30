import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Services = () => {
	return (
		<section id='services'>
			<h5>What i have achieved</h5>
			<h2>Achievements</h2>

			<div className="container services__container">
				{/* <article className="service">
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>

					<ul className="service__list">
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Interactive Mockups, Core Pages Wireframes & Design.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Road Map Planning, Illustrations & Char' Design.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Animated UI and Interfaces Demo.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Website Design and Walk Throughs.</p>
						</li>
					</ul>
				</article> */}
				<article className="service">
					<div className="service__head">
						<h3>Web Applications,UI  Design ,Business Analytics, IT support</h3>
					</div>

					<ul className="service__list">
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>I developed Front-end Website Architectures for various applications as shown in my architecture</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>I managed to design  and develop  RESTful APIS with the django-rest-framework</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Testing and Debugging Software to Keep it Optimized and running to the maximum.</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Developed Back-end Web Applications with relational and non-relational databases eg Postgresql and MongoDB</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Deployed applications in the internal organisation network configured the auth with the organisations active directory</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Done Back-end integrations.Equity Jenga onboarding, Mpesa – Daraja API integration,SMS integration and GIS integration.
</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Designed and build business forms (e.g leave applicalion,Purchase requisitions,Email request) approval workflow system to go paperless on the approval process in the organisation. </p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Dashboarding and Visualization of business data using tableau and python pandas</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Merging of data from diffrent databases and creating reports for an organisation using multiple datasources</p>
						</li>
						<li>
							<BsCheck2Circle className="service__list-icon"/>
							<p>Writing python scripts to pull data periodically from diffrent datasources</p>
						</li>
					</ul>
				</article>
				
			</div>
		</section>
	)
}

export default Services