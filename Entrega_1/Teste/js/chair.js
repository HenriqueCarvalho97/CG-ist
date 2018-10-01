var camera, scene, renderer;

var geometry, material, mesh;

var chair;

function addWheel(obj, x, y, z, r) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    geometry = new THREE.TorusGeometry(1, 1, 15, 15);
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = Math.PI / 2;
    mesh.position.set(x, y, z);
    obj.add(mesh);
}


function addChairPole(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CubeGeometry(2, 8, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addChairLegL(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CubeGeometry(2, 2, 18);
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = Math.PI / -4;
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairLegR(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CubeGeometry(2, 2, 18);
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = Math.PI / 4;
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.BoxGeometry(16, 20, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairSit(obj, x, y, z) {
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CubeGeometry(16, 2, 16);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';
    
    chair = new THREE.Object3D();
    
    chair.userData = {
        angle: 0,
        speed: 0,
        acceleration: 0,
        moveForward: false,
        moveBackwards: false,
        rotateLeft: false,
        rotateRight: false
        };


    chair.speed = 0;
    chair.moveForward = false;
    chair.moveBackwards = false;
    chair.rotateLeft = false;
    chair.rotateRight = false;

    addChairSit(chair, 0, 0, 0);
    addChairPole(chair, 0, -2, 0);
    addChairLegR(chair, 0, -10, 0);
    addChairLegL(chair, 0, -10, 0);
    addChairBack(chair, 0, 11, -7);
    addWheel(chair, -7, -10, 5, 4);
    addWheel(chair, -5, -10, 7, 4);
    addWheel(chair, 7, -10, 5, -4);
    addWheel(chair, 5, -10, 7, -4);
    addWheel(chair, 7, -10, -5, 4);
    addWheel(chair, 5, -10, -7, 4);
    addWheel(chair, -7, -10, -5, -4);
    addWheel(chair, -5, -10, -7, -4);
    
    scene.add(chair);
    
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}

function moveChair(){
    // ACCELERATION
    if(chair.moveForward){
        chair.acceleration = 0.05;
    }else if(chair.moveBackwards){
        chair.acceleration = -0.05;
    }

    //STOP
    if(!chair.moveForward && !chair.moveBackwards){
        if(chair.speed < 0){
            chair.speed += 0.025;
        }
        else if(chair.speed > 0){
            chair.speed -= 0.025;
        }
        chair.acceleration = 0;

        //Weird bug fix
        if(chair.speed < 0.5 && chair.speed > 0){
            chair.speed = 0;
        }
    }

    // SPEED
    if ((chair.moveForward || chair.moveBackwards) && chair.speed < 1.5 && chair.speed > -1.5){
        chair.speed = chair.speed + chair.acceleration;
    }

    //MOVE
    chair.position.x += chair.speed * Math.sin(angle);
    chair.position.z += chair.speed * Math.cos(angle);

    if(chair.speed != 0){

        chair.children.forEach(function(element){
            if(element.geometry.type == 'TorusGeometry'){
                element.rotation.x = Math.PI / chair.speed;
            }
        });
    }
    //TURN
    if(chair.rotateLeft){
        chair.rotation.y += 0.08;
        angle += 0.08;
    }
    if(chair.rotateRight){
        chair.rotation.y -= 0.08;
        angle -= 0.08;
    }
}
