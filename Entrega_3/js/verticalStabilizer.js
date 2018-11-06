'use strict';

class VerticalStabilizer extends AirplaneComponent{

	constructor(x, y, z){
                super();		


		this.geometry = new THREE.Geometry();

        this.geometry.vertices.push(new THREE.Vector3(-48, 10, -1));
        this.geometry.vertices.push(new THREE.Vector3(-48, 32, -1));
        this.geometry.vertices.push(new THREE.Vector3(-44, 10, -1));
        this.geometry.vertices.push(new THREE.Vector3(-44, 32, -1));

        this.geometry.vertices.push(new THREE.Vector3(-48, 10, 1));
        this.geometry.vertices.push(new THREE.Vector3(-48, 32, 1));
        this.geometry.vertices.push(new THREE.Vector3(-44, 10, 1));
        this.geometry.vertices.push(new THREE.Vector3(-44, 32, 1));

        this.geometry.vertices.push(new THREE.Vector3(-37, 10, 0));

        //LEFT AND RIGHT SIDES OF STABILIZER
        this.geometry.faces.push(new THREE.Face3(0,1,2));
        this.geometry.faces.push(new THREE.Face3(1,3,2));
        this.geometry.faces.push(new THREE.Face3(4,5,6));
        this.geometry.faces.push(new THREE.Face3(5,7,6));

        //JOIN TWO SIDES
        this.geometry.faces.push(new THREE.Face3(0,1,4));
        this.geometry.faces.push(new THREE.Face3(5,1,4));
        this.geometry.faces.push(new THREE.Face3(1,3,5));
        this.geometry.faces.push(new THREE.Face3(7,3,5));

        //FRONTAL PART OF STABILIZER
        this.geometry.faces.push(new THREE.Face3(7,6,8));
        this.geometry.faces.push(new THREE.Face3(3,2,8));
        this.geometry.faces.push(new THREE.Face3(3,7,8));

        this.geometry.computeFaceNormals();

        this.material = new THREE.MeshLambertMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

        this.mesh1 = new THREE.Mesh(this.geometry, this.material);
        this.mesh1.position.set(x,y, z);

        scene.add(this.mesh1);
	}

    rotateLeft(){
        this.mesh1.rotation.x += 0.1;
    }
}