var camera, scene, renderer;

var geometry, material, mesh;

var ball, playerBall;


function createBall(x, y, z){
	'use strict';

	ball = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.SphereGeometry(Math.sqrt(50000)/20, 15, 15);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    ball.add(mesh);

    scene.add(ball)


    var xx = getRandomInt(-100, 100);
    var zz = getRandomInt(-50, 50);

    ball.position.x = limits(xx, 100, -100);
    ball.position.y = Math.sqrt(50000)/20;
    ball.position.z = limits(zz, 50, -50);
}

function createPlayerBall(x, y, z){
    'use strict';

    playerBall = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.SphereGeometry(Math.sqrt(50000)/20, 15, 15);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    playerBall.add(mesh);

    scene.add(playerBall);

    playerBall.name = "player";


    var xx = getRandomInt(-100, 100);
    var zz = getRandomInt(-50, 50);

    playerBall.position.x = limits(xx, 100, -100);
    playerBall.position.y = Math.sqrt(50000)/20;
    playerBall.position.z = limits(zz, 50, -50);
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function limits(lim, max, min){
    'use strict';

    if(lim > 0){
        if(lim > max - Math.sqrt(50000)/10){
            lim = max - Math.sqrt(50000)/10;
        }
    }
    else{
        if(lim < min + Math.sqrt(50000)/10){
            lim = min + Math.sqrt(50000)/10;
        }
    }

    return lim;
}