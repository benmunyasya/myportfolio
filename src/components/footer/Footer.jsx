import React from 'react'
import './footer.css'
import {VscGithub} from 'react-icons/vsc'
import {SiFacebook} from 'react-icons/si'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
	return (
		<footer>
			<a href="#" className='footer__logo'>Ben Munyasya</a>

			<ul className='permalinks'>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://github.com/benjiecache"><VscGithub /></a>
				<a href="https://facebook.com/benmunyasya/"><SiFacebook /></a>
				<a href="https://twitter.com/benmunyasya"><FiTwitter /></a>
			</div>

		
		</footer>
	)
}

export default Footer