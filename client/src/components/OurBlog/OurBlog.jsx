import React from 'react';
import OurBlogSlide from '../OurBlogSlide/OurBlogSlide'
import '../OurBlog/OurBlog.css'
import Cd01 from '../Assets/cd01.jpg'
import Cd02 from '../Assets/cd02.jpg'
import Cd03 from '../Assets/cd03.jpg'
import Cd04 from '../Assets/cd04.jpg'
import Sliderr from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Modal from '../Modal/Modal'

function OurBlog(){

	var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
		slidesToScroll: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: true,
					slidesToScroll: 1,
					cssEase: "linear",
				}
			}
		]
	}

	return(
		<div>
			<div className="tudo">
				<div className="partes">
				<h1>Nosso blog</h1>
				
				<OurBlogSlide />
				
				<div className="free-content">
					<p>Acesse conteúdos gratuitos:</p>
					<div className="contents">
						<Sliderr className="slide-content" {...settings}>
						<Modal
							image = {Cd01}
							name = "Nome do conteúdo"
						/>
						<Modal 
							image = {Cd02}
							name = "Nome do conteúdo"
						/>
						<Modal 
							image = {Cd03}
							name = "Nome do conteúdo"
						/>
						<Modal 
							image = {Cd04}
							name = "Nome do conteúdo"
						/>
						</Sliderr>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default OurBlog;