var camera, scene, renderer;

var geometry, material, mesh;

var base, wall, field;

function addBase(obj, x, y, z){
	'use strict';

	base = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.BoxGeometry(400, 0, 200);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLongWall(obj, x, y, z){
	'use strict';

	wall = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.BoxGeometry(400, Math.sqrt(50000)/10, 0);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addShortWall(obj, x, y, z){
	'use strict';

	wall = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.BoxGeometry(0, Math.sqrt(50000)/10, 200);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createField(x, y, z){

	'use strict';

	field = new THREE.Object3D();

	addBase(field, 0, 0, 0);
	addLongWall(field, 0, Math.sqrt(50000)/20, 100);
	addLongWall(field, 0, Math.sqrt(50000)/20, -100);
	addShortWall(field, 200, Math.sqrt(50000)/20, 0);
	addShortWall(field, -200, Math.sqrt(50000)/20, 0);

	scene.add(field);
    

}