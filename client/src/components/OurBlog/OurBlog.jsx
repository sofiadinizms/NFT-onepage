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


function NextArrow(props) {
	return <div className={ props.className } onClick={ props.onClick } />;
}

function PrevArrow(props) {
	return <div className= { props.className } onClick={ props.onClick } />;
}


function OurBlog(){

	var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
		slidesToScroll: 0,
		cssEase: "linear",
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: true,
					slidesToScroll: 1,
					appendDots: dots => (
						<div>
							<NextArrow 
								className="slick-next prox-seta"
								onClick={() => {
									document.querySelector(".slick-next.slick-arrow").click();
								}}
							/>
						</div>
					),
					nextArrow : <NextArrow></NextArrow>,
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
						<div className="content">
							<img src={Cd01} />
							<p>Nome do conteúdo</p>
						</div>
						<div className="content">
							<img src={Cd02} />
							<p>Nome do conteúdo</p>
						</div>
						<div className="content">
							<img src={Cd03} />
							<p>Nome do conteúdo</p>
						</div>
						<div className="content">
							<img src={Cd04} />
							<p>Nome do conteúdo</p>
						</div>
						</Sliderr>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default OurBlog;