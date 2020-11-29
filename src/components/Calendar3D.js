import React from 'react';
import * as THREE from 'three';
import * as TWEEN from 'tween.js'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {createDoor, createDoorOutline, createAdventFrontPanel, createSidePanelLeft, createSidePanelRight, createSidePanelTop, createSidePanelBottom, createBackPanel, createInsideToken} from './MeshCreation'
import {snowEffectParticles, updateSnowEffectParticles} from './SnowEffect'
import ExplosionConfetti from './explosionConfetti2'

// import bodie_test from '../images/bodie_test.jpg'
import advent_background from '../images/advent_background.png'
import advent_background_rear from '../images/advent_background_rear.png'
import cardboard_rear from '../images/cardboard_back.jpg'
import advent_side_left from '../images/advent_side_left.png'
import advent_side_right from '../images/advent_side_right.png'
import advent_side_top from '../images/advent_side_top.png'
import advent_side_bottom from '../images/advent_side_bottom.png'
// import token_envelope from '../images/token_envelope.png'

import token_day1 from '../images/tokens/day1.png'
import token_day2 from '../images/tokens/day2.png'
import token_day3 from '../images/tokens/day3.png'
import token_day4 from '../images/tokens/day4.png'
import token_day5 from '../images/tokens/day5.png'
import token_day6 from '../images/tokens/day6.png'
import token_day7 from '../images/tokens/day7.png'
import token_day8 from '../images/tokens/day8.png'
import token_day9 from '../images/tokens/day9.png'
import token_day10 from '../images/tokens/day10.png'
import token_day11 from '../images/tokens/day11.png'
import token_day12 from '../images/tokens/day12.png'
import token_day13 from '../images/tokens/day13.png'
import token_day14 from '../images/tokens/day14.png'
import token_day15 from '../images/tokens/day15.png'
import token_day16 from '../images/tokens/day16.png'
import token_day17 from '../images/tokens/day17.png'
import token_day18 from '../images/tokens/day18.png'
import token_day19 from '../images/tokens/day19.png'
import token_day20 from '../images/tokens/day20.png'
import token_day21 from '../images/tokens/day21.png'
import token_day22 from '../images/tokens/day22.png'
import token_day23 from '../images/tokens/day23.png'
import token_day24 from '../images/tokens/day24.png'
import token_day25 from '../images/tokens/day25.png'



import sound1 from "../sounds/test.mp3"
import sound2 from "../sounds/test2.mp3"
import sound3 from "../sounds/test3.mp3"
import sound4 from "../sounds/test2.mp3"
import sound5 from "../sounds/test.mp3"

import sound_cheer from "../sounds/cheering.mp3"

