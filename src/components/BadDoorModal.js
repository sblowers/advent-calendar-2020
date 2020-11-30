import React from 'react';

import Modal from 'react-bootstrap/Modal';

import decor from "../images/modal_decor.png"

class BadDoorModal extends React.Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { show: false,
					 days: 0}
	}
	
	showModal = (days) => {
		this.setState({show: true, days: days})
		this.props.pauseAnimation()
	}
	
	onClose() {
		this.setState({show: false})
		this.props.playAnimation()
		
		var viewport = document.querySelector('meta[name="viewport"]');

		if ( viewport ) {
			viewport.content = "initial-scale=0.1";
			viewport.content = "width=device-width, initial-scale=1, minimum-scale=1";
		}
	}
	
	render() {
		return (
			<Modal
				show={this.state.show}
				onHide={() => {this.onClose()}}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<img src={decor} style={{width: '100%'}} alt=""/>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						{`Not Yet!`}
					</Modal.Title>
				</Modal.Header>
				
				<Modal.Body>
					<p>{`It's not time to open this door yet. You have to wait `}<b>{`${this.state.days}`}</b>{` days before you can open it.`}</p>
					<p>{`Remain calm.`}</p>
					<p>{`If you think something has gone wrong and you should be able to open this door, or you just want it now because you live on the wild side, then you can unlock the contents of this door in the main menu.`}</p>
				</Modal.Body>
				
			</Modal>
		)
	}
	
}


export default BadDoorModal