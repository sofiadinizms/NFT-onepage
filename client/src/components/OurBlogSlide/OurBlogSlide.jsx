import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../OurBlogSlide/OurBlogSlide.css'

import Card from '../Card'

import axios from 'axios';

function OurBlogSlide (){

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
				<Slider className="carouselBlog" {...settings}>
					{blogs?.map(({_id, title, date, description, image, blogLink}) => (
					<div>
					<Card 
						title = {title}
						date = {date}
						description = {description}
						image = {image}
						blogLink = {blogLink}
						key = {_id}
					/>
					</div>
					))}
				</Slider>
		</>
	);
}

export default OurBlogSlide;