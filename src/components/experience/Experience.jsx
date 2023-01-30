import React from 'react'
import './experience.css'
import {ImHtmlFive2} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript1} from 'react-icons/di'
import {SiBootstrap,
		SiTailwindcss,
		SiReact,
		SiVuedotjs,
		SiPhp,
		SiMongodb,
		SiFirebase,
		SiLaravel,
		SiPostgresql, 
	} from 'react-icons/si'
import {FaNodeJs,
		FaPython,
	} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'

const Experience = () => {
	return (
		<section id='experience'>
			<h5>Skills That I Possess</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<ImHtmlFive2 className="experience__details-icon"/>
							<div>
								<h4>HTML5</h4>
								<small className="text-light">Expert</small>
							</div>
						</article>
						<article className="experience__details">
							<IoLogoCss3 className="experience__details-icon"/>
							<div>
								<h4>CSS3</h4>
								<small className="text-light">Expert</small>
							</div>
						</article>
						<article className="experience__details">
							<DiJavascript1 className="experience__details-icon"/>
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<SiBootstrap className="experience__details-icon"/>
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<SiTailwindcss className="experience__details-icon"/>
							<div>
								<h4>Tailwind</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<SiReact className="experience__details-icon"/>
							<div>
								<h4>React</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						
					</div>
				</div>
				<div className="experience__backend">
					<h3>Software Development</h3>
					<div className="experience__content">
					<article className="experience__details">
							<FaPython className="experience__details-icon"/>
							<div>
								<h4>C++</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					<article className="experience__details">
							<FaPython className="experience__details-icon"/>
							<div>
								<h4>Python </h4>
								<small className="text-light">Expert</small>
							</div>
						</article>
						<article className="experience__details">
							<FaPython className="experience__details-icon"/>
							<div>
								<h4>Python - Django</h4>
								<small className="text-light">Expert</small>
							</div>
						</article>
						<article className="experience__details">
							<SiPhp className="experience__details-icon"/>
							<div>
								<h4>PHP</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<SiPhp className="experience__details-icon"/>
							<div>
								<h4>Java</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<SiMongodb className="experience__details-icon"/>
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<SiFirebase className="experience__details-icon"/>
							<div>
								<h4>Firebase</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<GrMysql className="experience__details-icon"/>
							<div>
								<h4>MySQL</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<SiLaravel className="experience__details-icon"/>
							<div>
								<h4>Laravel</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<SiPostgresql className="experience__details-icon"/>
							<div>
								<h4>PostgreSQL</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<SiPostgresql className="experience__details-icon"/>
							<div>
								<h4>Javascript</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Experience