'use strict';

class WingLeft extends THREE.Object3D{

	constructor(x, y, z){
                super();		


		this.geometry = new THREE.Geometry(); 
                this.geometry.vertices.push(
                        new THREE.Vector3(49, 0, 8),
                        new THREE.Vector3(69, 0, 8),
                        new THREE.Vector3(39, 0, 72),
                        new THREE.Vector3(49, 0, 72),
                        new THREE.Vector3(49, -2, 72),
                        new THREE.Vector3(39, -2, 72));
                
                
                

                this.geometry.faces.push(new THREE.Face3(0, 1, 2));
                this.geometry.faces.push(new THREE.Face3(2, 3, 1));
                this.geometry.faces.push(new THREE.Face3(3, 2, 4));
                this.geometry.faces.push(new THREE.Face3(3, 2, 5));

                this.geometry.computeFaceNormals();

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(-60, y, z);
                scene.add(this.mesh1);
	}
}