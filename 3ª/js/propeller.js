'use strict';

class Propeller extends THREE.Object3D{

	constructor(x, y, z){
                super();		


                this.geometry = new THREE.ConeGeometry(3, 15, 16);

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(80, 14, z);		

                this.mesh1.rotation.z = -Math.PI/2;
                scene.add(this.mesh1);
	}
}