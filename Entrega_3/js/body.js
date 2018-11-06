'use strict';

class Body extends THREE.Object3D{

	constructor(x, y, z){
            super();		

			this.geometry = new THREE.Geometry();
            this.geometry.vertices.push(new THREE.Vector3(-48, -16, 12));
            this.geometry.vertices.push(new THREE.Vector3(-48, -16, 0));
            this.geometry.vertices.push(new THREE.Vector3(-48, -16, -12));
            this.geometry.vertices.push(new THREE.Vector3(-48, 0, 12));
            this.geometry.vertices.push(new THREE.Vector3(-48, 0, 0));
            this.geometry.vertices.push(new THREE.Vector3(-48, 0, -12));
            this.geometry.vertices.push(new THREE.Vector3(-48, 16, 12));
            this.geometry.vertices.push(new THREE.Vector3(-48, 16, 0));
            this.geometry.vertices.push(new THREE.Vector3(-48, 16, -12));

            this.geometry.faces.push(new THREE.Face3(0, 1, 4));
            this.geometry.faces.push(new THREE.Face3(0, 4, 3));
            this.geometry.faces.push(new THREE.Face3(1, 2, 4));
            this.geometry.faces.push(new THREE.Face3(2, 5, 4));
            this.geometry.faces.push(new THREE.Face3(3, 4, 6));
            this.geometry.faces.push(new THREE.Face3(4, 7, 6));
            this.geometry.faces.push(new THREE.Face3(4, 8, 7));
            this.geometry.faces.push(new THREE.Face3(5, 8, 4));

            this.geometry.vertices.push(new THREE.Vector3(0, -16, 12));
            this.geometry.vertices.push(new THREE.Vector3(0, -16, 0));
            this.geometry.vertices.push(new THREE.Vector3(0, -16, -12));
            this.geometry.vertices.push(new THREE.Vector3(48, -16, 12));
            this.geometry.vertices.push(new THREE.Vector3(48, -16, 0));
            this.geometry.vertices.push(new THREE.Vector3(48, -16, -12));

            this.geometry.faces.push(new THREE.Face3(0, 10, 1));
            this.geometry.faces.push(new THREE.Face3(0, 9, 10));
            this.geometry.faces.push(new THREE.Face3(1, 10, 2));
            this.geometry.faces.push(new THREE.Face3(10, 11, 2));
            this.geometry.faces.push(new THREE.Face3(9, 12, 10));
            this.geometry.faces.push(new THREE.Face3(10, 12, 13));
            this.geometry.faces.push(new THREE.Face3(10, 13, 14));
            this.geometry.faces.push(new THREE.Face3(14, 11, 10));

            this.geometry.vertices.push(new THREE.Vector3(0, 0, -12));

            this.geometry.faces.push(new THREE.Face3(8, 5, 15));
            this.geometry.faces.push(new THREE.Face3(5, 2, 15));
            this.geometry.faces.push(new THREE.Face3(2, 11, 15));
            this.geometry.faces.push(new THREE.Face3(14, 15, 11));

            this.geometry.vertices.push(new THREE.Vector3(0, 0, 12));

            this.geometry.faces.push(new THREE.Face3(0, 9, 16));
            this.geometry.faces.push(new THREE.Face3(0, 16, 3));
            this.geometry.faces.push(new THREE.Face3(3, 16, 6));
            this.geometry.faces.push(new THREE.Face3(9, 12, 16));

            this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));

            this.geometry.faces.push(new THREE.Face3(17, 6, 16));
            this.geometry.faces.push(new THREE.Face3(17, 7, 6));
            this.geometry.faces.push(new THREE.Face3(17, 7, 8));
            this.geometry.faces.push(new THREE.Face3(17, 15, 8));
            this.geometry.faces.push(new THREE.Face3(17, 15, 14));
            this.geometry.faces.push(new THREE.Face3(17, 13, 14));
            this.geometry.faces.push(new THREE.Face3(17, 13, 12));
            this.geometry.faces.push(new THREE.Face3(17, 16, 12));


            this.geometry.computeFaceNormals();

            this.material = new THREE.MeshLambertMaterial({ color: 0x00ffff, side: THREE.DoubleSide});

            this.mesh1 = new THREE.Mesh(this.geometry, this.material);
            this.mesh1.position.set(x,y,z);
            scene.add(this.mesh1);
	}

	rotateLeft(){
	    this.mesh1.rotation.x += 0.1;
    }

}