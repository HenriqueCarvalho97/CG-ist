'use strict';

class RightStabilizer extends THREE.Object3D{

	constructor(x, y, z){
                super();		


		this.geometry = new THREE.Geometry(); 
                this.geometry.vertices.push(
                        new THREE.Vector3(-55, 4, 3),
                        new THREE.Vector3(-70, 4, 3),
                        new THREE.Vector3(-55, 60, 3),
                        
                        new THREE.Vector3(-55, 4, 5),
                        new THREE.Vector3(-70, 4, 5),
                        new THREE.Vector3(-55, 60, 5));
                
                //Front Face
                this.geometry.faces.push(new THREE.Face3(0, 1, 2));
                this.geometry.faces.push(new THREE.Face3(3, 4, 5));

                //Back Face
                this.geometry.faces.push(new THREE.Face3(0, 3, 2));
                this.geometry.faces.push(new THREE.Face3(2, 5, 3));

                //Top Face
                this.geometry.faces.push(new THREE.Face3(2, 5, 1));
                this.geometry.faces.push(new THREE.Face3(5, 1, 4));

                //Bottom Face
                this.geometry.faces.push(new THREE.Face3(4, 1, 0));
                this.geometry.faces.push(new THREE.Face3(4, 3, 0));


                this.geometry.computeFaceNormals();

                this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

                this.mesh1 = new THREE.Mesh(this.geometry, this.material);
                this.mesh1.position.set(x, 27, -4);
                
                this.mesh1.rotation.x = Math.PI/2;


                scene.add(this.mesh1);
	}
}