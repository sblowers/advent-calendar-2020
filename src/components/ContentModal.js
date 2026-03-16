import { useState, forwardRef, useImperativeHandle } from 'react';

import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import decor from "../assets/images/modal_decor.png"

import titleContents from "./titleContents"
import sideAContents from "./sideAContents"
import sideBContents from "./sideBContents"

const ContentModal = forwardRef(function ContentModal({ pauseAnimation, playAnimation }, ref) {
	const [show, setShow] = useState(false);
	const [doorId, setDoorId] = useState(0);

	useImperativeHandle(ref, () => ({
		showModal(id) {
			setDoorId(id);
			setShow(true);
			pauseAnimation();
		},
	}));

	function onClose() {
		setShow(false);
		playAnimation();

		const viewport = document.querySelector('meta[name="viewport"]');
		if (viewport) {
			viewport.content = "initial-scale=0.1";
			viewport.content = "width=device-width, initial-scale=1, minimum-scale=1";
		}
	}

	return (
		<Modal
			show={show}
			onHide={onClose}
			dialogClassName="modal-90w"
			aria-labelledby="example-custom-modal-styling-title"
		>
			<img src={decor} style={{width: '100%'}} alt=""/>
			<Modal.Header closeButton>
				<Modal.Title id="example-custom-modal-styling-title">
					{titleContents(doorId)}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Tabs defaultActiveKey="aside" id="content-tab">
					<Tab eventKey="aside" title="A-Side">
						{sideAContents(doorId)}
					</Tab>
					<Tab eventKey="bside" title="B-Side">
						{sideBContents(doorId)}
					</Tab>
				</Tabs>
			</Modal.Body>
		</Modal>
	);
});

export default ContentModal;
