'use strict';

class Wing extends THREE.Object3D{

	constructor(x, y, z){
	    super();

		this.geometry = new THREE.Geometry();

        // this.geometry.vertices.push(new THREE.Vector3(-15, -5, 60));
        // this.geometry.vertices.push(new THREE.Vector3(-15, -5, -60));
        // this.geometry.vertices.push(new THREE.Vector3(0, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-20, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-20, -5, 60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -5, 60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(0, -5, 0));



        this.geometry.faces.push(new THREE.Face3(2, 1, 0));
        this.geometry.faces.push(new THREE.Face3(2, 3, 0));
        this.geometry.faces.push(new THREE.Face3(4, 3, 2));
        // this.geometry.faces.push(new THREE.Face3(0, 2, 3));

        this.geometry.computeFaceNormals();

        this.material = new THREE.MeshLambertMaterial({ color: 0x00ffff, side: THREE.DoubleSide});

        this.mesh1 = new THREE.Mesh(this.geometry, this.material);
        this.mesh1.position.set(x, y, z);
        scene.add(this.mesh1);
	}

    rotateLeft(){
        this.mesh1.rotation.x += 0.1;
    }

}