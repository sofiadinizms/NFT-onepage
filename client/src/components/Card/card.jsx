import React from 'react'
import Img01 from '../Assets/img01.jpg'
import '../Card/card.css'

export default function Card(props){
	const { imagem } = props;
	const { titulo } = props;
	return (
		<div className="card">
			<div className="photo">
				<img className="image" src={imagem}></img>
			</div>	
				<div className="infos">
					<div className="titulos">
						<p className="tit">{ titulo }</p>
						
						<p className="sub-tit">Data da publicação</p>
					</div>
					<div className="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
					</div>
				</div>

		</div>
	)
}