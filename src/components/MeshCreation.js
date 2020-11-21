import * as THREE from 'three';
import Delaunator from 'delaunator'; 

const CALENDAR_WIDTH = 13
const CALENDAR_HEIGHT = 22

const number_of_folds = 5
const fold_height_fraction = 0.03
const fold_triangle_width_fraction = 0.15

const tab_height_fraction = 0.3
const tab_width_fraction = 0.1
const tab_triangle_fraction = 0.1

const BASE_WIDTH = 1.5
const BASE_HEIGHT = 1.5
// tabs spill over base width and height

const OUTLINE_L_MARGIN = 0.25
const OUTLINE_T_MARGIN = 0.25
const OUTLINE_R_MARGIN = 0.25
const OUTLINE_B_MARGIN = 0.25

const fold_width = BASE_WIDTH / number_of_folds

const stagger_val = -0.7

function createDoorMesh() {

	var geom = new THREE.Geometry();
	var i
	// base folds
	for (i = 0; i < number_of_folds; i++) {
		if (i === 0) {
			geom.vertices.push(new THREE.Vector3( i*fold_width, 0, 0 ))
			geom.vertices.push(new THREE.Vector3( i*fold_width, BASE_HEIGHT, 0 ))
		}
		geom.vertices.push(new THREE.Vector3( (i+1)*fold_width, 0, 0 ))
		geom.vertices.push(new THREE.Vector3( (i+1)*fold_width, BASE_HEIGHT, 0 ))
		
		geom.faces.push(new THREE.Face3( 2*i, 2*i + 1, 2*i + 3 ))
		geom.faces.push(new THREE.Face3( 2*i, 2*i + 3, 2*i + 2 ))
	}
	
	// number of points previously created
	var fp = 2 + 2*number_of_folds
	
	// tab mesh
	
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 - tab_height_fraction*BASE_HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 + tab_height_fraction*BASE_HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 - tab_height_fraction*BASE_HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 + tab_height_fraction*BASE_HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 - (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 + (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	
	geom.faces.push(new THREE.Face3( fp, fp + 1, fp + 3 ))
	geom.faces.push(new THREE.Face3( fp, fp + 3, fp + 2 ))
	geom.faces.push(new THREE.Face3( fp + 1, fp + 5, fp + 3 ))
	geom.faces.push(new THREE.Face3( fp, fp + 2, fp + 4 ))
	
	// update number of points created
	fp = 2 + 2*number_of_folds + 6
	
	// fold detail (spillover)
	for (i = 0; i < number_of_folds; i++) {
		geom.vertices.push(new THREE.Vector3( i*fold_width, BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), BASE_HEIGHT, 0 ))
		
		geom.faces.push(new THREE.Face3( 2*i+1, fp+6*i, fp+6*i+2 ))
		geom.faces.push(new THREE.Face3( fp+6*i, fp+6*i+1, fp+6*i+2 ))
		geom.faces.push(new THREE.Face3( fp+6*i+1, 2*i+3, fp+6*i+2 ))
		
		geom.vertices.push(new THREE.Vector3( i*fold_width, 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), 0, 0 ))
		
		geom.faces.push(new THREE.Face3( 2*i+1, fp+6*i+5, fp+6*i+3 ))
		geom.faces.push(new THREE.Face3( fp+6*i+5, fp+6*i+4, fp+6*i+3 ))
		geom.faces.push(new THREE.Face3( fp+6*i+5, 2*i+2, fp+6*i+4 ))
	}
	
	return(geom)
}

