
// explosion confetti from https://github.com/mrgoonie/three.confetti.explosion.js/blob/master/src/three.confetti.explode.js
import * as THREE from 'three'; 

Math.Drandom = function(number) {
	return number * Math.random();
}

Math.DrandomFromTo = function(from, to) {
	return from + (Math.random() * (to - from))
}

Math.DrandomPlusMinus = function(val) {
	// return val*(Math.random() < 0.5 ? -1 : 1)
	// return val*2*(Math.random()-0.5)
	return val * (Math.random() - Math.random());
}

const getRandom = function(array) {
	return array[Math.floor( Math.random() * array.length)]
}

const objectMerge = function(object, toObject){
	var obj = JSON.parse(JSON.stringify(toObject))
	for(var key in object){
		var val = object[key];
		obj[key] = val;
	}
	return obj;
}


function ExplosionConfetti(options, position, rotation){

	var _options = {
		amount: 150,
		size: 0.02,
		radius: 300,
		areaWidth: 10,
		areaHeight: 10,
		fallingHeight: 3,
		fallingSpeed: 0.01,
		colors: [0xCE1713, 0xD5B534, 0x0F7833]
	};
	if(options) {options = objectMerge(options, _options)}
	else {options = _options};
	
	
	var boom = new THREE.Object3D();
	boom.life = Math.DrandomFromTo(500, 500);
	// boom.position.x = -(options.areaWidth/2) + areaWidth * Math.random();
	// boom.position.y = options.fallingHeight + Math.DrandomPlusMinus(0.2*areaHeight);
	// boom.position.z = -(options.areaWidth/2) + options.areaWidth * Math.random();
	boom.position.set(position.x, position.y, position.z)
	boom.rotation.set(rotation.x, rotation.y, rotation.z)

	
	for(var i=0; i<options.amount; i++){
		var geometry = new THREE.PlaneBufferGeometry(options.size, options.size);
		var material = new THREE.MeshBasicMaterial( {color: getRandom(options.colors), transparent: true, side: THREE.DoubleSide} );
		var particle = new THREE.Mesh( geometry, material );
		boom.add( particle );

		particle.life = 1;
		
		particle.position.set(0,0,0)

		particle.destination = {};
		particle.destination.x = ( Math.random() - 0.5) * (options.radius*2) * Math.random();
		particle.destination.y = ( Math.random() - 0.5) * (options.radius*2) * Math.random();
		particle.destination.z = ( Math.random() - 0.5) * (options.radius*2) * Math.random();

		particle.rotation.x = Math.Drandom(360);
		particle.rotation.y = Math.Drandom(360);
		particle.rotation.z = Math.Drandom(360);

		var size = Math.DrandomFromTo(2, 5);
		particle.scale.x = size;
		particle.scale.y = size;

		particle.rotateSpeedX = Math.DrandomPlusMinus(0.4);
		particle.rotateSpeedY = Math.DrandomPlusMinus(0.4);
		particle.rotateSpeedZ = Math.DrandomPlusMinus(0.4);
	}
	
	boom.dispose = function() {
		if (boom) {
			boom.position.set(0,0,0)
			for(var i=0; i < boom.children.length; i++){
				var particle = boom.children[i];
				particle.material.dispose();
				particle.geometry.dispose();
				boom.remove( particle );
				particle = null;
			}
			
			boom.parent.remove( boom );
			boom = null;
		}
	};
	
	boom.update = () => {
		
		if (boom) {
			for(var k=0; k < boom.children.length; k++){
				var particle = boom.children[k];

				particle.destination.y -= Math.DrandomFromTo(3,6);
				particle.life -= Math.DrandomFromTo(0.005, 0.01);

				var speedX = options.fallingSpeed * (particle.destination.x - particle.position.x) / 80;
				var speedY = 0.5*options.fallingSpeed * (particle.destination.y - particle.position.y) / 80;
				var speedZ = options.fallingSpeed * (particle.destination.z - particle.position.z) / 80;

				particle.position.x += speedX;
				particle.position.y += speedY;
				particle.position.z += speedZ;

				particle.rotation.y += particle.rotateSpeedY;
				particle.rotation.x += particle.rotateSpeedX;
				particle.rotation.z += particle.rotateSpeedZ;

				// particle.material.opacity -= Math.DrandomFromTo(0.005, 0.01);

				if(particle.position.y < -options.fallingHeight){
					particle.material.dispose();
					particle.geometry.dispose();
					boom.remove(particle);
					particle = null;
				}
			}

			if(boom.children.length <= 10){
				boom.dispose();
			}
			
		}

		// document.getElementById("particleCount").innerHTML = particleAmount;
	};
	
	return boom



}

export default ExplosionConfetti