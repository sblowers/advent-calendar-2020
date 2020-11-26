
import wreath from "./images/wreath.png"
import React from 'react';

import Calendar3D from './components/Calendar3D'
import SettingsModal from './components/SettingsModal'
import ContentModal from  './components/ContentModal'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-slider/dist/css/bootstrap-slider.css"
import './styling.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { playAnimation: true}

	}
	
	pauseAnimation = () => {
		this.setState({playAnimation: false})
	}
	
	playAnimation = () => {
		this.setState({playAnimation: true})
	}
	
	showContents = (door_id) => {
		this.contentsModal.showModal(door_id)
	}
  
  
  render() {
	  return (
		<div className="app-container">
		
		  <Calendar3D 
			play={this.state.playAnimation}
			showContents = {this.showContents}
		  />
		  
		  <div className="wreath-border left">
			<img src={wreath} alt="" />
		  </div>
		  <div className="wreath-border right">
			<img src={wreath} alt="" />
		  </div>
		  
		  <SettingsModal pauseAnimation={this.pauseAnimation} playAnimation={this.playAnimation} />
		  <ContentModal 
			ref={ref => (this.contentsModal = ref)}
			pauseAnimation={this.pauseAnimation} 
			playAnimation={this.playAnimation}
		  />

		</div>
	  )
  }
}

export default App;
