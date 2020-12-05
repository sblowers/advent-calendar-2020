
import wreath from "./images/wreath.png"
import React from 'react';

import Calendar3D from './components/Calendar3D'
import SettingsModal from './components/SettingsModal'
import ContentModal from  './components/ContentModal'
import BadDoorModal from './components/BadDoorModal'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styling.css'

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/; SameSite=Strict";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


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
	
	updateCookie = (array) => {
		var array_string = JSON.stringify(array)
		createCookie("advent2020_open_doors", array_string, 30)
	}
	
	readCookie = () => {
		var array_string = getCookie("advent2020_open_doors")
		if (array_string === "") {
			return new Array(25).fill(false);
		} else {
			return JSON.parse(array_string)
		}
	}
	
	resetDoors = () => {
		this.updateCookie(new Array(25).fill(false))
		
		this.Calendar3D.resetDoors()
		
	}
	
	showBadDoor= (days) => {
		if (days > 0) {
			this.badDoorModal.showModal(days)
		}
	}
	
  
  render() {
	  return (
		<div className="app-container">
		
		  <Calendar3D 
			play={this.state.playAnimation}
			showContents = {this.showContents}
			readCookie = {this.readCookie}
			updateCookie = {this.updateCookie}
			showBadDoor = {this.showBadDoor}
			ref={ref => (this.Calendar3D = ref)}
		  />
		  
		  <div className="wreath-border left">
			<img src={wreath} alt="" />
		  </div>
		  <div className="wreath-border right">
			<img src={wreath} alt="" />
		  </div>
		  
		  <SettingsModal 
			pauseAnimation={this.pauseAnimation} 
			playAnimation={this.playAnimation} 
			resetDoors={this.resetDoors}
			showContents = {this.showContents}
		  />
		  <ContentModal 
			ref={ref => (this.contentsModal = ref)}
			pauseAnimation={this.pauseAnimation} 
			playAnimation={this.playAnimation}
		  />
		  
		  <BadDoorModal
			ref={ref => (this.badDoorModal = ref)}
			pauseAnimation={this.pauseAnimation} 
			playAnimation={this.playAnimation}
		  />

		</div>
	  )
  }
}

export default App;
