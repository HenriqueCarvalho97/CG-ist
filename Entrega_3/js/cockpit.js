'use strict';

class Cockpit extends AirplaneComponent{

	constructor(x, y, z){
	    super();


        this.geometry = new THREE.Geometry();

        this.geometry.vertices.push(new THREE.Vector3(0, 0, 5));
        this.geometry.vertices.push(new THREE.Vector3(0, 0, -5));
        this.geometry.vertices.push(new THREE.Vector3(15, -5, 5));
        this.geometry.vertices.push(new THREE.Vector3(15, -5, -5));
        this.geometry.vertices.push(new THREE.Vector3(15, 3, 5));
        this.geometry.vertices.push(new THREE.Vector3(15, 3, -5));

        this.geometry.faces.push(new THREE.Face3(0, 1, 2));
        this.geometry.faces.push(new THREE.Face3(0, 2, 4));
        this.geometry.faces.push(new THREE.Face3(4, 2, 3));
        this.geometry.faces.push(new THREE.Face3(3, 4, 5));
        this.geometry.faces.push(new THREE.Face3(0, 4, 1));
        this.geometry.faces.push(new THREE.Face3(5, 4, 1));
        this.geometry.faces.push(new THREE.Face3(5, 3, 1));

        this.geometry.computeFaceNormals();

        var lambMaterial = new THREE.MeshLambertMaterial({color: 0xffff00});
        lambMaterial.shading = THREE.FlatShading;
        lambMaterial.shading = THREE.SmoothShading;
        this.geometry.normalsNeedUpdate = true;

        this.mesh1 = new THREE.Mesh(this.geometry, lambMaterial);
        this.mesh1.position.set(x,y,z);
        scene.add(this.mesh1);

	}

}