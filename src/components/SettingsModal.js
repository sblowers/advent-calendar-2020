import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import decor from "../images/modal_decor.png"

class SettingsModal extends React.Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { show: false };
	}
	
	render() {
		return (
			<>
				<Button variant="primary" onClick={() => {this.setState({show: true}); this.props.pauseAnimation()}} style={this.props.buttonStyle}>
					Custom Width Modal
				</Button>
				
				<Modal
					show={this.state.show}
					onHide={() => {this.setState({show: false}); this.props.playAnimation()}}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<img src={decor} style={{width: '100%'}} alt=""/>
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							Custom Modal Styling
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						
						<p>
							Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
							commodi aspernatur enim, consectetur. Cumque deleniti temporibus
							ipsam atque a dolores quisquam quisquam adipisci possimus
							laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
							accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
							reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
							deleniti rem!
						</p>
					</Modal.Body>
				</Modal>
			
			
			</>
			)
	}
}

export default SettingsModal