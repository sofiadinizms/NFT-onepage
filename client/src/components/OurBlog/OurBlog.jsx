import {React, useState, useEffect} from 'react';
import OurBlogSlide from '../OurBlogSlide/OurBlogSlide';
import '../OurBlog/OurBlog.css';
import Sliderr from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import Modal from '../Modal/Modal'

function OurBlog(){
	const [ourBlog, setOurBlog] = useState([]);

  const loadOurBlog = async () => {
    const res = await axios.get('http://localhost:3001/api/content');
    setOurBlog(res.data);
  };

  useEffect(() => {
    loadOurBlog();
  }, []);

	var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					infinite: true,
					arrows: true,
					slidesToScroll: 1,
					cssEase: "linear",
					componentDidMount: function () {
						window.addEventListener('resize', this.onWindowResized);
					},
				
					componentWillUnmount:function () {
						window.removeEventListener('resize', this.onWindowResized);
					},
				
					onWindowResized: function () {
						// Debouncing using underscore _.debounce is optionnal
							this.forceUpdate()
					},
				}
			}
		]
	}

	

	return(
		<div>
			<div className="tudo" id="NossoBlog">
				<div className="partes">
				<h1>Nosso blog</h1>
				
				<div className="BlogSlide">
				<OurBlogSlide />
				</div>

				<div className="free-content">
					<div className="parteBaixo">
					<p className="acesseCnt">Acesse conteúdos gratuitos:</p>
					<div className="contents">
						<Sliderr className="slide-content" {...settings}>
						{ourBlog?.map(({_id, image, title}) =>(
								<div>
								<Modal
									image = {image}
									title = {title}
									key = {_id}
								/>
						</div>
						))}
						</Sliderr>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default OurBlog;