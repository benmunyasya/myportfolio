import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/powerlite_logo.png'
import AVTR2 from '../../assets/smash_logo.png'
import AVTR3 from '../../assets/school_logo.jpg'
import AVTR4 from '../../assets/law_logo.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
	avatar:AVTR1,
	name: 'Bonface Kagema - Powerlite Africa Ltd',
	review: 'We were impressed when Miano delivered to us a clean and responsive website. In addition, the ecommerce store was also done beyond our comprehension. Thank You Reuben for making our online presence a success',
},
{
	avatar:AVTR3,
	name: 'Phillip Nganga - Principal - Treetop Secondary School',
	review: 'It had become a hectic job running the school with the traditional file system. With the School Management Software, We are now able to keep a paperless administration.',
},
{
	avatar:AVTR2,
	name: 'Peter Karanja - Smash Digital Media',
	review: 'I had this fear of working with a freelance developer. But when I met Miano, he cleared my doubts. He has delivered what many developers and companies take years to accomplish in a very short while. I am forever grateful',
},
{
	avatar:AVTR4,
	name: 'Edward Omotii - ENO & Co. Advocates',
	review: 'The Human Resource Management Software you built us has been so efficient in helping run our People Opps department. We are now able to keep track of employee perfomance and manage our payroll.',
}

]

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>What my Clients are saying</h5>
			<h2>Testimonials</h2>

			<Swiper className="container testimonials__container"
			// install Swiper modules
      		modules={[Pagination]}
      		spaceBetween={40}
      		slidesPerView={1}
      		pagination={{ clickable: true }}
      >
				{
					data.map(({avatar, name, review}, index) => {
						return(
							<SwiperSlide key={index} className="testimonial">
								<div className="client__avatar">
									<img src={avatar} />	
								</div>
								<h5 className="client__name">{name}</h5>
								<small className="client__review">{review}</small>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</section>
	)
}

export default Testimonials