function createDoorOutline(row, col, texture) {
	var geom = new THREE.Geometry();
	var doorOutlinePointsTop = []
	var doorOutlinePointsBottom = []
	
	geom.vertices.push(new THREE.Vector3( 0-OUTLINE_L_MARGIN, 0-OUTLINE_B_MARGIN, 0 ))
	geom.vertices.push(new THREE.Vector3( 0-OUTLINE_L_MARGIN, BASE_HEIGHT+OUTLINE_T_MARGIN, 0 ))
	geom.vertices.push(new THREE.Vector3( 0, 0-OUTLINE_B_MARGIN, 0 ))
	geom.vertices.push(new THREE.Vector3( 0, BASE_HEIGHT+OUTLINE_T_MARGIN, 0 ))
	
	geom.faces.push(new THREE.Face3( 0, 1, 3 ))
	geom.faces.push(new THREE.Face3( 0, 3, 2 ))
	
	geom.vertices.push(new THREE.Vector3( 0, 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
	geom.vertices.push(new THREE.Vector3( 0, BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
	var fp = 6
	
	doorOutlinePointsBottom.push(new THREE.Vector3( 0, 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
	doorOutlinePointsTop.push(new THREE.Vector3( 0, BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
	

	for (var i = 0; i < number_of_folds; i++) {
		
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), 0-OUTLINE_B_MARGIN, 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width), 0, 0 ))
		
		doorOutlinePointsBottom.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
		doorOutlinePointsBottom.push(new THREE.Vector3( ((i+1)*fold_width), 0, 0 ))
		
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), BASE_HEIGHT+OUTLINE_T_MARGIN, 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width), BASE_HEIGHT, 0 ))
		
		doorOutlinePointsTop.push(new THREE.Vector3( ((i+1)*fold_width) - (fold_triangle_width_fraction*fold_width), BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
		doorOutlinePointsTop.push(new THREE.Vector3( ((i+1)*fold_width), BASE_HEIGHT, 0 ))

		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width), 0-OUTLINE_B_MARGIN, 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width), BASE_HEIGHT+OUTLINE_T_MARGIN, 0 ))
		
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width), 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
		geom.vertices.push(new THREE.Vector3( ((i+1)*fold_width), BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
		
		if (i < number_of_folds-1) {
			doorOutlinePointsBottom.push(new THREE.Vector3( ((i+1)*fold_width), 0-(fold_height_fraction*BASE_HEIGHT), 0 ))
			doorOutlinePointsTop.push(new THREE.Vector3( ((i+1)*fold_width), BASE_HEIGHT+(fold_height_fraction*BASE_HEIGHT), 0 ))
		}
		
		var l = fp+10*i
		
		geom.faces.push(new THREE.Face3( l-2, l+1, l ))
		geom.faces.push(new THREE.Face3( l-4, l-2, l ))
		geom.faces.push(new THREE.Face3( l+1, l+8, l+6 ))
		geom.faces.push(new THREE.Face3( l, l+1, l+6 ))
		geom.faces.push(new THREE.Face3( l+1, l+2, l+8 ))
		
		geom.faces.push(new THREE.Face3( l-3, l+3, l+4 ))
		geom.faces.push(new THREE.Face3( l-1, l-3, l+4 ))
		geom.faces.push(new THREE.Face3( l+4, l+3, l+9 ))
		geom.faces.push(new THREE.Face3( l+9, l+3, l+7 ))
		geom.faces.push(new THREE.Face3( l+4, l+9, l+5 ))
		
	}
	
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 - (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 - tab_height_fraction*BASE_HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 - (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, 0-OUTLINE_B_MARGIN, 0 ))
	
	doorOutlinePointsBottom.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 - (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	doorOutlinePointsBottom.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 - tab_height_fraction*BASE_HEIGHT/2, 0 ))
	
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 + (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 + tab_height_fraction*BASE_HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 + (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT+OUTLINE_T_MARGIN, 0 ))
	
	doorOutlinePointsTop.push(new THREE.Vector3( BASE_WIDTH, BASE_HEIGHT/2 + (tab_height_fraction*BASE_HEIGHT/2 + tab_triangle_fraction*BASE_HEIGHT), 0 ))
	doorOutlinePointsTop.push(new THREE.Vector3( BASE_WIDTH + tab_width_fraction*BASE_WIDTH, BASE_HEIGHT/2 + tab_height_fraction*BASE_HEIGHT/2, 0 ))
	
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + OUTLINE_R_MARGIN, 0-OUTLINE_B_MARGIN, 0 ))
	geom.vertices.push(new THREE.Vector3( BASE_WIDTH + OUTLINE_R_MARGIN, BASE_HEIGHT+OUTLINE_T_MARGIN, 0 ))

	l = fp+10*number_of_folds
	
	geom.faces.push(new THREE.Face3( l, l+1, l+2 ))
	geom.faces.push(new THREE.Face3( l, l+3, l-4 ))
	geom.faces.push(new THREE.Face3( l, l+2, l+3 ))
	
	geom.faces.push(new THREE.Face3( l+4, l+6, l+5 ))
	geom.faces.push(new THREE.Face3( l-3, l+6, l+4 ))
	geom.faces.push(new THREE.Face3( l-3, l+7, l+6 ))
	
	geom.faces.push(new THREE.Face3( l+3, l+7, l+8 ))
	geom.faces.push(new THREE.Face3( l+8, l+7, l+9 ))
	
	var stagger = stagger_val*(col%2)
	var offset_position_x = -CALENDAR_WIDTH/2+1+(col*3)+OUTLINE_L_MARGIN
	var offset_position_y = CALENDAR_HEIGHT/2-((row+1)*3)+OUTLINE_B_MARGIN + stagger
	
	var uv_array
	var uv_x
	var uv_y
	var vertex_id
	var face
	for ( let face_id = 0; face_id < geom.faces.length; face_id ++ ) {
		face = geom.faces[face_id]
		uv_array = []
		// console.log(face)
		vertex_id = face.a
		uv_x = (CALENDAR_WIDTH/2 + (geom.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geom.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))
		vertex_id = face.b
		uv_x = (CALENDAR_WIDTH/2 + (geom.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geom.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))
		vertex_id = face.c
		uv_x = (CALENDAR_WIDTH/2 + (geom.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geom.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))

		// console.log(uv_array)
		geom.faceVertexUvs[0].push(uv_array)
	}
	
	const material_outline = new THREE.MeshBasicMaterial( { map: texture, wireframe: false, side: THREE.DoubleSide } );

	// const material_outline = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false, side: THREE.DoubleSide } );
	const mesh_outline = new THREE.Mesh( geom, material_outline );
	
	// var stagger = stagger_val*(col%2)
	mesh_outline.position.set(-CALENDAR_WIDTH/2+1+(col*3)+OUTLINE_L_MARGIN, CALENDAR_HEIGHT/2-((row+1)*3)+OUTLINE_B_MARGIN + stagger, 0)

	var doorOutlinePoints = doorOutlinePointsTop.concat(doorOutlinePointsBottom.reverse())
	
	const doorOutlineGeom = new THREE.BufferGeometry().setFromPoints( doorOutlinePoints );
	const doorOutlineMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
	const line = new THREE.Line( doorOutlineGeom, doorOutlineMaterial );
	
	line.position.set(-CALENDAR_WIDTH/2+1+(col*3)+OUTLINE_L_MARGIN, CALENDAR_HEIGHT/2-((row+1)*3)+OUTLINE_B_MARGIN + stagger, 0.001)

	return([mesh_outline, line])
}

