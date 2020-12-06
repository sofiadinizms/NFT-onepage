import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../OurBlog/OurBlog.css'
import Img01 from '../Assets/img01.jpg'
import Img02 from '../Assets/img02.jpg'
import Card from '../Card/card'

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

	const products = [
		{
			img: Img01,
			title: 'Título do blogpost',
			data: 'Data da publicação',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
		},
		{
			img: Img02,
			title: 'Título do blogpost',
			data: 'Data da publicação',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
		},
		{
			img: Img01,
			title: 'Título do blogpost',
			data: 'Data da publicação',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
		},
		{
			img: Img02,
			title: 'Título do blogpost',
			data: 'Data da publicação',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
		},
	] 

	return (
		

		<Slider {...settings}>

			<Card></Card>
			
			<Card></Card>
			<Card></Card>
			<Card></Card>
		
		</Slider>

	);
}