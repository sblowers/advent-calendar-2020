import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab'; 

import decor from "../images/modal_decor.png"

import cog from "../images/cog_normal.png"
import cog_hover from "../images/cog_hover.png"
import cog_press from "../images/cog_pressed.png"

class SettingsModal extends React.Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { show: false };
	}
	
	componentDidMount() {
		this.onClick()
	}
	
	onClose() {
		this.setState({show: false}); 
		this.props.playAnimation()
		
		var viewport = document.querySelector('meta[name="viewport"]');

		if ( viewport ) {
			viewport.content = "initial-scale=0.1";
			viewport.content = "width=device-width, initial-scale=1, minimum-scale=1";
		}
	}
	
	onClick() {
		this.setState({show: true}); 
		this.props.pauseAnimation()
		
		this.cog_button.src = cog
	}
	
	onMouseEnter() {
		this.cog_button.src = cog_hover
	}
	
	onMouseLeave() {
		this.cog_button.src = cog
	}
	
	onMouseDown() {
		this.cog_button.src = cog_press
	}
	
	render() {
		return (
			<>
				<img 
					src={cog} 
					className="settings-button" 
					alt="" 
					onClick={() => {this.setState({show: true}); this.props.pauseAnimation()}}
					onMouseOver= {() => {this.onMouseEnter()}}
					onMouseLeave= {() => {this.onMouseLeave()}}
					onMouseDown= {() => {this.onMouseDown()}}
					
					ref={ref => (this.cog_button = ref)}
				/>
				
				<Modal
					show={this.state.show}
					onHide={() => {this.onClose()}}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<img src={decor} style={{width: '100%'}} alt=""/>
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							{"Welcome to Our 2020 Advent Calendar!!!"}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Tabs defaultActiveKey="intro" id="settings-tab">
						  <Tab eventKey="intro" title="Indroduction">
							<p>
								{`This year has been a bit crap for everyone. So we thought we could spread some
								cheer with a virtual advent calendar. `}
							</p>
						  </Tab>
						  <Tab eventKey="settings" title="Settings">
							<p>
								{`This is where the settings part will go`}
							</p>
							<Button onClick = {() => {this.props.resetDoors()}} >Reset Doors</Button>
						  </Tab>
						  <Tab eventKey="unlock" title="Unlock Doors">
							<p>
								{`This is where the unlock part will go`}
							</p>
						  </Tab>
						</Tabs>
						
					</Modal.Body>
				</Modal>
			
			
			</>
			)
	}
}

export default SettingsModal