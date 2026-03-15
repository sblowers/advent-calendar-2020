import * as THREE from 'three';
import snowflake from '../images/snowflake.png'


const snowflake_texture = new THREE.TextureLoader().load(snowflake)

const particleNum = 5000;
const maxRange = 1000;
const minRange = maxRange / 2;

// Build BufferGeometry with random positions (THREE.Geometry removed in r133)
const positionsArray = new Float32Array(particleNum * 3);
for (let i = 0; i < particleNum; i++) {
	positionsArray[i * 3]     = Math.floor(Math.random() * maxRange - minRange);
	positionsArray[i * 3 + 1] = Math.floor(Math.random() * maxRange - minRange);
	positionsArray[i * 3 + 2] = Math.floor(Math.random() * maxRange - minRange);
}

const pointGeometry = new THREE.BufferGeometry();
pointGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));

const pointMaterial = new THREE.PointsMaterial({
	size: 8,
	color: 0xffffff,
	vertexColors: false,
	map: snowflake_texture,
	transparent: true,
	fog: true,
	depthWrite: false
});

// Velocities stored at module level (one per particle)
const velocities = [];
for (let i = 0; i < particleNum; i++) {
	const x = Math.floor(Math.random() * 6 - 3) * 0.1;
	const y = Math.floor(Math.random() * 10 + 3) * - 0.05;
	const z = Math.floor(Math.random() * 6 - 3) * 0.1;
	velocities.push(new THREE.Vector3(x, y, z));
}

var snowEffectParticles = new THREE.Points(pointGeometry, pointMaterial);


function updateSnowEffectParticles(particles, timeStamp) {

	const posAttr = particles.geometry.attributes.position;

	for (let i = 0; i < particleNum; i++) {
		const velocity = velocities[i];

		const velX = Math.sin(timeStamp * 0.001 * velocity.x) * 0.1;
		const velZ = Math.cos(timeStamp * 0.0015 * velocity.z) * 0.1;

		let y = posAttr.getY(i) + velocity.y;
		if (y < -minRange) {
			y = minRange;
		}

		posAttr.setX(i, posAttr.getX(i) + velX);
		posAttr.setY(i, y);
		posAttr.setZ(i, posAttr.getZ(i) + velZ);
	}

	posAttr.needsUpdate = true;
}


export {snowEffectParticles, updateSnowEffectParticles}
