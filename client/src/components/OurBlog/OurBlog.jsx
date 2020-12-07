import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../OurBlog/OurBlog.css'
import Img01 from '../Assets/img01.jpg'
import Img02 from '../Assets/img02.jpg'
import Card from '../Card/card'
import data from './data'

export default function OurBlog (props){
	
	var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: "linear",
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]

	}; 

	return (
		

		<Slider {...settings}>

	
			{data.map(({ img, title, data, text }) => (
				<Card key={title}
					img = {img}
					title = {title}
				/>
			))}
		
		</Slider>

	);
}