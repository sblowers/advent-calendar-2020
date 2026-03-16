
import { useState, useRef, useCallback } from 'react';
import wreath from "./assets/images/wreath.png"

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
            return decodeURIComponent(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function App() {
	const [playAnimation, setPlayAnimation] = useState(true);
	const calendar3DRef = useRef(null);
	const contentModalRef = useRef(null);
	const badDoorModalRef = useRef(null);

	const pauseAnimation = useCallback(() => setPlayAnimation(false), []);
	const playAnimationFn = useCallback(() => setPlayAnimation(true), []);

	const showContents = useCallback((door_id) => {
		contentModalRef.current?.showModal(door_id);
	}, []);

	const updateCookie = useCallback((array) => {
		createCookie("advent2020_open_doors", JSON.stringify(array), 30);
	}, []);

	const readCookie = useCallback(() => {
		const array_string = getCookie("advent2020_open_doors");
		if (array_string === "") return new Array(25).fill(false);
		return JSON.parse(array_string);
	}, []);

	const resetDoors = useCallback(() => {
		updateCookie(new Array(25).fill(false));
		calendar3DRef.current?.resetDoors();
	}, [updateCookie]);

	const showBadDoor = useCallback((days) => {
		if (days > 0) {
			badDoorModalRef.current?.showModal(days);
		}
	}, []);

	return (
		<div className="app-container">

			<Calendar3D
				play={playAnimation}
				showContents={showContents}
				readCookie={readCookie}
				updateCookie={updateCookie}
				showBadDoor={showBadDoor}
				ref={calendar3DRef}
			/>

			<div className="wreath-border left">
				<img src={wreath} alt="" />
			</div>
			<div className="wreath-border right">
				<img src={wreath} alt="" />
			</div>

			<SettingsModal
				pauseAnimation={pauseAnimation}
				playAnimation={playAnimationFn}
				resetDoors={resetDoors}
				showContents={showContents}
			/>
			<ContentModal
				ref={contentModalRef}
				pauseAnimation={pauseAnimation}
				playAnimation={playAnimationFn}
			/>

			<BadDoorModal
				ref={badDoorModalRef}
				pauseAnimation={pauseAnimation}
				playAnimation={playAnimationFn}
			/>

		</div>
	);
}

export default App;