function createDoorSkeleton() {
	
	var bones = []
	var bone = new THREE.Bone()
	bone.position.x = 0 
	bone.position.y = 0.5
	bones.push(bone)
	
	var prevBone = bone
	for (var i = 0; i < number_of_folds; i++) {
		bone = new THREE.Bone()
		bone.position.x = fold_width 
		//bone.position.y = 0.5
		bones.push(bone)
		prevBone.add( bone )
		prevBone = bone
		
	}
	
	bone = new THREE.Bone()
	bone.position.x = tab_width_fraction*BASE_WIDTH 
	//bone.position.y = 0.5
	bones.push(bone)
	prevBone.add( bone )
	
	const skeleton = new THREE.Skeleton( bones );
	
	return(skeleton)
}

function createDoor(row, col, texture_front) {
	const geometry = new createDoorMesh();
	
	var stagger = stagger_val*(col%2)
	var offset_position_x = -CALENDAR_WIDTH/2+1+(col*3)+OUTLINE_L_MARGIN
	var offset_position_y = CALENDAR_HEIGHT/2-((row+1)*3)+OUTLINE_B_MARGIN + stagger
	
	var uv_array
	var uv_x
	var uv_y
	var vertex_id
	var face
	for ( let face_id = 0; face_id < geometry.faces.length; face_id ++ ) {
		face = geometry.faces[face_id]
		uv_array = []
		// console.log(face)
		vertex_id = face.a
		uv_x = (CALENDAR_WIDTH/2 + (geometry.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geometry.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))
		vertex_id = face.b
		uv_x = (CALENDAR_WIDTH/2 + (geometry.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geometry.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))
		vertex_id = face.c
		uv_x = (CALENDAR_WIDTH/2 + (geometry.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geometry.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))

		// console.log(uv_array)
		geometry.faceVertexUvs[0].push(uv_array)
	}
	
	geometry.computeFaceNormals();	
	geometry.computeVertexNormals();
	geometry.uvsNeedUpdate = true
	
	var bufferGeometry = new THREE.BufferGeometry().fromGeometry( geometry );
	
	const position = bufferGeometry.attributes.position;

	const vertex = new THREE.Vector3();

	const skinIndices = [];
	const skinWeights = [];

	for ( let i = 0; i < position.count; i ++ ) {

		vertex.fromBufferAttribute( position, i );

		// compute skinIndex and skinWeight based on some configuration data
		const skinIndex = Math.floor( vertex.x / fold_width );
		// const skinWeight = ( x % fold_width ) / fold_width;
		const skinWeight = 0;

		skinIndices.push( skinIndex, skinIndex + 1, 0, 0 );
		skinWeights.push( 1 - skinWeight, skinWeight, 0, 0 );

	}

	bufferGeometry.setAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( skinIndices, 4 ) );
	bufferGeometry.setAttribute( 'skinWeight', new THREE.Float32BufferAttribute( skinWeights, 4 ) );
	
	
	const material_front = new THREE.MeshBasicMaterial( { map: texture_front, wireframe: false, side: THREE.BackSide, skinning: true } );
	// const material_front = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false, side: THREE.BackSide, skinning: true } );
	
	
	const material_back = new THREE.MeshBasicMaterial( { color: 0x333333, wireframe: false, side: THREE.FrontSide, skinning: true } );
	var meshFront = new THREE.SkinnedMesh( bufferGeometry, material_front)
	var meshBack = new THREE.SkinnedMesh( bufferGeometry, material_back)
	
	const skeleton = createDoorSkeleton();
	const rootBone = skeleton.bones[ 0 ];
	meshFront.add( rootBone );
	meshFront.bind( skeleton );
	meshBack.add( rootBone );
	meshBack.bind( skeleton );
	
	// skeleton.bones[0].rotation.y = -0.8;
	// skeleton.bones[1].rotation.y = -0.8;
	// skeleton.bones[2].rotation.y = -0.8;
	// skeleton.bones[3].rotation.y = -0.8;
	// skeleton.bones[4].rotation.y = -0.8;
	
	
	
	meshFront.position.set(offset_position_x, offset_position_y, 0)
	meshBack.position.set(offset_position_x, offset_position_y, 0)
	
	// console.log(meshFront)
	
	
	var meshPosition = [offset_position_x + BASE_WIDTH/2, offset_position_y + BASE_HEIGHT/2]
	return([meshFront, meshBack, meshPosition])
}


