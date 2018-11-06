'use strict';

class Body extends AirplaneComponent{

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

            //BACK
            this.geometry.faces.push(new THREE.Face3(0, 4, 1));
            this.geometry.faces.push(new THREE.Face3(0, 3, 4));
            this.geometry.faces.push(new THREE.Face3(1, 4, 2));
            this.geometry.faces.push(new THREE.Face3(5, 2, 4));
            this.geometry.faces.push(new THREE.Face3(4, 3, 6));
            this.geometry.faces.push(new THREE.Face3(4, 6, 7));
            this.geometry.faces.push(new THREE.Face3(7, 8, 4));
            this.geometry.faces.push(new THREE.Face3(4, 8, 5));

            this.geometry.vertices.push(new THREE.Vector3(0, -16, 12));
            this.geometry.vertices.push(new THREE.Vector3(0, -16, 0));
            this.geometry.vertices.push(new THREE.Vector3(0, -16, -12));
            this.geometry.vertices.push(new THREE.Vector3(48, -16, 12));
            this.geometry.vertices.push(new THREE.Vector3(48, -16, 0));
            this.geometry.vertices.push(new THREE.Vector3(48, -16, -12));

            //BOTTOM
            this.geometry.faces.push(new THREE.Face3(1, 10, 0));
            this.geometry.faces.push(new THREE.Face3(10, 9, 0));
            this.geometry.faces.push(new THREE.Face3(2, 10, 1));
            this.geometry.faces.push(new THREE.Face3(10, 2, 11));
            this.geometry.faces.push(new THREE.Face3(9, 10, 12));
            this.geometry.faces.push(new THREE.Face3(10, 13, 12));
            this.geometry.faces.push(new THREE.Face3(10, 14, 13));
            this.geometry.faces.push(new THREE.Face3(11, 14, 10));

            this.geometry.vertices.push(new THREE.Vector3(0, 0, -12));

            //LEFTSIDE
            this.geometry.faces.push(new THREE.Face3(5, 8, 15));
            this.geometry.faces.push(new THREE.Face3(2, 5, 15));
            this.geometry.faces.push(new THREE.Face3(11, 2, 15));
            this.geometry.faces.push(new THREE.Face3(15, 14, 11));

            this.geometry.vertices.push(new THREE.Vector3(0, 0, 12));

            //RIGHTSIDE
            this.geometry.faces.push(new THREE.Face3(0, 9, 16));
            this.geometry.faces.push(new THREE.Face3(0, 16, 3));
            this.geometry.faces.push(new THREE.Face3(3, 16, 6));
            this.geometry.faces.push(new THREE.Face3(9, 12, 16));

            this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));

            //TOP
            this.geometry.faces.push(new THREE.Face3(17, 6, 16));
            this.geometry.faces.push(new THREE.Face3(17, 7, 6));
            this.geometry.faces.push(new THREE.Face3(8, 7, 17));
            this.geometry.faces.push(new THREE.Face3(17, 15, 8));
            this.geometry.faces.push(new THREE.Face3(17, 14, 15));
            this.geometry.faces.push(new THREE.Face3(17, 13, 14));
            this.geometry.faces.push(new THREE.Face3(17, 12, 13));
            this.geometry.faces.push(new THREE.Face3(17, 16, 12));


            this.geometry.computeFaceNormals();

            var lambMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
            lambMaterial.shading = THREE.FlatShading;
            lambMaterial.shading = THREE.SmoothShading;
            this.geometry.normalsNeedUpdate = true;

            this.mesh1 = new THREE.Mesh(this.geometry, lambMaterial);
            this.mesh1.position.set(x,y,z);

            var axis = new THREE.AxisHelper(50);
            this.mesh1.add(axis);
            scene.add(this.mesh1);
	}

}