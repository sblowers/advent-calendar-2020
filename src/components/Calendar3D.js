import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

// Disable Three.js colour management to preserve the original rendering look.
// In r152+ this defaults to true, which applies sRGB↔linear conversions that
// make textures appear pale compared to the r122 behaviour.
THREE.ColorManagement.enabled = false;
import * as TWEEN from '@tweenjs/tween.js'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {createDoor, createDoorOutline, createAdventFrontPanel, createSidePanelLeft, createSidePanelRight, createSidePanelTop, createSidePanelBottom, createBackPanel, createInsideToken} from './MeshCreation'
import {snowEffectParticles, updateSnowEffectParticles} from './SnowEffect'
import ExplosionConfetti from './explosionConfetti'

import advent_background from '../assets/images/advent_background.png'
import advent_background_rear from '../assets/images/advent_background_rear.png'
import cardboard_rear from '../assets/images/cardboard_back.jpg'
import advent_side_left from '../assets/images/advent_side_left.png'
import advent_side_right from '../assets/images/advent_side_right.png'
import advent_side_top from '../assets/images/advent_side_top.png'
import advent_side_bottom from '../assets/images/advent_side_bottom.png'

import token_day1 from '../assets/images/tokens/day1.png'
import token_day2 from '../assets/images/tokens/day2.png'
import token_day3 from '../assets/images/tokens/day3.png'
import token_day4 from '../assets/images/tokens/day4.png'
import token_day5 from '../assets/images/tokens/day5.png'
import token_day6 from '../assets/images/tokens/day6.png'
import token_day7 from '../assets/images/tokens/day7.png'
import token_day8 from '../assets/images/tokens/day8.png'
import token_day9 from '../assets/images/tokens/day9.png'
import token_day10 from '../assets/images/tokens/day10.png'
import token_day11 from '../assets/images/tokens/day11.png'
import token_day12 from '../assets/images/tokens/day12.png'
import token_day13 from '../assets/images/tokens/day13.png'
import token_day14 from '../assets/images/tokens/day14.png'
import token_day15 from '../assets/images/tokens/day15.png'
import token_day16 from '../assets/images/tokens/day16.png'
import token_day17 from '../assets/images/tokens/day17.png'
import token_day18 from '../assets/images/tokens/day18.png'
import token_day19 from '../assets/images/tokens/day19.png'
import token_day20 from '../assets/images/tokens/day20.png'
import token_day21 from '../assets/images/tokens/day21.png'
import token_day22 from '../assets/images/tokens/day22.png'
import token_day23 from '../assets/images/tokens/day23.png'
import token_day24 from '../assets/images/tokens/day24.png'
import token_day25 from '../assets/images/tokens/day25.png'

import sound1 from "../assets/sounds/test.mp3"
import sound2 from "../assets/sounds/test2.mp3"
import sound3 from "../assets/sounds/test3.mp3"
import sound4 from "../assets/sounds/test2.mp3"
import sound5 from "../assets/sounds/test.mp3"
import sound_cheer from "../assets/sounds/cheering.mp3"

