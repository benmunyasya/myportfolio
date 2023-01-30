import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
	return (
		<section id='about' className='about1'>
			<h5>Get To know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon"/>
							<h5>Experience</h5>
							<small>6+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon"/>
							<h5>Clients</h5>
							<small>10+ countrywide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon"/>
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>

					<p>
						Growing up i was always fascinated by the idea of solving puzzles and providing solutions to tricky problems.Then i discovered i could do alot more of that with software development using theoritical computer science.
	
					</p>
					<p>
					I simply fell in love with programming and pursued my Bsc computer science  degree to strengthen my knowledge of how to tackle problems in the local and the global tech space.
					Currently i am helping businesses to bridge the gap between business and technology to maximise their throughput and profits by providing digital solutions to their business problems.
					</p>
					<p>When it comes to tech and life in general i never stop learning.I make sure i am very currental with the latest technologies.I have experience in Python,Python Django Framework,React.js library,HTML,CSS,Javascript,C++,C.Currently pursuing Java.
						I have consulted for many clients while doing the job, guiding Web-based Applications, database engineering, API Development, payments integration,Bulk sms gateway integration,and design and user experience & Application Deployment.
					</p>

					<a href="#contact" className='btn btn-primary'>Let's Talk</a>

				</div>
			</div>
		</section>
	)
}

export default About