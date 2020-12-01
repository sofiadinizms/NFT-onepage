import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
import Image from './Assets/quemSomos.jpg'
import axios from 'axios';



function WhoWeAre (props) {

	const [imgs, setImgs] = useState([]);

	const loadImgs = async () => {
		const res = await axios.get('http://localhost:3001/admin/who-we-ares/5fc64fc3ff03dc20c0076992');
		setImgs(res.data);
};

useEffect(()=>{
	loadImgs();
}, []);

return (
	<div className="wwa">
		
		<div className="container">
		
			<div className="photo">
				{/*<img src={quemSomos}/>*/}
				<div className="img"></div>
			</div>
			<div className="espace"></div>
			<div className="quemSomos">
					<h1>Quem somos</h1>
					<div className="text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					</div>
					<div className="icons">

						<div className="square">
							<div className="icon" id="Desenvolvimento"></div>
							<div className="subTitle">Desenvolvimento</div>	
						</div>
						
						<div className="square">
							<div className="icon" id="Empatia"></div>
							<div className="subTitle">Empatia</div>	
						</div>
						
						<div className="square">
							<div className="icon" id="Inconformismo"></div>
							<div className="subTitle">Inconformismo</div>	
						</div>
						
						<div className="square">
							<div className="icon" id="Perseveranca"></div>
							<div className="subTitle">Perseverança</div>	
						</div>
						
						<div className="square">
							<div className="icon" id="Representatividade"></div>
							<div className="subTitle">Representatividade</div>
						</div>
						
						<div className="square">
							<div className="icon" id="Crescimento"></div>
							<div className="subTitle">Crescimento</div>
						</div>
						
					</div>
			</div>
		</div>
	</div>
);
}

export default WhoWeAre