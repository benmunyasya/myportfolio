import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
	return (
		<section id='#'>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Benjamin Munyasya</h1>
				<h5>Software Engineer</h5>
				<CTA />
				<div className="me">
				<img src={ME} alt="me" />
				</div>
			
				<HeaderSocials />
				<a href="#contact" className='scroll__down'>Scroll Down</a>

			</div>
		</section>

	)
}

export default Header