import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../OurBlog/OurBlog.css'
import Img01 from '../Assets/img01.jpg'
import Img02 from '../Assets/img02.jpg'
import Card from '../Card'
import data from './data'
import axios from 'axios';

function OurBlog (){

	const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    const res = await axios.get('http://localhost:3001/api/ourblogs');
    setBlogs(res.data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

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
		<>
		<h1> Nosso blog </h1>
		<Slider {...settings}>
			{blogs?.map(({_id, title, date, description, image, blogLink}) => (
			<Card 
				title = {title}
				date = {date}
				description = {description}
				image = {image}
				blogLink = {blogLink}
				key = {_id}
			/>
			))}
		</Slider>
		</>
	);
}

export default OurBlog;