function createAdventFrontPanel(texture) {
	const WIDTH = CALENDAR_WIDTH
	const HEIGHT = CALENDAR_HEIGHT
	
	var geom = new THREE.Geometry();
	
	geom.vertices.push(new THREE.Vector3( 0-WIDTH/2, 0-HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( 0-WIDTH/2, 0+HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( 0+WIDTH/2, 0-HEIGHT/2, 0 ))
	geom.vertices.push(new THREE.Vector3( 0+WIDTH/2, 0+HEIGHT/2, 0 ))
	
	
	var door_points_lists = []
	var fp = 4
	var i
	var j
	for (i = 0; i < 6; i++) {
		for (j = 0; j < 4; j++) {
			
			var stagger = stagger_val*(j%2)
			
			geom.vertices.push(new THREE.Vector3(-WIDTH/2 + 1 + 3*j, HEIGHT/2 - 1 - 3*i + stagger, 0 ))
			geom.vertices.push(new THREE.Vector3(-WIDTH/2 + 1 + 3*j, HEIGHT/2 - 1 - 3*i - 2 + stagger, 0 ))
			geom.vertices.push(new THREE.Vector3(-WIDTH/2 + 1 + 3*j + 2, HEIGHT/2 - 1 - 3*i + stagger, 0 ))
			geom.vertices.push(new THREE.Vector3(-WIDTH/2 + 1 + 3*j + 2, HEIGHT/2 - 1 - 3*i - 2 + stagger, 0 ))
			
			door_points_lists.push([fp, fp+1, fp+2, fp+3])
			// geom.faces.push(new THREE.Face3( fp, fp+1, fp+2))
			// geom.faces.push(new THREE.Face3( fp+1, fp+3, fp+2))
			fp += 4
			
			
		}
	}
	
	// get array of vertices
	var positions = geom.vertices
	var positions_array = []
	for (i = 0; i < positions.length; i++) {
		var v = positions[i]
		positions_array.push([v.x, v.y]) 
	}
	
	
	var triangles = Delaunator.from(positions_array).triangles
	for (i = 0; i < triangles.length; i+=3) {
		var triangle = [triangles[i], triangles[i+1], triangles[i+2]]
		var add_face = true
		for (j = 0; j < door_points_lists.length; j++) {
			var door_points = door_points_lists[j]
			if (door_points.includes(triangle[0]) && door_points.includes(triangle[1]) && door_points.includes(triangle[2])) {
				add_face = false
			}
		}
		if (add_face) {
			geom.faces.push(new THREE.Face3( triangle[0], triangle[1], triangle[2]))
		}
	}
	
	var offset_position_x = 0
	var offset_position_y = 0
	var uv_array
	var uv_x
	var uv_y
	var vertex_id
	var face
	for ( let face_id = 0; face_id < geom.faces.length; face_id ++ ) {
		face = geom.faces[face_id]
		uv_array = []
		// console.log(face)
		vertex_id = face.a
		uv_x = (CALENDAR_WIDTH/2 + (geom.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geom.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))
		vertex_id = face.b
		uv_x = (CALENDAR_WIDTH/2 + (geom.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geom.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))
		vertex_id = face.c
		uv_x = (CALENDAR_WIDTH/2 + (geom.vertices[vertex_id].x + offset_position_x)) / CALENDAR_WIDTH
		uv_y = ((CALENDAR_HEIGHT/2 + (geom.vertices[vertex_id].y + offset_position_y)) / CALENDAR_HEIGHT)
		uv_array.push(new THREE.Vector2(uv_x, uv_y))

		// console.log(uv_array)
		geom.faceVertexUvs[0].push(uv_array)
	}
	geom.faceVertexUvs[1] = geom.faceVertexUvs[0] 

	const material = new THREE.MeshBasicMaterial( { map: texture, wireframe: false, side: THREE.DoubleSide } );
	// const material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false, side: THREE.DoubleSide } );
	const mesh = new THREE.Mesh( geom, material );
	
	return(mesh)
	
}

function getTabFaceIndexArray() {
	let fp = 2*number_of_folds
	return [fp, fp+1, fp+2, fp+3]
	
}




export {createDoor, createDoorOutline, createAdventFrontPanel, getTabFaceIndexArray}