'use strict'

var renderer, scene, camera, controls, clock;

var directionalLight, pointLight;

var board, cue, rubix, group = [];

var moveBall = false;

function init(){

    renderer = new THREE.WebGLRenderer( {
        antialias : true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.autoClear = false;

    createScene();
    createLights();

    clock = new THREE.Clock();

    render();

    window.addEventListener("keydown", onKeyDown);
    // window.addEventListener("resize", onResize);

}

function animate() {
    'use strict';

    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    var delta = clock.getDelta();
    cue.moveBall(rubix.position, delta);

    render();
}


function render() {
    'use strict';
    renderer.render(scene, camera);
}

function createScene(){
    scene = new THREE.Scene();

    rubix = new Rubix();
    cue = new Cue();
    board = new Board();

    group.push(cue, rubix, board);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3 * window.innerHeight);
    camera.lookAt(scene.position);

    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(100,104,80);
    controls.update();

}

function createLights(){
    directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set(50,50,50);
    scene.add( directionalLight );

    pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
    pointLight.position.set( 0, 25, 0 );
    scene.add( pointLight );
}

function onKeyDown(e){
    switch (e.keyCode) {
        case 66: //B
            moveBall = !moveBall;
            break;
        case 68: //D
            directionalLight.visible = !directionalLight.visible;
            break;
        case 80: //P
            pointLight.visible = !pointLight.visible;
            break;
        case 87: //W
            group.forEach(function(element){
                element.toggleWireframe();
            });
            break;
        case 76: //L
            group.forEach(function(element){
                element.toggleLight();
            });
            break;
    }
}