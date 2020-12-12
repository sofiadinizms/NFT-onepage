import React, { Component } from 'react'
import {
	WhoWeAre,
	Footer,
  OurServices,
  Contact,
  Banner,	
} from './components';
import drawerToogleButton from './components/SideDrawer/DrawerToggleButton';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import sideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
	state = {
		sideDrawerOpen: false
	}

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		});
	}

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	}

	render() {
		//let sideDrawer;
		let backdrop;

		if(this.state.sideDrawerOpen){
			//sideDrawer = <SideDrawer></SideDrawer>;
			backdrop = <Backdrop click={this.backdropClickHandler}></Backdrop>;
		}
		return (
			<div style={{height: '100%'}}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler}></Toolbar>
				<SideDrawer show={this.state.sideDrawerOpen}></SideDrawer>
			
				{backdrop}
				<main style={{marginTop: '64px'}}>					
					{/* <div>
						<Banner/>
					</div>
					<div>
						<p>WhoWeAre</p>
					</div>
					<div>
						<OurServices/>
					</div>
					<div>
						<p>OurClients</p>
					</div>
					<div>
						<p>OurBlog</p>						
					</div> */}
					<>
						<Contact/>
					</>
					<div>
						<Footer/>
					</div>
				</main>
			</div>
		);
	};	
}

export default App;
