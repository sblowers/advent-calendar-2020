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
	
const DArrayRemove = function(item, array) {
        var arr = array.slice(); // clone
        var index = arr.indexOf(item);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

function ExplosionConfetti(options){
	// default
	var _options = {
		amount: 10,
		rate: 2,
		radius: 600,
		areaWidth: 500,
		areaHeight: 500,
		fallingHeight: 500,
		fallingSpeed: 1,
		colors: [0xffffff, 0xff0000, 0xffff00]
	};
	if(options) _options = objectMerge(options, _options);

	var scope = this;
	scope.options = _options;
	scope.particles = [];
	scope.booms = [];
	scope.options.rate = scope.options.rate / 100;
	if(scope.options.rate > 0.2) scope.options.rate = 0.2;

	this.object = new THREE.Object3D();

	var geometry = new THREE.PlaneBufferGeometry(1, 1);
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );

	this.init = function(){
		// setInterval(scope.explode, 1000);
	};

	this.explode = function(){
		// console.log("explode");
		var boom = new THREE.Object3D();
		boom.life = Math.DrandomFromTo(500, 500);
		boom.position.x = -(scope.options.areaWidth/2) + scope.options.areaWidth * Math.random();
		boom.position.y = scope.options.fallingHeight + Math.DrandomPlusMinus(100);
		boom.position.z = -(scope.options.areaWidth/2) + scope.options.areaWidth * Math.random();
		scope.object.add(boom);

		scope.booms.push(boom);

		for(var i=0; i<scope.options.amount; i++){
			var material = new THREE.MeshBasicMaterial( {color: getRandom(scope.options.colors), transparent: true, side: THREE.DoubleSide} );
			var particle = new THREE.Mesh( geometry, material );
			boom.add( particle );

			particle.life = 1;

			particle.destination = {};
			particle.destination.x = ( Math.random() - 0.5) * (scope.options.radius*2) * Math.random();
			particle.destination.y = ( Math.random() - 0.5) * (scope.options.radius*2) * Math.random();
			particle.destination.z = ( Math.random() - 0.5) * (scope.options.radius*2) * Math.random();

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

		boom.dispose = () => {
			console.log(boom)
			for(var i=0; i < boom.children.length; i++){
				var particle = boom.children[i];
				particle.material.dispose();
				particle.geometry.dispose();
				boom.remove( particle );
				particle = null;
			}
			boom.parent.remove( boom );
			boom = null;
		};
	};

	this.update = function(){
		if(Math.random() < scope.options.rate) scope.explode();

		var particleAmount = 0;
		for(var i=0; i < scope.booms.length; i++){
			var boom = scope.booms[i];
			
			for(var k=0; k < boom.children.length; k++){
				var particle = boom.children[k];

				particle.destination.y -= Math.DrandomFromTo(3,6);
				particle.life -= Math.DrandomFromTo(0.005, 0.01);

				var speedX = (particle.destination.x - particle.position.x) / 80;
				var speedY = (particle.destination.y - particle.position.y) / 80;
				var speedZ = (particle.destination.z - particle.position.z) / 80;

				particle.position.x += speedX;
				particle.position.y += speedY;
				particle.position.z += speedZ;

				particle.rotation.y += particle.rotateSpeedY;
				particle.rotation.x += particle.rotateSpeedX;
				particle.rotation.z += particle.rotateSpeedZ;

				// particle.material.opacity -= Math.DrandomFromTo(0.005, 0.01);

				if(particle.position.y < -scope.options.fallingHeight){
					particle.material.dispose();
					particle.geometry.dispose();
					boom.remove(particle);
					particle = null;
				}
			}

			if(boom.children.length <= 10){
				boom.dispose();
				scope.booms = DArrayRemove(boom, scope.booms);
			}

			particleAmount += boom.children.length;
		}

		// document.getElementById("particleCount").innerHTML = particleAmount;
	};

	this.dispose = function(){
		for(var i=0; i<scope.particles.length; i++){
			var particle = scope.particles[i];
			particle.material.dispose();
			particle.geometry.dispose();
			scope.object.remove( particle );
			particle = null;
		}
		scope.object.parent.remove( scope.object );
		scope.object = null;
		scope.update = function(){};
	};

	return this;
}
export default ExplosionConfetti