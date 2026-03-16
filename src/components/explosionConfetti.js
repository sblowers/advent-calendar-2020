import * as THREE from 'three';

const DEFAULTS = {
	amount: 150,
	size: 0.02,
	radius: 300,
	fallingHeight: 3,
	fallingSpeed: 0.01,
	colors: [0xCE1713, 0xD5B534, 0x0F7833],
};

// Single shared geometry; each particle's size is controlled via scale
const _sharedGeometry = new THREE.PlaneGeometry(1, 1);

class ExplosionConfetti extends THREE.Object3D {
	constructor(options, position, rotation) {
		super();

		this._opts = Object.assign({}, DEFAULTS, options);
		this._particles = [];

		this.position.copy(position);
		this.rotation.set(rotation.x, rotation.y, rotation.z);

		this._build();
	}

	_build() {
		const { amount, size, radius, colors } = this._opts;

		for (let i = 0; i < amount; i++) {
			const color = colors[Math.floor(Math.random() * colors.length)];
			const material = new THREE.MeshBasicMaterial({
				color,
				transparent: true,
				depthWrite: false,
				side: THREE.DoubleSide,
			});
			const mesh = new THREE.Mesh(_sharedGeometry, material);

			// Scale the shared 1×1 plane to match the original size × random factor
			const s = size * (2 + Math.random() * 3); // 0.04 – 0.10 scene units
			mesh.scale.set(s, s, 1);

			mesh.rotation.set(
				Math.random() * Math.PI * 2,
				Math.random() * Math.PI * 2,
				Math.random() * Math.PI * 2,
			);

			this.add(mesh);

			this._particles.push({
				mesh,
				destination: {
					x: (Math.random() - 0.5) * radius * 2 * Math.random(),
					y: (Math.random() - 0.5) * radius * 2 * Math.random(),
					z: (Math.random() - 0.5) * radius * 2 * Math.random(),
				},
				rotateSpeed: {
					x: (Math.random() - Math.random()) * 0.4,
					y: (Math.random() - Math.random()) * 0.4,
					z: (Math.random() - Math.random()) * 0.4,
				},
			});
		}
	}

	update() {
		if (this._particles.length === 0) return;

		const { fallingSpeed, fallingHeight } = this._opts;
		const dead = [];

		for (const p of this._particles) {
			// Pull destination downward each frame to create gravity-like fall
			p.destination.y -= 3 + Math.random() * 3;

			const pos = p.mesh.position;
			pos.x += fallingSpeed * (p.destination.x - pos.x) / 80;
			pos.y += 0.5 * fallingSpeed * (p.destination.y - pos.y) / 80;
			pos.z += fallingSpeed * (p.destination.z - pos.z) / 80;

			p.mesh.rotation.x += p.rotateSpeed.x;
			p.mesh.rotation.y += p.rotateSpeed.y;
			p.mesh.rotation.z += p.rotateSpeed.z;

			if (pos.y < -fallingHeight) {
				dead.push(p);
			}
		}

		// Remove dead particles without mutating the array while iterating
		for (const p of dead) {
			p.mesh.material.dispose();
			this.remove(p.mesh);
		}
		this._particles = this._particles.filter(p => !dead.includes(p));

		if (this._particles.length <= 10) {
			this._cleanup();
		}
	}

	_cleanup() {
		for (const p of this._particles) {
			p.mesh.material.dispose();
			this.remove(p.mesh);
		}
		this._particles = [];

		if (this.parent) {
			this.parent.remove(this);
		}
	}
}

export default ExplosionConfetti;
