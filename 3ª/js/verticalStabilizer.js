'use strict';

class VerticalStabilizer extends THREE.Object3D{

	constructor(x, y, z){
                super();		


		this.geometry = new THREE.Geometry(); 
                this.geometry.vertices.push(
                        new THREE.Vector3(-55, 14, 3),
                        new THREE.Vector3(-75, 14, 3),
                        new THREE.Vector3(-55, 30, 3),
                        
                        new THREE.Vector3(-55, 14, 5),
                        new THREE.Vector3(-75, 14, 5),
                        new THREE.Vector3(-55, 30, 5),
                        
                        new THREE.Vector3(60, -4, -16),
                        new THREE.Vector3(-60, 2, -8));
                
                //Front Face
                this.geometry.faces.push(new THREE.Face3(0, 1, 2));
                this.geometry.faces.push(new THREE.Face3(3, 4, 5));

                //Back Face
                this.geometry.faces.push(new THREE.Face3(0, 3, 2));
                //this.geometry.faces.push(new THREE.Face3(7, 6, 4));

                /*//Top Face
                this.geometry.faces.push(new THREE.Face3(3, 2, 6));
                this.geometry.faces.push(new THREE.Face3(3, 6, 7));

                //Bottom Face
                this.geometry.faces.push(new THREE.Face3(0, 4, 5));
                this.geometry.faces.push(new THREE.Face3(0, 5, 1));

                //Right Face
                this.geometry.faces.push(new THREE.Face3(1, 5, 6));
                this.geometry.faces.push(new THREE.Face3(1, 6, 2));

                //Left Face
                this.geometry.faces.push(new THREE.Face3(0, 3, 7));
                this.geometry.faces.push(new THREE.Face3(0, 7, 4));*/

                this.geometry.computeFaceNormals();

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(x, y, z);
                scene.add(this.mesh1);
	}
}