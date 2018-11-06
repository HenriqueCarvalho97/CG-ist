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
                        new THREE.Vector3(39, -2, 72),
                        new THREE.Vector3(69, -2, 8),
                        new THREE.Vector3(49, -2, 8));
                
                
                
                //Top Face         
                this.geometry.faces.push(new THREE.Face3(2, 3, 1));
                this.geometry.faces.push(new THREE.Face3(0, 1, 2));

                //Bottom Face
                this.geometry.faces.push(new THREE.Face3(5, 4, 6));
                this.geometry.faces.push(new THREE.Face3(6, 7, 4));

                //Left Face
                this.geometry.faces.push(new THREE.Face3(2, 3, 5));
                this.geometry.faces.push(new THREE.Face3(3, 5, 4));

                //Right Face
                this.geometry.faces.push(new THREE.Face3(0, 1, 6));
                this.geometry.faces.push(new THREE.Face3(0, 7, 6));

                //Side1
                this.geometry.faces.push(new THREE.Face3(3, 4, 6));
                this.geometry.faces.push(new THREE.Face3(1, 3, 6));

                //Side2
                this.geometry.faces.push(new THREE.Face3(2, 0, 7));
                this.geometry.faces.push(new THREE.Face3(2, 7, 5));
                
                this.geometry.computeFaceNormals();

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(-60, 10, z);
                scene.add(this.mesh1);
	}
}