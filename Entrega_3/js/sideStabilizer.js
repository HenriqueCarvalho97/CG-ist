'use strict';

class SideStabilizer extends THREE.Object3D{

	constructor(x, y, z){
                super();
        this.geometry = new THREE.Geometry();

        this.geometry.vertices.push(new THREE.Vector3(-48, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-48, -5, 30));
        this.geometry.vertices.push(new THREE.Vector3(-44, -5, 30));
        this.geometry.vertices.push(new THREE.Vector3(-44, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-40, -5, 0));
        this.geometry.vertices.push(new THREE.Vector3(-48, -5, -30));
        this.geometry.vertices.push(new THREE.Vector3(-44, -5, -30));

        this.geometry.vertices.push(new THREE.Vector3(-48, -3, 30));
        this.geometry.vertices.push(new THREE.Vector3(-44, -3, 30));
        this.geometry.vertices.push(new THREE.Vector3(-48, -3, 0));
        this.geometry.vertices.push(new THREE.Vector3(-44, -3, 0));
        this.geometry.vertices.push(new THREE.Vector3(-48, -3, -30));
        this.geometry.vertices.push(new THREE.Vector3(-44, -3, -30));

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

        this.material = new THREE.MeshLambertMaterial({ color: 0xffff00, side: THREE.DoubleSide });

        this.mesh1 = new THREE.Mesh(this.geometry, this.material);
        this.mesh1.position.set(x, y, z);


        scene.add(this.mesh1);
	}

    rotateLeft(){
        this.mesh1.rotation.x += 0.1;
    }
}