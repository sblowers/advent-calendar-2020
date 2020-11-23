import * as THREE from 'three';
import snowflake from '../images/snowflake.png'


const snowflake_texture = new THREE.TextureLoader().load(snowflake)

const particleNum = 5000;
const maxRange = 1000;
const minRange = maxRange / 2;
const textureSize = 8.0;

const drawRadialGradation = (ctx, canvasRadius, canvasW, canvasH) => {
    ctx.save();
    const gradient = ctx.createRadialGradient(canvasRadius,canvasRadius,0,canvasRadius,canvasRadius,canvasRadius);
    gradient.addColorStop(0, 'rgba(255,255,255,1.0)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvasW,canvasH);
    ctx.restore();
}

const getTexture = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const diameter = textureSize;
    canvas.width = diameter;
    canvas.height = diameter;
    const canvasRadius = diameter / 2;

    /* gradation circle
    ------------------------ */
    drawRadialGradation(ctx, canvasRadius, canvas.width, canvas.height);
    
    /* snow crystal
    ------------------------ */
    // drawSnowCrystal(ctx, canvasRadius);

    const texture = new THREE.Texture(canvas);
    //texture.minFilter = THREE.NearestFilter;
    // texture.type = THREE.FloatType;
	texture.type = THREE.RGBAFormat
    texture.needsUpdate = true;
    return texture;
}

const pointGeometry = new THREE.Geometry();
for (let i = 0; i < particleNum; i++) {
	const x = Math.floor(Math.random() * maxRange - minRange);
	const y = Math.floor(Math.random() * maxRange - minRange);
	const z = Math.floor(Math.random() * maxRange - minRange);
	const particle = new THREE.Vector3(x, y, z);
	pointGeometry.vertices.push(particle);
	// const color = new THREE.Color(0xffffff);
	// pointGeometry.colors.push(color);
}

const pointMaterial = new THREE.PointsMaterial({
	size: 8,
	color: 0xffffff,
	vertexColors: false,
	map: snowflake_texture,
	// map: getTexture(),
	// blending: THREE.AdditiveBlending,
	transparent: true,
	// opacity: 0.8,
	fog: true,
	depthWrite: false
});

const velocities = [];
for (let i = 0; i < particleNum; i++) {
	const x = Math.floor(Math.random() * 6 - 3) * 0.1;
	const y = Math.floor(Math.random() * 10 + 3) * - 0.05;
	const z = Math.floor(Math.random() * 6 - 3) * 0.1;
	const particle = new THREE.Vector3(x, y, z);
	velocities.push(particle);
}

var snowEffectParticles = new THREE.Points(pointGeometry, pointMaterial);
snowEffectParticles.geometry.velocities = velocities;


function updateSnowEffectParticles(particles, timeStamp) {

	const posArr = particles.geometry.vertices;
    const velArr = particles.geometry.velocities;

    posArr.forEach((vertex, i) => {
        const velocity = velArr[i];

        // const x = i * 3;
        // const y = i * 3 + 1;
        // const z = i * 3 + 2;
        
        const velX = Math.sin(timeStamp * 0.001 * velocity.x) * 0.1;
        const velZ = Math.cos(timeStamp * 0.0015 * velocity.z) * 0.1;
        
        vertex.x += velX;
        vertex.y += velocity.y;
        vertex.z += velZ;

        if (vertex.y < -minRange ) {
            vertex.y = minRange;
        }

    })

    particles.geometry.verticesNeedUpdate = true;
}


export {snowEffectParticles, updateSnowEffectParticles}