const Calendar3D = forwardRef(function Calendar3D({ play, readCookie, updateCookie, showBadDoor, showContents }, ref) {
	const canvasRef = useRef(null);
	const playRef = useRef(play);
	const frameIdRef = useRef(null);
	const animateFnRef = useRef(null);
	const resetDoorsRef = useRef(null);

	// Keep props accessible inside stable event handler closures
	const showBadDoorRef = useRef(showBadDoor);
	const showContentsRef = useRef(showContents);
	const updateCookieRef = useRef(updateCookie);
	useEffect(() => {
		showBadDoorRef.current = showBadDoor;
		showContentsRef.current = showContents;
		updateCookieRef.current = updateCookie;
	});

	// Sync play state and restart animation loop if it stopped
	useEffect(() => {
		playRef.current = play;
		if (play && animateFnRef.current && frameIdRef.current === null) {
			frameIdRef.current = requestAnimationFrame(animateFnRef.current);
		}
	}, [play]);

	useImperativeHandle(ref, () => ({
		resetDoors() {
			if (resetDoorsRef.current) resetDoorsRef.current();
		}
	}));

	useEffect(() => {
		const canvas = canvasRef.current;

		const front_texture = new THREE.TextureLoader().load(advent_background);
		const back_texture = new THREE.TextureLoader().load(advent_background_rear);
		const side_texture_left = new THREE.TextureLoader().load(advent_side_left);
		const side_texture_right = new THREE.TextureLoader().load(advent_side_right);
		const side_texture_top = new THREE.TextureLoader().load(advent_side_top);
		const side_texture_bottom = new THREE.TextureLoader().load(advent_side_bottom);
		const rear_texture = new THREE.TextureLoader().load(cardboard_rear);

		const token_textures = [
			token_day1, token_day2, token_day3, token_day4, token_day5,
			token_day6, token_day7, token_day8, token_day9, token_day10,
			token_day11, token_day12, token_day13, token_day14, token_day15,
			token_day16, token_day17, token_day18, token_day19, token_day20,
			token_day21, token_day22, token_day23, token_day24, token_day25,
		].map(src => new THREE.TextureLoader().load(src));

		const confetti_group = [];

		const door_initial = readCookie();
		const open_year = 2020;

		const doorStates = [];
		for (let k = 0; k < 25; k++) {
			if (!door_initial[k]) {
				doorStates.push({
					open: false,
					isMoving: false,
					panelSound: [true, true, true, true, true],
					masterValue: 0,
					open_date: `${open_year}/12/${k + 1}`
				});
			} else {
				doorStates.push({
					open: true,
					isMoving: false,
					panelSound: [false, false, false, false, false],
					masterValue: 1,
					open_date: `${open_year}/12/${k + 1}`
				});
			}
		}

		const cookieUpdate = () => {
			const array = doorStates.map(d => d.open);
			updateCookieRef.current(array);
		};

		const loadSound = (src) => {
			const sound = document.createElement("audio");
			sound.src = src;
			sound.setAttribute("preload", "auto");
			sound.style.display = "none";
			sound.volume = 0.1;
			document.body.appendChild(sound);
			return sound;
		};

		const cardboardSound1 = loadSound(sound1);
		const cardboardSound2 = loadSound(sound2);
		const cardboardSound3 = loadSound(sound3);
		const cardboardSound4 = loadSound(sound4);
		const cardboardSound5 = loadSound(sound5);
		const cheerSound = loadSound(sound_cheer);

		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
		renderer.autoClearColor = false;
		renderer.setSize(window.innerWidth, window.innerHeight);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.minDistance = 1;
		controls.maxDistance = 20;
		controls.keys = {
			LEFT: 'ArrowLeft',
			UP: 'ArrowUp',
			RIGHT: 'ArrowRight',
			BOTTOM: 'ArrowDown'
		};
		controls.minPolarAngle = Math.PI / 4;
		controls.maxPolarAngle = 3 * Math.PI / 4;
		controls.minAzimuthAngle = -Math.PI / 4;
		controls.maxAzimuthAngle = Math.PI / 4;

		const minPan = new THREE.Vector3(-7, -10, 0);
		const maxPan = new THREE.Vector3(7, 10, 0);
		controls.addEventListener("change", function () {
			const v = new THREE.Vector3().copy(controls.target);
			controls.target.clamp(minPan, maxPan);
			v.sub(controls.target);
			camera.position.sub(v);
		});

		const frontPanel = createAdventFrontPanel(front_texture);
		scene.add(frontPanel);

		scene.add(createSidePanelLeft(side_texture_left));
		scene.add(createSidePanelLeft(false));
		scene.add(createSidePanelRight(side_texture_right));
		scene.add(createSidePanelRight(false));
		scene.add(createSidePanelTop(side_texture_top));
		scene.add(createSidePanelTop(false));
		scene.add(createSidePanelBottom(side_texture_bottom));
		scene.add(createSidePanelBottom(false));
		scene.add(createBackPanel(rear_texture));

		const doorArrays = [];
		const doorsAndOutlineArray = [];
		const doorArrayFront = [];
		const doorArrayBack = [];
		const doorPositions = [];
		const doorTokens = [];
		const tokenTweens = [];

		const addDoor = (i, j, door_id) => {
			const door = createDoor(i, j, front_texture, back_texture);
			door[0].door_id = door_id;
			door[1].door_id = door_id;

			scene.add(door[0]);
			const frontMesh = scene.children[scene.children.length - 1];
			doorArrayFront.push(frontMesh);
			doorArrays.push(frontMesh);
			doorsAndOutlineArray.push(frontMesh);
			scene.add(new THREE.SkeletonHelper(door[0]));

			scene.add(door[1]);
			const backMesh = scene.children[scene.children.length - 1];
			doorArrayBack.push(backMesh);
			doorArrays.push(backMesh);
			doorsAndOutlineArray.push(backMesh);

			doorPositions.push(door[2]);

			const door_outline = createDoorOutline(i, j, front_texture);
			door_outline[0].door_id = door_id;
			scene.add(door_outline[0]);
			doorsAndOutlineArray.push(scene.children[scene.children.length - 1]);
			scene.add(door_outline[1]);

			const token_mesh = createInsideToken(door[2][0], door[2][1], token_textures[door_id]);
			scene.add(token_mesh);
			doorTokens.push(scene.children[scene.children.length - 1]);
			token_mesh.door_id = door_id;

			const t0 = new TWEEN.Tween(token_mesh.position).to({ y: door[2][1] + 0.05 }, 500).easing(TWEEN.Easing.Back.In);
			const t1 = new TWEEN.Tween(token_mesh.position).to({ y: door[2][1] + 0.13 }, 500).easing(TWEEN.Easing.Cubic.Out);
			const t2 = new TWEEN.Tween(token_mesh.position).to({ y: door[2][1] - 0.1 }, 2000).easing(TWEEN.Easing.Elastic.Out);
			t0.chain(t1);
			t1.chain(t2);
			t2.chain(t0);
			t0.start();
			tokenTweens.push(t0, t1, t2);
		};

		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 4; j++) {
				addDoor(i, j, 4 * i + j);
			}
		}
		addDoor(6, 2, 24);

		const testDragGeom = new THREE.PlaneGeometry(200, 200);
		const testDragMat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
		const testDragMesh = new THREE.Mesh(testDragGeom, testDragMat);
		scene.add(testDragMesh);
		const testDragPanel = scene.children[scene.children.length - 1];

		camera.position.z = 20;
		controls.update();

		scene.add(snowEffectParticles);

		const onResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};
		window.addEventListener('resize', onResize);

		const raycaster = new THREE.Raycaster();

		let currentDoor = null;
		let currentDoor_initialx = null;
		let currentDoor_initialMasterValue = null;
		let anyDoorMoving = false;
		let isMouseDragging = false;
		let isCameraPosMoving = false;
		let isCameraRotMoving = false;

		const getSliderValue = (masterValue, sliderObj) => {
			if (masterValue === 0) { return sliderObj.outcome[0]; }
			const indexUpper = sliderObj.frac.findIndex(x => x >= masterValue);
			const indexLower = indexUpper - 1;
			const fraction = (masterValue - sliderObj.frac[indexLower]) / (sliderObj.frac[indexUpper] - sliderObj.frac[indexLower]);
			return sliderObj.outcome[indexLower] + fraction * (sliderObj.outcome[indexUpper] - sliderObj.outcome[indexLower]);
		};

		const adjustDoorBoneAngle = (door, bone, value) => {
			if (doorArrayFront && doorArrayBack) {
				doorArrayFront[door].skeleton.bones[bone].rotation.y = -value;
			}
		};

		const adjustDoorAngle = (door, masterValue) => {
			adjustDoorBoneAngle(door, 0, getSliderValue(masterValue, { frac: [0, 0.7, 1, 1.2], outcome: [0, 0, 2, 3] }));
			adjustDoorBoneAngle(door, 1, getSliderValue(masterValue, { frac: [0, 0.55, 0.7, 1, 1.2], outcome: [0, 0, 1.1, 0.8, 0] }));
			adjustDoorBoneAngle(door, 2, getSliderValue(masterValue, { frac: [0, 0.3, 0.55, 0.7, 1, 1.2], outcome: [0, 0, 1.1, 0.5, 0.4, 0] }));
			adjustDoorBoneAngle(door, 3, getSliderValue(masterValue, { frac: [0, 0.2, 0.3, 0.55, 1, 1.2], outcome: [0, 0, 1.1, 0.3, 0.2, 0] }));
			adjustDoorBoneAngle(door, 4, getSliderValue(masterValue, { frac: [0, 0.05, 0.2, 0.3, 1, 1.2], outcome: [0, 0, 1.1, 0.3, 0.2, 0] }));
			adjustDoorBoneAngle(door, 5, getSliderValue(masterValue, { frac: [0, 0.05, 0.4, 0.5, 1, 1.2], outcome: [0, 2, 2, 1.5, 0, 0] }));

			if (masterValue > 0.05 && doorStates[door].panelSound[0]) { cardboardSound1.pause(); cardboardSound1.currentTime = 0; cardboardSound1.play(); doorStates[door].panelSound[0] = false; }
			if (masterValue > 0.2 && doorStates[door].panelSound[1]) { cardboardSound2.pause(); cardboardSound2.currentTime = 0; cardboardSound2.play(); doorStates[door].panelSound[1] = false; }
			if (masterValue > 0.3 && doorStates[door].panelSound[2]) { cardboardSound3.pause(); cardboardSound3.currentTime = 0; cardboardSound3.play(); doorStates[door].panelSound[2] = false; }
			if (masterValue > 0.55 && doorStates[door].panelSound[3]) { cardboardSound4.pause(); cardboardSound4.currentTime = 0; cardboardSound4.play(); doorStates[door].panelSound[3] = false; }
			if (masterValue > 0.7 && doorStates[door].panelSound[4]) { cardboardSound5.pause(); cardboardSound5.currentTime = 0; cardboardSound5.play(); doorStates[door].panelSound[4] = false; }

			if (masterValue >= 0.99 && !doorStates[door].open) {
				cheerSound.pause(); cheerSound.currentTime = 0; cheerSound.play();
				doorStates[door].open = true;

				const confetti_r = new ExplosionConfetti(
					{},
					new THREE.Vector3(doorPositions[door][0], doorPositions[door][1] + 0.2, 0.5),
					new THREE.Vector3(0, 0, 0.5)
				);
				scene.add(confetti_r);
				confetti_group.push(confetti_r);

				const confetti_l = new ExplosionConfetti(
					{},
					new THREE.Vector3(doorPositions[door][0], doorPositions[door][1] + 0.2, 0.5),
					new THREE.Vector3(0, 0, -0.5)
				);
				scene.add(confetti_l);
				confetti_group.push(confetti_l);

				cookieUpdate();
			}
		};

		// Set initially open doors
		for (let k = 0; k < 25; k++) {
			if (doorStates[k].open) {
				adjustDoorAngle(k, 1);
			}
		}

		resetDoorsRef.current = () => {
			for (let k = 0; k < 25; k++) {
				adjustDoorAngle(k, 0);
				doorStates[k] = {
					open: false,
					isMoving: false,
					panelSound: [true, true, true, true, true],
					masterValue: 0,
					open_date: `${open_year}/12/${k + 1}`
				};
			}
			cookieUpdate();
		};

		const endOpenDoor = () => {
			const door = currentDoor;
			if (doorStates[door].masterValue !== 1 && doorStates[door].masterValue !== 0) {
				const target = doorStates[door].masterValue > 0.5 ? 1 : 0;
				const time = Math.abs(doorStates[door].masterValue - target) * 2000;
				anyDoorMoving = true;
				new TWEEN.Tween(doorStates[door])
					.to({ masterValue: target }, time)
					.easing(TWEEN.Easing.Sinusoidal.Out)
					.onUpdate(() => { adjustDoorAngle(door, doorStates[door].masterValue); })
					.onComplete(() => { anyDoorMoving = false; })
					.start();
			}
			canvas.removeEventListener('mousemove', openDoor, false);
			canvas.removeEventListener('touchmove', openDoor, false);
			canvas.removeEventListener('mouseup', endOpenDoor, false);
			canvas.removeEventListener('touchend', endOpenDoor, false);
		};

		const openDoor = (event) => {
			const door = currentDoor;
			const initial_x = currentDoor_initialx;
			const initial_door = currentDoor_initialMasterValue;
			const DOOR_OPEN_WIDTH = 3.05;
			const DOOR_OPEN_MAX = 1.2;
			const DOOR_OPEN_MIN = 0;

			const mouse = new THREE.Vector2();
			if (event.type === "mousemove") {
				if (event.buttons === 0) { endOpenDoor(); return; }
				mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			} else if (event.type === "touchmove") {
				mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
			}
			raycaster.setFromCamera(mouse, camera);
			const drag_intersect = raycaster.intersectObjects([testDragPanel]);
			if (drag_intersect.length > 0) {
				const new_x = drag_intersect[0].point.x;
				let masterValue = initial_door + (initial_x - new_x) / DOOR_OPEN_WIDTH;
				masterValue = Math.min(DOOR_OPEN_MAX, Math.max(DOOR_OPEN_MIN, masterValue));

				if (!doorStates[door].open && (new Date().getTime() > new Date(doorStates[door].open_date).getTime())) {
					adjustDoorAngle(door, masterValue);
					doorStates[door].masterValue = masterValue;
				} else {
					if (masterValue > 0.1) {
						const day_diff = Math.ceil((new Date(doorStates[door].open_date).getTime() - new Date().getTime()) / 86400000);
						showBadDoorRef.current(day_diff);
						endOpenDoor();
					}
				}
			}
		};

		const checkMouseIntersection = (event) => {
			if (camera.position.z > 5.5) { return; }
			const mouse = new THREE.Vector2();
			if (event.type === "mousedown") {
				mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			} else if (event.type === "touchstart") {
				mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
			}

			currentDoor = null;
			currentDoor_initialx = null;
			currentDoor_initialMasterValue = null;
			anyDoorMoving = false;
			raycaster.setFromCamera(mouse, camera);

			if (doorArrayFront) {
				const intersects = raycaster.intersectObjects(doorArrays, true);
				for (let i = 0; i < intersects.length; i++) {
					const door_id = intersects[i].object.door_id;
					if (!anyDoorMoving) {
						const initialDoorMasterValue = doorStates[door_id].masterValue;
						const drag_intersect = raycaster.intersectObjects([testDragPanel]);
						if (drag_intersect.length > 0) {
							controls.enableRotate = false;
							currentDoor = door_id;
							currentDoor_initialx = drag_intersect[0].point.x;
							currentDoor_initialMasterValue = initialDoorMasterValue;

							if (event.type === "mousedown") {
								canvas.addEventListener('mousemove', openDoor, false);
								canvas.addEventListener('mouseup', endOpenDoor, false);
							} else if (event.type === "touchstart") {
								canvas.addEventListener('touchmove', openDoor, false);
								canvas.addEventListener('touchend', endOpenDoor, false);
							}
						}
						break;
					}
				}
			}
		};

		const stopWheelZoom = (e) => { e.preventDefault(); };

		const moveToDoor = (event) => {
			const mouse = new THREE.Vector2();
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			const rc = new THREE.Raycaster();
			rc.setFromCamera(mouse, camera);
			const intersects = rc.intersectObjects(doorsAndOutlineArray.concat(doorTokens), true);

			if (intersects.length > 0) {
				const door_id = intersects[0].object.door_id;
				const target_pos = new THREE.Vector3(doorPositions[door_id][0], doorPositions[door_id][1], 4.5);
				const target_controls = new THREE.Vector3(doorPositions[door_id][0], doorPositions[door_id][1], 0);

				if (!isCameraPosMoving) {
					controls.enabled = false;
					isCameraPosMoving = true;
					canvas.addEventListener('wheel', stopWheelZoom, false);
					new TWEEN.Tween(camera.position)
						.to({ x: target_pos.x, y: target_pos.y, z: target_pos.z }, 1000)
						.easing(TWEEN.Easing.Quadratic.In)
						.onUpdate(() => { controls.update(); })
						.onComplete(() => {
							controls.enabled = true;
							controls.update();
							isCameraPosMoving = false;
							canvas.removeEventListener('wheel', stopWheelZoom, false);
						})
						.start();
				}

				if (!isCameraRotMoving) {
					controls.enabled = false;
					isCameraRotMoving = true;
					canvas.addEventListener('wheel', stopWheelZoom, false);
					new TWEEN.Tween(controls.target)
						.to({ x: target_controls.x, y: target_controls.y, z: target_controls.z }, 1000)
						.easing(TWEEN.Easing.Quadratic.In)
						.onUpdate(() => { controls.update(); })
						.onComplete(() => {
							controls.enabled = true;
							controls.update();
							isCameraRotMoving = false;
							canvas.removeEventListener('wheel', stopWheelZoom, false);
						})
						.start();
				}
			}
		};

		const checkContentsIntersect = (event) => {
			const mouse = new THREE.Vector2();
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			const rc = new THREE.Raycaster();
			rc.setFromCamera(mouse, camera);
			const intersects = rc.intersectObjects(doorTokens, true);
			if (intersects.length > 0) {
				const door_id = intersects[0].object.door_id;
				if (doorStates[door_id].open) {
					showContentsRef.current(door_id);
					return true;
				}
			}
			return false;
		};

		const onClick = (e) => {
			if (isMouseDragging) { return; }
			if (camera.position.z < 5) {
				if (checkContentsIntersect(e)) { return; }
			} else {
				moveToDoor(e);
			}
		};

		const onDblClick = (e) => {
			if (camera.position.z >= 5 || isMouseDragging) { return; }
			moveToDoor(e);
		};

		const isDragging = (e) => {
			if (e.buttons === 0) {
				stopDragCheck();
			} else {
				isMouseDragging = true;
			}
		};
		const stopDragCheck = () => {
			canvas.removeEventListener('mousemove', isDragging, true);
			canvas.removeEventListener('mouseup', stopDragCheck, true);
		};
		const checkForDrag = () => {
			isMouseDragging = false;
			canvas.addEventListener('mousemove', isDragging, true);
			canvas.addEventListener('mouseup', stopDragCheck, true);
		};

		const enableRotate = () => { controls.enableRotate = true; };
		const enableTouchRotate = () => { controls.enableRotate = true; };

		canvas.addEventListener('click', onClick, false);
		canvas.addEventListener('dblclick', onDblClick, true);
		canvas.addEventListener('mousedown', checkForDrag, false);
		canvas.addEventListener('mousedown', checkMouseIntersection, false);
		canvas.addEventListener('mouseup', enableRotate, false);
		canvas.addEventListener('touchstart', checkMouseIntersection, false);
		canvas.addEventListener('touchend', enableTouchRotate, false);

		const animate = (timeStamp) => {
			if (!playRef.current) {
				frameIdRef.current = null;
				return;
			}
			frameIdRef.current = requestAnimationFrame(animate);
			controls.update();
			updateSnowEffectParticles(snowEffectParticles, timeStamp);
			for (let i = 0; i < confetti_group.length; i++) {
				confetti_group[i].update();
			}
			TWEEN.update();
			renderer.render(scene, camera);
		};

		animateFnRef.current = animate;

		if (play) {
			frameIdRef.current = requestAnimationFrame(animate);
		}

		return () => {
			if (frameIdRef.current !== null) {
				cancelAnimationFrame(frameIdRef.current);
				frameIdRef.current = null;
			}
			animateFnRef.current = null;
			resetDoorsRef.current = null;

			window.removeEventListener('resize', onResize);
			canvas.removeEventListener('click', onClick, false);
			canvas.removeEventListener('dblclick', onDblClick, true);
			canvas.removeEventListener('mousedown', checkForDrag, false);
			canvas.removeEventListener('mousedown', checkMouseIntersection, false);
			canvas.removeEventListener('mouseup', enableRotate, false);
			canvas.removeEventListener('touchstart', checkMouseIntersection, false);
			canvas.removeEventListener('touchend', enableTouchRotate, false);

			controls.dispose();
			renderer.dispose();

			[cardboardSound1, cardboardSound2, cardboardSound3, cardboardSound4, cardboardSound5, cheerSound].forEach(s => {
				if (s.parentNode) s.parentNode.removeChild(s);
			});
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <canvas id='c' ref={canvasRef} />;
});

export default Calendar3D;
