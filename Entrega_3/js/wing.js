'use strict';

class Wing extends AirplaneComponent{

	constructor(x, y, z){
	    super();

		this.geometry = new THREE.Geometry();

        this.geometry.vertices.push(new THREE.Vector3(-20, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-20, -5, 60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -5, 60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(0, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-20, -5, -60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -5, -60));

        this.geometry.vertices.push(new THREE.Vector3(-20, -3, 60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -3, 60));
        this.geometry.vertices.push(new THREE.Vector3(-20, -3, 0));
        this.geometry.vertices.push(new THREE.Vector3(-16, -3, 0));
        this.geometry.vertices.push(new THREE.Vector3(-20, -3, -60));
        this.geometry.vertices.push(new THREE.Vector3(-16, -3, -60));

        this.geometry.faces.push(new THREE.Face3(2, 1, 0));
        this.geometry.faces.push(new THREE.Face3(2, 3, 0));
        this.geometry.faces.push(new THREE.Face3(4, 3, 2));
        this.geometry.faces.push(new THREE.Face3(0, 5, 6));
        this.geometry.faces.push(new THREE.Face3(0, 3, 6));
        this.geometry.faces.push(new THREE.Face3(6, 3, 4));

        this.geometry.faces.push(new THREE.Face3(1, 2, 7));
        this.geometry.faces.push(new THREE.Face3(8, 2, 7));
        this.geometry.faces.push(new THREE.Face3(9, 0, 7));
        this.geometry.faces.push(new THREE.Face3(1, 0, 7));
        this.geometry.faces.push(new THREE.Face3(7, 8, 9));
        this.geometry.faces.push(new THREE.Face3(10, 8, 9));
        this.geometry.faces.push(new THREE.Face3(10, 8, 4));
        this.geometry.faces.push(new THREE.Face3(8, 2, 4));
        this.geometry.faces.push(new THREE.Face3(5, 6, 11));
        this.geometry.faces.push(new THREE.Face3(12, 6, 11));
        this.geometry.faces.push(new THREE.Face3(11, 5, 0));
        this.geometry.faces.push(new THREE.Face3(11, 9, 0));
        this.geometry.faces.push(new THREE.Face3(11, 9, 12));
        this.geometry.faces.push(new THREE.Face3(9, 10, 12));
        this.geometry.faces.push(new THREE.Face3(4, 10, 12));
        this.geometry.faces.push(new THREE.Face3(4, 6, 12));

        this.geometry.computeFaceNormals();

        this.material = new THREE.MeshLambertMaterial({ color: 0xff00ff, side: THREE.DoubleSide});

        this.mesh1 = new THREE.Mesh(this.geometry, this.material);
        this.mesh1.position.set(x, y, z);
        scene.add(this.mesh1);
	}

}