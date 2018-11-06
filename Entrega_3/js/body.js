'use strict';

class Body extends THREE.Object3D{

	constructor(x, y, z){
            super();		


			this.geometry = new THREE.Geometry(); 
            this.geometry.vertices.push(
                        new THREE.Vector3(-60, -4, 30),
                        new THREE.Vector3(60, -4, 30),
                        new THREE.Vector3(60, -4, -30),
                        new THREE.Vector3(-60, -4, -30),

                        new THREE.Vector3(-60, 50, 30),
                        new THREE.Vector3(60, -4, 30),
                        new THREE.Vector3(60, -4, -30),
                        new THREE.Vector3(-60, 50, -30));
                
                //Front Face
                this.geometry.faces.push(new THREE.Face3(0, 1, 2));
                this.geometry.faces.push(new THREE.Face3(0, 2, 3));

                //Back Face
                this.geometry.faces.push(new THREE.Face3(4, 6, 5));
                this.geometry.faces.push(new THREE.Face3(7, 6, 4));

                //Top Face
                this.geometry.faces.push(new THREE.Face3(7, 3, 0));
                this.geometry.faces.push(new THREE.Face3(7, 4, 0));

                //Bottom Face
                /*this.geometry.faces.push(new THREE.Face3(0, 4, 5));
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