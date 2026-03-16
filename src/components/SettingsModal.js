import { useState, useEffect, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import decor from "../assets/images/modal_decor.png"

import cog from "../assets/images/cog_normal.png"
import cog_hover from "../assets/images/cog_hover.png"
import cog_press from "../assets/images/cog_pressed.png"

import instructions1 from "../assets/images/instructions1.png"
import instructions2 from "../assets/images/instructions2.png"
import instructions3 from "../assets/images/instructions3.png"

import checkmark from "../assets/images/check_mark.png"
import crossmark from "../assets/images/cross_mark.png"

function SettingsModal({ pauseAnimation, playAnimation, resetDoors, showContents }) {
	const [show, setShow] = useState(false);
	const [resetDoorsCheck, setResetDoorsCheck] = useState(false);
	const [doorsReset, setDoorsReset] = useState(false);
	const [unlockDoorsCheck, setUnlockDoorsCheck] = useState(false);
	const [unlockDoors, setUnlockDoors] = useState(false);
	const cogRef = useRef(null);

	// Show the welcome modal on first mount (same behaviour as old componentDidMount)
	useEffect(() => {
		setShow(true);
		pauseAnimation();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function onClose() {
		setResetDoorsCheck(false);
		setDoorsReset(false);
		setUnlockDoorsCheck(false);
		setUnlockDoors(false);
		setShow(false);
		playAnimation();

		const viewport = document.querySelector('meta[name="viewport"]');
		if (viewport) {
			viewport.content = "initial-scale=0.1";
			viewport.content = "width=device-width, initial-scale=1, minimum-scale=1";
		}
	}

	function onClick() {
		setShow(true);
		pauseAnimation();
		if (cogRef.current) cogRef.current.src = cog;
	}

	function handleResetDoors() {
		resetDoors();
		setResetDoorsCheck(false);
		setDoorsReset(true);
	}

	function handleShowContents(door) {
		if (unlockDoors) {
			setShow(false);
			onClose();
			showContents(door);
		}
	}

	return (
		<>
			<img
				src={cog}
				className="settings-button"
				alt=""
				onClick={onClick}
				onMouseOver={() => { if (cogRef.current) cogRef.current.src = cog_hover; }}
				onMouseLeave={() => { if (cogRef.current) cogRef.current.src = cog; }}
				onMouseDown={() => { if (cogRef.current) cogRef.current.src = cog_press; }}
				ref={cogRef}
			/>

			<Modal
				show={show}
				onHide={onClose}
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
							<h4 style={{marginTop: "10px"}}>Welcome!</h4>
							<p>
								{`2020 has been a year and a half and then more.
								But Christmas, in the words of Cliff Richard, is a time for forgetting,
								and so we have put together this virtual calendar as a way to spread some cheer. `}
								<b>{`Merry Christmas everyone!`}</b>
							</p>
							<p>{`Each door will contain: `}</p>
							<ul>
								<li><b>{`A-Side: `}</b>{`A Christmas song to get you into the festive mood (chosen by Helen).`}</li>
								<li><b>{`B-Side: `}</b>{`A non-Christmassy song recommendation to perk up your day (selected by Stephen).`}</li>
							</ul>
							<h4 style={{marginTop: "10px"}}>Instructions</h4>
							<div className="instructions-div">
								<img src={instructions1} alt="" className="instructions-img left" />
								<img src={instructions2} alt="" className="instructions-img" />
								<img src={instructions3} alt="" className="instructions-img right" />
							</div>
							<p>
								{`You can also navigate around by tilting with the left mouse button (or one finger drag),
								panning with the right mouse button (or two finger drag) and zooming with the scroll wheel (or two finger pinch).`}
							</p>
							<p>{`To zoom in on another door, you may need to zoom out first.`}</p>
							<h4 style={{marginTop: "10px"}}>Other Things</h4>
							<p>
								{`If you want to see some of the other things I built over lockdown, you can find them `} <a href="https://sblowers.github.io/" target="_blank" rel="noreferrer">here</a>{`.`}
							</p>
						</Tab>
						<Tab eventKey="reset" title="Reset Doors">
							<h4 style={{marginTop: "10px"}}>Reset Doors</h4>
							<p>{`Do you want to reset all the doors so you can have the magic of reopening them at a later date?`}</p>
							<div>
								<Button onClick={() => { setResetDoorsCheck(true); setDoorsReset(false); }}>Reset Doors</Button>
								<div className={`inline ${resetDoorsCheck ? "" : "hidden"}`}>
									<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Are you sure?</span>
									<img src={checkmark} alt="" style={{height: "38px", cursor: "pointer"}} onClick={handleResetDoors} />
									<img src={crossmark} alt="" style={{height: "38px", cursor: "pointer"}} onClick={() => setResetDoorsCheck(false)} />
								</div>
								<div className={`inline ${doorsReset ? "" : "hidden"}`}>
									<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Doors have been reset.</span>
								</div>
							</div>
						</Tab>
						<Tab eventKey="unlock" title="Unlock Doors">
							<h4 style={{marginTop: "10px"}}>Unlock Doors</h4>
							<p>
								{`Sometimes things go wrong and content doesn't work. Mainly because this code has been rushed and not thoroughly tested.
								Other times people just want to forge ahead with their Advent Calendars in the hope that
								opening all the doors brings Christmas Day that one step closer. Either way, here are some buttons to bypass
								the locks on the doors and get the contents directly. `}
							</p>
							<Button onClick={() => setUnlockDoorsCheck(true)}>Unlock Doors</Button>
							<div className={`inline ${unlockDoorsCheck ? "" : "hidden"}`}>
								<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Are you sure?</span>
								<img src={checkmark} alt="" style={{height: "38px", cursor: "pointer"}} onClick={() => { setUnlockDoorsCheck(false); setUnlockDoors(true); }} />
								<img src={crossmark} alt="" style={{height: "38px", cursor: "pointer"}} onClick={() => setUnlockDoorsCheck(false)} />
							</div>
							<div className={`inline ${unlockDoors ? "" : "hidden"}`}>
								<span style={{marginLeft: "20px", marginRight: "20px", fontWeight: "bold"}}>Doors unlocked!</span>
							</div>
							<div style={{textAlign: "center"}}>
								{[...Array(25)].map((_, i) => (
									<Button key={i} onClick={() => handleShowContents(i)} style={{width: "50px", marginLeft: "5px", marginTop: "5px"}} disabled={!unlockDoors}>{i + 1}</Button>
								))}
							</div>
						</Tab>
					</Tabs>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default SettingsModal;
