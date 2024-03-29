import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab'; 

import decor from "../images/modal_decor.png"

import titleContents from "./titleContents"
import sideAContents from "./sideAContents"
import sideBContents from "./sideBContents"

class ContentModal extends React.Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { show: false,
					 door_id: 0}
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
	
	showModal = (door_id) => {
		this.setState({show: true, door_id: door_id})
		this.props.pauseAnimation()
	}
	
	titleGenerator() {
		return titleContents(this.state.door_id)
	}
	
	contentGeneratorASide() {
		return sideAContents(this.state.door_id)
	}
	
	contentGeneratorBSide() {
		return sideBContents(this.state.door_id)
	}
	
	
	render() {
		return (
			<>
				<Modal
					show={this.state.show}
					onHide={() => {this.onClose()}}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<img src={decor} style={{width: '100%'}} alt=""/>
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							{this.titleGenerator()}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Tabs defaultActiveKey="aside" id="content-tab">
						  <Tab eventKey="aside" title="A-Side">
							{this.contentGeneratorASide()}
						  </Tab>
						  <Tab eventKey="bside" title="B-Side">
							{this.contentGeneratorBSide()}
						  </Tab>
						</Tabs>
						
					</Modal.Body>
				</Modal>
			
			
			</>
			)
	}
}

export default ContentModal