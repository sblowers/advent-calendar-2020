import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab'; 

import decor from "../images/modal_decor.png"

import cog from "../images/cog_normal.png"
import cog_hover from "../images/cog_hover.png"
import cog_press from "../images/cog_pressed.png"

import instructions1 from "../images/instructions1.png"
import instructions2 from "../images/instructions2.png"
import instructions3 from "../images/instructions3.png"

import checkmark from "../images/check_mark.png"
import crossmark from "../images/cross_mark.png"

class SettingsModal extends React.Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { show: false, 
					resetDoorsCheck: false, 
					doorsReset: false,
					unlockDoorsCheck: false,
					unlockDoors: false};
	}
	
	componentDidMount() {
		this.onClick()
	}
	
	onClose() {
		this.setState({resetDoorsCheck: false, doorsReset: false, unlockDoorsCheck: false, unlockDoors: false})
		
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
	
	resetDoors() {
		this.props.resetDoors()
		
		this.setState({resetDoorsCheck: false, doorsReset: true})
	}
	
	showContents(door) {
		if (this.state.unlockDoors) {
			this.setState({show: false})
			this.onClose()
			
			this.props.showContents(door)
		}
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
						  <Tab eventKey="intro" title="Welcome">
								<h4 style = {{marginTop: "10px"}}>Welcome!</h4>
								<p>
									{`This year has been a bit crap for everyone. So we thought we could spread some
									cheer with a virtual advent calendar. `}
								</p>
								<p>
									{`Each door will contain: `}
								</p>
								<ul>
									<li><b>{`A-Side: `}</b>{`A Christmas song to get you into the festive mood.`}</li>
									<li><b>{`B-Side: `}</b>{`A non-Christmassy song recommendation to perk up your day.`}</li>
								</ul>
								<h4 style = {{marginTop: "10px"}}>Instructions</h4>
								<div className = "instructions-div">
									<img src = {instructions1} alt="" className = "instructions-img left" />
									<img src = {instructions2} alt="" className = "instructions-img" />
									<img src = {instructions3} alt="" className = "instructions-img right" />
								</div>
								<p>
									{`You can also navigate around by tilting with the left mouse button (or one finger drag), 
									panning with the right mouse button (or two finger drag) and zooming with the scroll wheel (or two finger pinch).`}
								</p>
								<p>
									{`To zoom in on another door you may need to zoom out first.`}
								</p>
								<h4 style = {{marginTop: "10px"}}>Other Things</h4>
								<p>
									{`If you want to see some of the other things I built over lockdown, you can find them `} <a href="https://sblowers.github.io/" target="_blank">here</a>{`.`}
								</p>
						  </Tab>
						  <Tab eventKey="reset" title="Reset Doors">
								<h4 style = {{marginTop: "10px"}}>Reset Doors</h4>
								<p>
									{`Do you want to reset all the doors so you can have the magic of reopening them at a later date?`}
								</p>
								<div>
									<Button onClick = {() => {this.setState({resetDoorsCheck: true, doorsReset: false})}} >Reset Doors</Button>
									<div className = {`inline ${this.state.resetDoorsCheck ? "" : "hidden"}`}>
										<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Are you sure?</span>
										<img src = {checkmark} alt="" style = {{height: "38px", cursor: "pointer"}} onClick = {() => {this.resetDoors()}} />
										<img src = {crossmark} alt="" style = {{height: "38px", cursor: "pointer"}} onClick = {() => {this.setState({resetDoorsCheck: false})}} />
									</div>
									<div className = {`inline ${this.state.doorsReset ? "" : "hidden"}`}>
										<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Doors have been reset.</span>
									</div>
								</div>	
						  </Tab>
						  <Tab eventKey="unlock" title="Unlock Doors">
								<h4 style = {{marginTop: "10px"}}>Unlock Doors</h4>
								<p>
									{`Sometimes things go wrong and content doesn't work. Mainly because this code has been rushed.
									Other times people just want to forge ahead with their Advent Calendars in the hope that 
									opening all the doors brings Christmas Day that one step closer. Either way, here are some buttons to bypass
									the locks on the doors and get the contents directly. `}
								</p>
								<Button onClick = {() => {this.setState({unlockDoorsCheck: true})}} >Unlock Doors</Button>
								<div className = {`inline ${this.state.unlockDoorsCheck ? "" : "hidden"}`}>
										<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Are you sure?</span>
										<img src = {checkmark} alt="" style = {{height: "38px", cursor: "pointer"}} onClick = {() => {this.setState({unlockDoorsCheck: false, unlockDoors: true})}} />
										<img src = {crossmark} alt="" style = {{height: "38px", cursor: "pointer"}} onClick = {() => {this.setState({unlockDoorsCheck: false})}} />
								</div>
								<div className = {`inline ${this.state.unlockDoors ? "" : "hidden"}`}>
									<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Doors unlocked!</span>
								</div>
								<div style={{textAlign: "center"}}>
								<Button onClick = {() => {this.showContents(0)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>1</Button>
								<Button onClick = {() => {this.showContents(1)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>2</Button>
								<Button onClick = {() => {this.showContents(2)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>3</Button>
								<Button onClick = {() => {this.showContents(3)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>4</Button>
								<Button onClick = {() => {this.showContents(4)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>5</Button>
								</div>
								<div style={{textAlign: "center"}}>
								<Button onClick = {() => {this.showContents(5)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>6</Button>
								<Button onClick = {() => {this.showContents(6)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>7</Button>
								<Button onClick = {() => {this.showContents(7)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>8</Button>
								<Button onClick = {() => {this.showContents(8)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>9</Button>
								<Button onClick = {() => {this.showContents(9)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>10</Button>
								</div>
								<div style={{textAlign: "center"}}>
								<Button onClick = {() => {this.showContents(10)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>11</Button>
								<Button onClick = {() => {this.showContents(11)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>12</Button>
								<Button onClick = {() => {this.showContents(12)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>13</Button>
								<Button onClick = {() => {this.showContents(13)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>14</Button>
								<Button onClick = {() => {this.showContents(14)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>15</Button>
								</div>
								<div style={{textAlign: "center"}}>
								<Button onClick = {() => {this.showContents(15)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>16</Button>
								<Button onClick = {() => {this.showContents(16)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>17</Button>
								<Button onClick = {() => {this.showContents(17)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>18</Button>
								<Button onClick = {() => {this.showContents(18)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>19</Button>
								<Button onClick = {() => {this.showContents(19)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>20</Button>
								</div>
								<div style={{textAlign: "center"}}>
								<Button onClick = {() => {this.showContents(20)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>21</Button>
								<Button onClick = {() => {this.showContents(21)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>22</Button>
								<Button onClick = {() => {this.showContents(22)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>23</Button>
								<Button onClick = {() => {this.showContents(23)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>24</Button>
								<Button onClick = {() => {this.showContents(24)}} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!this.state.unlockDoors}>25</Button>
								</div>
						  </Tab>
						</Tabs>
						
					</Modal.Body>
				</Modal>
			
			
			</>
			)
	}
}

export default SettingsModal