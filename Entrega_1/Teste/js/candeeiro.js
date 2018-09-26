var camera, scene, renderer;

var geometry, material, mesh;

//var ball;

var candeeiro;

function addTableLeg(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CylinderGeometry(1, 1, 6, 8);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.BoxGeometry(50, 2, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

/*function createBall(x, y, z) {
    'use strict';
    
    ball = new THREE.Object3D();
    ball.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    
    ball.add(mesh);
    ball.position.set(x, y, z);
    
    scene.add(ball);
}*/

function addPole(obj, x, y, z) {
	'use strict';

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CylinderGeometry(1, 1, 20, 8);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh); 
}

function createCandeeiro(x, y, z) {
    'use strict';
    
    candeeiro = new THREE.Object3D();
    
   
    addPole(candeeiro, 0, 0, 0);
    
    scene.add(candeeiro);
    
    candeeiro.position.x = x;
    candeeiro.position.y = y;
    candeeiro.position.z = z;
}