import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../OurBlog/OurBlog.css'


export default function OurBlog (props){
	var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: "linear"
	};
	return (
		<Slider {...settings}>

			<div className="card-wrapper">
        <div className="card">
					<div className="card-image">
						<img src="./Components/Assets/img01.jpg"/>
					</div>
					<ul className="social-icons">
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
					</ul>
				</div>
      </div>
		</Slider>
	);
}