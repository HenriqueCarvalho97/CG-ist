'use strict';

class Front extends THREE.Object3D{

	constructor(x, y, z){
                super();		


                this.geometry = new THREE.CylinderGeometry(18, 18, 32, 16, 1, false, 0, Math.PI/2);

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(60, 20, z);		

                this.mesh1.rotation.y = Math.PI/2;
                this.mesh1.rotation.z = -Math.PI/4;
                this.mesh1.rotation.x = -Math.PI/4;
                scene.add(this.mesh1);
	}
}