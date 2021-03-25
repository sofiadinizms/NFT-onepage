import React from 'react';

import '../Card/card.css'


function Card(props){

	return (
		<div className="card">
					<div className="photoCard">
						<img className="imageCard" src={props.image[0]?.url} />
					</div>	
					<div className="infosCard">
						<div className="titulosCard">
							<p className="tit">{props.title}</p>
							<p className="sub-tit">{props.date}</p>
						</div>
						<div className="textCard">
							<p>{props.description} <a className="hiperLink" href={props.blogLink}> Continue a ler...</a></p>
							
						</div>
					</div>
		</div>
	);
}

export default Card;