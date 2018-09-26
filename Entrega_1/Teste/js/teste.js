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
    //camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);

    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);

    //camera.position.x = 80;
    //camera.position.y = 70;
    camera.position.z = 70;
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

function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
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

/*function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCamera();
    
    render();
    
    window.addEventListener("keydown", onKeyDown);
    //window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';
    
    /*if (ball.userData.jumping) {
        ball.userData.step += 0.04;
        ball.position.y = Math.abs(30 * (Math.sin(ball.userData.step)));
        ball.position.z = 15 * (Math.cos(ball.userData.step));
    }
    render();
    
    requestAnimationFrame(animate);
}*/

function init(){
    'use strict';

    renderer = new  THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();


    render();

    window.addEventListener("keydown", onKeyDown);

    document.addEventListener('keydown', function(e){
    keys[e.which] = true;
    });
    document.addEventListener('keyup', function(e){
    keys[e.which] = false;
    });
}


function animate(){
    'use strict';
    
    //Frente
    if (keys[38]) {
        chair.position.x +=  Math.sin(angle); 
        chair.position.z +=  Math.cos(angle);
    }
    //Trás
    if (keys[40]) {
        chair.position.x -= Math.sin(angle); 
        chair.position.z -= Math.cos(angle);
    }
    //Esquerda
    if (keys[37]) {
        chair.rotation.y += 0.08; 
        angle += 0.08;
    }
    //Direita
    if (keys[39]) {
        chair.rotation.y -= 0.08; 
        angle -= 0.08;
    }

    render();

    requestAnimationFrame(animate);
}