class Calendar3D extends React.Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { play: this.props.play,
					 update: false};
	}
	
	componentDidMount() {
		
		// this.front_texture = new THREE.TextureLoader().load("https://i.imgur.com/5FTxFXe.jpg")
		this.front_texture = new THREE.TextureLoader().load(advent_background)
		this.back_texture = new THREE.TextureLoader().load(advent_background_rear)
		this.side_texture_left = new THREE.TextureLoader().load(advent_side_left)
		this.side_texture_right = new THREE.TextureLoader().load(advent_side_right)
		this.side_texture_top = new THREE.TextureLoader().load(advent_side_top)
		this.side_texture_bottom = new THREE.TextureLoader().load(advent_side_bottom)
		this.rear_texture = new THREE.TextureLoader().load(cardboard_rear)
		
		this.token_textures = []
		this.token_textures.push(new THREE.TextureLoader().load(token_day1))
		this.token_textures.push(new THREE.TextureLoader().load(token_day2))
		this.token_textures.push(new THREE.TextureLoader().load(token_day3))
		this.token_textures.push(new THREE.TextureLoader().load(token_day4))
		this.token_textures.push(new THREE.TextureLoader().load(token_day5))
		this.token_textures.push(new THREE.TextureLoader().load(token_day6))
		this.token_textures.push(new THREE.TextureLoader().load(token_day7))
		this.token_textures.push(new THREE.TextureLoader().load(token_day8))
		this.token_textures.push(new THREE.TextureLoader().load(token_day9))
		this.token_textures.push(new THREE.TextureLoader().load(token_day10))
		this.token_textures.push(new THREE.TextureLoader().load(token_day11))
		this.token_textures.push(new THREE.TextureLoader().load(token_day12))
		this.token_textures.push(new THREE.TextureLoader().load(token_day13))
		this.token_textures.push(new THREE.TextureLoader().load(token_day14))
		this.token_textures.push(new THREE.TextureLoader().load(token_day15))
		this.token_textures.push(new THREE.TextureLoader().load(token_day16))
		this.token_textures.push(new THREE.TextureLoader().load(token_day17))
		this.token_textures.push(new THREE.TextureLoader().load(token_day18))
		this.token_textures.push(new THREE.TextureLoader().load(token_day19))
		this.token_textures.push(new THREE.TextureLoader().load(token_day20))
		this.token_textures.push(new THREE.TextureLoader().load(token_day21))
		this.token_textures.push(new THREE.TextureLoader().load(token_day22))
		this.token_textures.push(new THREE.TextureLoader().load(token_day23))
		this.token_textures.push(new THREE.TextureLoader().load(token_day24))
		this.token_textures.push(new THREE.TextureLoader().load(token_day25))
		// this.token_texture = new THREE.TextureLoader().load(token_envelope)
		// this.front_texture.needsUpdate = true;
		
		this.confetti_group = []
		
		var door_initial = this.props.readCookie()
		// console.log(door_initial)
		
		this.open_year = 2020		
		
		this.doorStates = []
		for (var k = 0; k < 25; k++) {
			if (!door_initial[k]) {
				this.doorStates.push(
					{
						open: false,
						isMoving: false,
						panelSound: [true, true, true, true, true],
						masterValue: 0,
						open_date: `${this.open_year}/12/${k+1}`
					}
				)
			} else {
				this.doorStates.push(
					{
						open: true,
						isMoving: false,
						panelSound: [false, false, false, false, false],
						masterValue: 1,
						open_date: `${this.open_year}/12/${k+1}`
					}
				)
			}
		}
		
		const updateCookie = () => {
			var array = []
			for (var k = 0; k < 25; k++) {
				array.push(this.doorStates[k].open)
			}
			this.props.updateCookie(array)
		}
		
		const loadSound = (src) => {
			var sound = document.createElement("audio");
			sound.src = src
			sound.setAttribute("preload", "auto");
			// sound.setAttribute("controls", "none");
			sound.style.display = "none";
			document.body.appendChild(sound);
			return sound
			
			// var snd1  = new Audio();
			// var src1  = document.createElement("source");
			// src1.type = "audio/mpeg";
			// src1.src  = src;
			// snd1.appendChild(src1);
			
			// return snd1
			
			// var sound = new Howl({
			  // src: [src]
			// });
			// return sound
		}
		
		this.cardboardSound1 = loadSound(sound1)
		this.cardboardSound2 = loadSound(sound2)
		this.cardboardSound3 = loadSound(sound3)
		this.cardboardSound4 = loadSound(sound4)
		this.cardboardSound5 = loadSound(sound5)
		
		this.cheerSound = loadSound(sound_cheer)
		
		// console.log(this.cardboardSound1)
		
		
		const canvas = this.canvas
		// const renderer = new THREE.WebGLRenderer({canvas});
		const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
		renderer.autoClearColor = false;
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );


		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		const controls = new OrbitControls( camera, renderer.domElement );
		controls.minDistance = 1;
		controls.maxDistance = 20;
		controls.keys = {
			  LEFT: 37, //left arrow
			  UP: 38, // up arrow
			  RIGHT: 39, // right arrow
			  BOTTOM: 40 // down arrow
			};
		controls.minPolarAngle = Math.PI/4; // radians
		controls.maxPolarAngle = 3*Math.PI/4; // radians

		controls.minAzimuthAngle = - Math.PI/4; // radians
		controls.maxAzimuthAngle = Math.PI/4; // radians

		var minPan = new THREE.Vector3( - 7, - 10, 0 );
		var maxPan = new THREE.Vector3( 7, 10, 0 );

		controls.addEventListener("change", function() {
			var v = new THREE.Vector3().copy(controls.target);
			controls.target.clamp(minPan, maxPan);
			v.sub(controls.target);
			camera.position.sub(v);
		})



		// const geometry = new THREE.PlaneGeometry( 13, 22, 1, 1 );
		const frontPanel = createAdventFrontPanel(this.front_texture)
		scene.add( frontPanel )
		
		const sidePanelLeft = createSidePanelLeft(this.side_texture_left)
		const sidePanelLeft_inner = createSidePanelLeft(false)
		scene.add( sidePanelLeft )
		scene.add( sidePanelLeft_inner )
		
		const sidePanelRight = createSidePanelRight(this.side_texture_right)
		const sidePanelRight_inner = createSidePanelRight(false)
		scene.add( sidePanelRight )
		scene.add( sidePanelRight_inner )
		
		const sidePanelTop = createSidePanelTop(this.side_texture_top)
		const sidePanelTop_inner = createSidePanelTop(false)
		scene.add( sidePanelTop )
		scene.add( sidePanelTop_inner )
		
		const sidePanelBottom = createSidePanelBottom(this.side_texture_bottom)
		const sidePanelBottom_inner = createSidePanelBottom(false)
		scene.add( sidePanelBottom )
		scene.add( sidePanelBottom_inner )
		
		const rearPanel = createBackPanel(this.rear_texture)
		scene.add( rearPanel )
		
		this.doorArrays = []
		this.doorsAndOutlineArray = []
		this.doorArrayFront = []
		this.doorArrayBack = []
		this.doorPositions = []
		this.doorTokens = []
		this.tokenTweens = []
		
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 4; j++) {
				var door = createDoor(i, j, this.front_texture, this.back_texture)
				// console.log(door[0])
				door[0].door_id = 4*i + j
				door[1].door_id = 4*i + j
				scene.add( door[0] )
				this.doorArrayFront.push( scene.children[scene.children.length-1] )
				this.doorArrays.push( scene.children[scene.children.length-1] )
				this.doorsAndOutlineArray.push( scene.children[scene.children.length-1] )
				const helper = new THREE.SkeletonHelper( door[0] );
				scene.add( helper )
				
				scene.add( door[1] )
				this.doorArrayBack.push( scene.children[scene.children.length-1] )
				this.doorArrays.push( scene.children[scene.children.length-1] )
				this.doorsAndOutlineArray.push( scene.children[scene.children.length-1] )
				
				this.doorPositions.push( door[2] )
				
				var door_outline = createDoorOutline(i, j, this.front_texture)
				door_outline[0].door_id = 4*i + j
				scene.add( door_outline[0] )
				this.doorsAndOutlineArray.push( scene.children[scene.children.length-1] )
				
				scene.add( door_outline[1] )
				
				var token_mesh = createInsideToken(door[2][0], door[2][1], this.token_textures[4*i + j])
				scene.add(token_mesh)
				this.doorTokens.push( scene.children[scene.children.length-1] )
				token_mesh.door_id = 4*i + j
				
				this.tokenTweens.push(new TWEEN.Tween(token_mesh.position)
				  .to({ y: door[2][1]+0.05 }, 500)
				  .easing(TWEEN.Easing.Back.In)
				)
				this.tokenTweens.push(new TWEEN.Tween(token_mesh.position)
				  .to({ y: door[2][1]+0.13 }, 500)
				  .easing(TWEEN.Easing.Cubic.Out)
				)
				this.tokenTweens.push(new TWEEN.Tween(token_mesh.position)
				  .to({ y: door[2][1]-0.1 }, 2000)
				  .easing(TWEEN.Easing.Elastic.Out)
				)
				
				this.tokenTweens[this.tokenTweens.length-3].chain(this.tokenTweens[this.tokenTweens.length-2])
				this.tokenTweens[this.tokenTweens.length-2].chain(this.tokenTweens[this.tokenTweens.length-1])
				this.tokenTweens[this.tokenTweens.length-1].chain(this.tokenTweens[this.tokenTweens.length-3])
				
				this.tokenTweens[this.tokenTweens.length-3].start()
				
			}
		}
		
		i = 6
		j = 2
		door = createDoor(i, j, this.front_texture, this.back_texture)
		door[0].door_id = 24
		door[1].door_id = 24
		scene.add( door[0] )
		this.doorArrayFront.push( scene.children[scene.children.length-1] )
		this.doorArrays.push( scene.children[scene.children.length-1] )
		this.doorsAndOutlineArray.push( scene.children[scene.children.length-1] )
		const helper = new THREE.SkeletonHelper( door[0] );
		scene.add( helper )
		
		scene.add( door[1] )
		this.doorArrayBack.push( scene.children[scene.children.length-1] )
		this.doorArrays.push( scene.children[scene.children.length-1] )
		this.doorsAndOutlineArray.push( scene.children[scene.children.length-1] )
		
		this.doorPositions.push( door[2] )
		
		door_outline = createDoorOutline(i, j, this.front_texture)
		door_outline[0].door_id = 24
		scene.add( door_outline[0] )
		this.doorsAndOutlineArray.push( scene.children[scene.children.length-1] )
		
		scene.add( door_outline[1] )
		
		token_mesh = createInsideToken(door[2][0], door[2][1], this.token_textures[24])
		scene.add(token_mesh)
		this.doorTokens.push( scene.children[scene.children.length-1] )
		token_mesh.door_id = 24
		
		this.tokenTweens.push(new TWEEN.Tween(token_mesh.position)
		  .to({ y: door[2][1]+0.05 }, 500)
		  .easing(TWEEN.Easing.Back.In)
		)
		this.tokenTweens.push(new TWEEN.Tween(token_mesh.position)
		  .to({ y: door[2][1]+0.13 }, 500)
		  .easing(TWEEN.Easing.Cubic.Out)
		)
		this.tokenTweens.push(new TWEEN.Tween(token_mesh.position)
		  .to({ y: door[2][1]-0.1 }, 2000)
		  .easing(TWEEN.Easing.Elastic.Out)
		)
		
		this.tokenTweens[this.tokenTweens.length-3].chain(this.tokenTweens[this.tokenTweens.length-2])
		this.tokenTweens[this.tokenTweens.length-2].chain(this.tokenTweens[this.tokenTweens.length-1])
		this.tokenTweens[this.tokenTweens.length-1].chain(this.tokenTweens[this.tokenTweens.length-3])
		
		this.tokenTweens[this.tokenTweens.length-3].start()
		
		
		var testDragGeom = new THREE.Geometry();
		testDragGeom.vertices.push(new THREE.Vector3(-100, -100, 0))
		testDragGeom.vertices.push(new THREE.Vector3(100, -100, 0))
		testDragGeom.vertices.push(new THREE.Vector3(100, 100, 0))
		testDragGeom.vertices.push(new THREE.Vector3(-100, 100, 0))
		
		testDragGeom.faces.push(new THREE.Face3( 0, 3, 2 ))
		testDragGeom.faces.push(new THREE.Face3( 0, 2, 1 ))
		
		const testDragMat = new THREE.MeshBasicMaterial( { color: 0xffffff, visible: false, wireframe: true, side: THREE.DoubleSide } );
		
		const testDragMesh = new THREE.Mesh( testDragGeom, testDragMat )
		scene.add( testDragMesh )
		this.testDragPanel = scene.children[scene.children.length-1]
		
		// var testDragGeomView = new THREE.Geometry();
		// testDragGeomView.vertices.push(new THREE.Vector3(-0.65, 0, 0.01))
		// testDragGeomView.vertices.push(new THREE.Vector3(2.4, 0, 0.01))
		// testDragGeomView.vertices.push(new THREE.Vector3(2.4, 1, 0.01))
		// testDragGeomView.vertices.push(new THREE.Vector3(-0.65, 1, 0.01))
		
		// testDragGeomView.faces.push(new THREE.Face3( 0, 3, 2 ))
		// testDragGeomView.faces.push(new THREE.Face3( 0, 2, 1 ))
		
		// const testDragMatView = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true, side: THREE.DoubleSide } );
		
		// const testDragMeshView = new THREE.Mesh( testDragGeomView, testDragMatView )
		// scene.add( testDragMeshView )
		
		// console.log(camera)

		camera.position.z = 20;
		controls.update();

		// var snow = snowEffectParticles()
		scene.add(snowEffectParticles);


		const onResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		window.addEventListener('resize', onResize);
		
		
		const raycaster = new THREE.Raycaster();

		const checkMouseIntersection = (event) => {
			
			if (camera.position.z > 5.5) {return}
			// console.log(event)
			var mouse = new THREE.Vector2();
			if (event.type === "mousedown") {
				
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			} else if (event.type === "touchstart") {
				mouse.x = ( event.touches[0].clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.touches[0].clientY  / window.innerHeight ) * 2 + 1;
					
			}
			
			// console.log(mouse)
			
			var intersects
			this.currentDoor = null
			this.currentDoor_initialx = null
			this.currentDoor_initialMasterValue = null
			this.anyDoorMoving = false
			// update the picking ray with the camera and mouse position
			raycaster.setFromCamera( mouse, camera );
			// scene.add(new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 300, 0x00ff00) );
			// calculate objects intersecting the picking ray
			if (this.doorArrayFront) {
				intersects = raycaster.intersectObjects( this.doorArrays, true );
				// console.log(intersects)
				for (var i = 0; i < intersects.length; i++) {
					// if (getTabFaceIndexArray().includes(intersects[i].faceIndex)) {
						// console.log(intersects)
						// console.log(intersects[0].object.door_id)
						var door_id = intersects[i].object.door_id
						if (!this.anyDoorMoving) {
						
						// console.log(this.doorState)
							var initialDoorMasterValue = this.doorStates[door_id].masterValue
							if (this.testDragPanel) {
								var drag_intersect = raycaster.intersectObjects( [this.testDragPanel] )
								if (drag_intersect.length > 0) {
									
									controls.enableRotate = false;
									
									// console.log('initial')
									
									// console.log(drag_intersect[0].point.x)
									
									this.currentDoor = door_id
									this.currentDoor_initialx = drag_intersect[0].point.x
									this.currentDoor_initialMasterValue = initialDoorMasterValue
										
								
									if (event.type === "mousedown") {
										this.canvas.addEventListener( 'mousemove', openDoor, false );
										this.canvas.addEventListener( 'mouseup', endOpenDoor, false );
									} else if (event.type === "touchstart") {
										this.canvas.addEventListener( 'touchmove', openDoor, false );
										this.canvas.addEventListener( 'touchend', endOpenDoor, false );
									}
								}
							}
							break
						}
					// }
					
				}
			}
			
			// if (this.testDragPanel) {
				// intersects = raycaster.intersectObjects( [this.testDragPanel] );
				// if (intersects.length > 0) {
					// console.log(intersects)
					// controls.enableRotate = false;
				// }
			// }

		}
		
		const endOpenDoor = (event) => {
			
			var door = this.currentDoor
			
			if (this.doorStates[door].masterValue !== 1 && this.doorStates[door].masterValue !== 0) {
				var target
				var time
				if (this.doorStates[door].masterValue > 0.5) {
					target = 1
					time = Math.abs(this.doorStates[door].masterValue - 1) * 2000
				} else {
					target = 0
					time = Math.abs(this.doorStates[door].masterValue - 0) * 2000
				}
				
				// console.log(target)
				// console.log(time)
			
				this.anyDoorMoving = true
				
				new TWEEN.Tween( this.doorStates[door] )
					.to({masterValue: target}, time)
					.easing(TWEEN.Easing.Sinusoidal.Out)
					.onUpdate(() => {
						adjustDoorAngle(door, this.doorStates[door].masterValue)
					 })
					.onComplete(() => {
						this.anyDoorMoving =false
					})
					.start()
					
			}
			
			
			
			
			
			this.canvas.removeEventListener( 'mousemove', openDoor, false );
			this.canvas.removeEventListener( 'touchmove', openDoor, false );
			this.canvas.removeEventListener( 'mouseup', endOpenDoor, false );
			this.canvas.removeEventListener( 'touchend', endOpenDoor, false );
		}
		
		const openDoor = (event) => {
			
			var door = this.currentDoor
			var initial_x = this.currentDoor_initialx
			var initial_door = this.currentDoor_initialMasterValue
			
			// console.log('here')
			
			const DOOR_OPEN_WIDTH = 3.05 // equivalent to door open fraction of 1
			
			const DOOR_OPEN_MAX = 1.2
			
			const DOOR_OPEN_MIN = 0
			
			var mouse = new THREE.Vector2();
			if (event.type === "mousemove") {
				if (event.buttons === 0) {endOpenDoor(); return}
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			} else if (event.type === "touchmove") {
				mouse.x = ( event.touches[0].clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.touches[0].clientY  / window.innerHeight ) * 2 + 1;	
			}
			raycaster.setFromCamera( mouse, camera );
			if (this.testDragPanel) {
				var drag_intersect = raycaster.intersectObjects( [this.testDragPanel] )
				if (drag_intersect.length > 0) {
					var new_x = drag_intersect[0].point.x
					var masterValue = initial_door + (initial_x-new_x) / DOOR_OPEN_WIDTH
					// console.log(masterValue)
					
					masterValue = Math.min(DOOR_OPEN_MAX, masterValue)
					masterValue = Math.max(DOOR_OPEN_MIN, masterValue)
					
					if (!this.doorStates[door].open && (new Date().getTime() > new Date(this.doorStates[door].open_date).getTime())) {
						adjustDoorAngle(door, masterValue)
						this.doorStates[door].masterValue = masterValue
					} else {
						if (masterValue > 0.5) {
							var day_diff =  Math.ceil(( new Date(this.doorStates[door].open_date).getTime() - new Date().getTime() ) / 86400000);
							this.props.showBadDoor(day_diff)
							endOpenDoor(null)
						}
					}
				}
			}
			
		}
		
		const adjustDoorBoneAngle = (door = 0, bone=0, value=0) => {
			if (this.doorArrayFront && this.doorArrayBack) {
				this.doorArrayFront[door].skeleton.bones[bone].rotation.y = -value;
				// fix by using this with custom raycasting check
				// https://stackoverflow.com/questions/57332347/three-js-get-updated-vertices-with-skeletal-animations

			}
		}
		
		const adjustDoorAngle = (door, masterValue) => {
			
			var valueObj0 = {
				frac: [0, 0.7, 1, 1.2],
				outcome: [0, 0, 2, 3]
			}

			var valueObj1 = {
				frac: [0, 0.55, 0.7, 1, 1.2],
				outcome: [0, 0, 1.1, 0.8, 0]
			}

			var valueObj2 = {
				frac: [0, 0.3, 0.55, 0.7, 1, 1.2],
				outcome: [0, 0, 1.1, 0.5, 0.4, 0]
			}

			var valueObj3 = {
				frac: [0, 0.2, 0.3, 0.55, 1, 1.2],
				outcome: [0, 0, 1.1, 0.3, 0.2, 0]
			}

			var valueObj4 = {
				frac: [0, 0.05, 0.2, 0.3, 1, 1.2],
				outcome: [0, 0, 1.1, 0.3, 0.2, 0]
			}

			var valueObj5 = {
				frac: [0, 0.05, 0.4, 0.5, 1, 1.2],
				outcome: [0, 2, 2, 1.5, 0, 0]
			}
			
			adjustDoorBoneAngle(door, 0, getSliderValue(masterValue, valueObj0))
			adjustDoorBoneAngle(door, 1, getSliderValue(masterValue, valueObj1))
			adjustDoorBoneAngle(door, 2, getSliderValue(masterValue, valueObj2))
			adjustDoorBoneAngle(door, 3, getSliderValue(masterValue, valueObj3))
			adjustDoorBoneAngle(door, 4, getSliderValue(masterValue, valueObj4))
			adjustDoorBoneAngle(door, 5, getSliderValue(masterValue, valueObj5))
			
			
			if (masterValue > 0.05 && this.doorStates[door].panelSound[0]) {this.cardboardSound1.pause(); this.cardboardSound1.currentTime=0; this.cardboardSound1.play(); this.doorStates[door].panelSound[0] = false}
			if (masterValue > 0.2 && this.doorStates[door].panelSound[1]) {this.cardboardSound2.pause(); this.cardboardSound2.currentTime=0; this.cardboardSound2.play(); this.doorStates[door].panelSound[1] = false}
			if (masterValue > 0.3 && this.doorStates[door].panelSound[2]) {this.cardboardSound3.pause(); this.cardboardSound3.currentTime=0; this.cardboardSound3.play(); this.doorStates[door].panelSound[2] = false}
			if (masterValue > 0.55 && this.doorStates[door].panelSound[3]) {this.cardboardSound4.pause(); this.cardboardSound4.currentTime=0; this.cardboardSound4.play(); this.doorStates[door].panelSound[3] = false}
			if (masterValue > 0.7 && this.doorStates[door].panelSound[4]) {this.cardboardSound5.pause(); this.cardboardSound5.currentTime=0; this.cardboardSound5.play(); this.doorStates[door].panelSound[4] = false}
			
			if (masterValue >= 0.99 && !this.doorStates[door].open) {
				this.cheerSound.pause(); this.cheerSound.currentTime=0; this.cheerSound.play(); this.doorStates[door].open = true
				
				var confetti_r = new ExplosionConfetti(
					{}, 
					new THREE.Vector3(this.doorPositions[door][0]+0, this.doorPositions[door][1]+0.2, 0.1),
					new THREE.Vector3(0, 0, 0.5)
				);
				scene.add(confetti_r)
				this.confetti_group.push(confetti_r)
				
				var confetti_l = new ExplosionConfetti(
					{}, 
					new THREE.Vector3(this.doorPositions[door][0]-0, this.doorPositions[door][1]+0.2, 0.1),
					new THREE.Vector3(0, 0, -0.5)
				);
				scene.add(confetti_l)
				this.confetti_group.push(confetti_l)
				
				updateCookie()
			}
				
		}
		
		const getSliderValue = (masterValue, sliderObj) => {
		  if (masterValue === 0) {return sliderObj.outcome[0]}
		  
		  var indexUpper = sliderObj.frac.findIndex(x => x >= masterValue)
		  var indexLower = indexUpper - 1
		  
		  var fraction = (masterValue - sliderObj.frac[indexLower]) / (sliderObj.frac[indexUpper] - sliderObj.frac[indexLower])
		  
		  var output = sliderObj.outcome[indexLower] + fraction*(sliderObj.outcome[indexUpper] - sliderObj.outcome[indexLower])
		  
		  return output
		  
		  
		}
		
		for (k = 0; k < 25; k++) { 
			if (this.doorStates[k].open) {
				adjustDoorAngle(k, 1)
			}
		}
		
		this.resetDoors = () => {
			for (k = 0; k < 25; k++) { 
				adjustDoorAngle(k, 0)
				this.doorStates[k] = {
					open: false,
					isMoving: false,
					panelSound: [true, true, true, true, true],
					masterValue: 0,
					open_date: `${this.open_year}/12/${k+1}`
				}
			}
			
			updateCookie()
			
		}
		
		this.isMouseDragging = false
		this.isCameraPosMoving = false
		this.isCameraRotMoving = false
		
		const isDragging = (e) => {
			if (e.buttons === 0) {
				stopDragCheck()
			} else {
				this.isMouseDragging = true
			}
		}
		const stopDragCheck = () => {
			this.canvas.removeEventListener( 'mousemove', isDragging, true );
			this.canvas.removeEventListener( 'mouseup', stopDragCheck, true );	
			
		}
		const checkForDrag = () => {
			this.isMouseDragging = false
			this.canvas.addEventListener( 'mousemove', isDragging, true );
			this.canvas.addEventListener( 'mouseup', stopDragCheck, true );	
		}
		
		const stopWheelZoom = (e) => {
			e.preventDefault()
		}
		
		const moveToDoor = (event) => {
			
			var mouse = new THREE.Vector2();
			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;			
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, camera );
			var intersects = raycaster.intersectObjects( this.doorsAndOutlineArray.concat(this.doorTokens), true )
			
			if (intersects.length > 0) {
				var door_id = intersects[0].object.door_id
			
				var target_pos = new THREE.Vector3(this.doorPositions[door_id][0], this.doorPositions[door_id][1], 4.5);
				var target_controls = new THREE.Vector3(this.doorPositions[door_id][0], this.doorPositions[door_id][1], 0);
				
				if (!this.isCameraPosMoving) {
					controls.enabled = false;
					this.isCameraPosMoving = true
					this.canvas.addEventListener( 'wheel', stopWheelZoom, false );
					new TWEEN.Tween( camera.position )
						.to({ x: target_pos.x, y: target_pos.y, z: target_pos.z }, 1000)
						.easing(TWEEN.Easing.Quadratic.In)
						.onUpdate(() => {
							controls.update()
						 })
						.onComplete(() => {
							controls.enabled = true;
							controls.update()
							this.isCameraPosMoving = false
							this.canvas.removeEventListener( 'wheel', stopWheelZoom, false );
							
						})
						.start()
				}
				
				if (!this.isCameraRotMoving) {
					controls.enabled = false;
					this.isCameraRotMoving = true
					this.canvas.addEventListener( 'wheel', stopWheelZoom, false );
					new TWEEN.Tween( controls.target )
						.to({ x: target_controls.x, y: target_controls.y, z: target_controls.z }, 1000)
						.easing(TWEEN.Easing.Quadratic.In)
						.onUpdate(() => {
							controls.update()
						 })
						.onComplete(() => {
							controls.enabled = true;
							controls.update()
							this.isCameraRotMoving = false
							this.canvas.removeEventListener( 'wheel', stopWheelZoom, false );
						})
						.start()
				}
			}

		}
		
		const checkContentsIntersect = (event) => {
			// console.log('here')
			var mouse = new THREE.Vector2();
			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;			
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, camera );
			var intersects = raycaster.intersectObjects( this.doorTokens, true )
			if (intersects.length > 0) {
				// console.log('here  2')
				var door_id = intersects[0].object.door_id
				// console.log(door_id)
				if (this.doorStates[door_id].open) {
					this.props.showContents(door_id)
					return true
				} else {
					return false
				}
			} else {
				return false
			}
		}
		
		const onClick = (e) => {
			if (this.isMouseDragging) {return}
			
			if (this.isMouseDragging) {return}
			if (camera.position.z <5) {
				if (checkContentsIntersect(e)) {return}
			} else {
				moveToDoor(e)
			}
		}
		
		const onDblClick = (e) => {			
			if (camera.position.z >= 5 || this.isMouseDragging) {return}
			moveToDoor(e)
		}
		
		
		
		
		this.canvas.addEventListener( 'click', onClick, false)
		this.canvas.addEventListener( 'dblclick', onDblClick, true)
		this.canvas.addEventListener( 'mousedown', checkForDrag, false );	
		this.canvas.addEventListener( 'mousedown', checkMouseIntersection, false );
		this.canvas.addEventListener( 'mouseup', () => {controls.enableRotate = true}, false);
		this.canvas.addEventListener( 'touchstart', checkMouseIntersection, false );
		this.canvas.addEventListener( 'touchend', () => {controls.enableRotate = true}, false );
		
		// this.canvas.addEventListener( 'touchstart', (event) => {console.log([event.touches[0].clientX, event.touches[0].clientY]) })
		// this.canvas.addEventListener( 'mousedown', (event) => {console.log([event.clientX, event.clientY]) })
	

		const animate = (timeStamp) => {
			if (this.props.play) {
				requestAnimationFrame( this.animate );
			}

			// line.rotation.x += 0.01;
			// line.rotation.y += 0.01;
			
			controls.update();
			
			// console.log(camera.position)
			
			updateSnowEffectParticles(snowEffectParticles, timeStamp)
			
			// checkMouseIntersection()
			
			for (var i = 0; i < this.confetti_group.length; i++) {
				this.confetti_group[i].update()
			}

			TWEEN.update();
			renderer.render( scene, camera );
		};
		
		this.scene = scene
		
		this.animate = animate
		
		
		// requestAnimationFrame(this.animate);
		
		this.setState({update: !this.state.update})

	}
	
	// requestAnimationFrame = () => {
		// if (this.animate) {
			// requestAnimationFrame(this.animate);
		// }
	// }
	
	render() {
		
		if (this.props.play) {
			if (this.animate) {
				requestAnimationFrame( this.animate );
			}
		} 
		
		return(
			<canvas id='c' ref={ref => (this.canvas = ref)}/>
		)
	}
}










export default Calendar3D;