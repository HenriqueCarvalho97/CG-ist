var camera, scene, renderer;

var geometry, material, mesh;

var angle=0, keys = [];




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



function createTable(x, y, z) {
    'use strict';
    
    var table = new THREE.Object3D();
    
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -20, 0, -8);
    addTableLeg(table, -20, 0, 8);
    addTableLeg(table, 20, 0, 8);
    addTableLeg(table, 20, 0, -8);
    
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    //scene.add(new THREE.AxisHelper(20));
    
    createTable(0, 8, 0);
    //createBall(0, 0, 15);
    createChair(50, 8, 0);
    createCandeeiro(-50, 0, 0);
}

function createCamera() {
    camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);

    // camera = new THREE.PerspectiveCamera(20,
    //                                      window.innerWidth / window.innerHeight,
    //                                      1,
    //                                      1000);
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 100;
    camera.lookAt(scene.position);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}

function onKeyUp(e) {
    'use strict';
    // mark keys that were released
    switch(e.keyCode){
        case 38:
            chair.moveForward = false;
            break;
        case 40:
            chair.moveBackwards = false;
            break;
        case 37:
            chair.rotateLeft = false;
            break;
        case 39:
            chair.rotateRight = false;
            break;
    }

}

function onKeyDown(e) {
    'use strict';

    switch(e.keyCode){
        case 38: //Arrow Up
            chair.moveForward = true;
            break;
        case 40: //Arrow Down
            chair.moveBackwards = true;
            break;
        case 37: //Arrow Left
            chair.rotateLeft = true;
            break;
        case 39: //Arrow Right
            chair.rotateRight = true;
            break;
        case 49:
            camera.position.x = 0;
            camera.position.y = 100;
            camera.position.z = 0;
            camera.lookAt(scene.position);
            break;
        case 50:
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 100;
            camera.lookAt(scene.position);
            break;
        case 51:
            camera.position.x = 100;
            camera.position.y = 0;
            camera.position.z = 0;
            camera.lookAt(scene.position);
            break;
        case 65: //A
        case 97: //a
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;
    }

}


function render() {
    'use strict';
    renderer.render(scene, camera);
}


function init(){
    'use strict';

    renderer = new  THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();


    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

}


function animate(){
    'use strict';
    
    moveChair();

    render();

    requestAnimationFrame(animate);
}

