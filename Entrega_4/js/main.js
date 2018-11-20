'use strict'

var renderer, scene, camera, controls;

var board, cue, rubix;

function init(){

    renderer = new THREE.WebGLRenderer( {
        antialias : true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.autoClear = false;

    createScene();
    createCamera();

    render();

    // window.addEventListener("keydown", onKeyDown);
    // window.addEventListener("resize", onResize);

}

function animate() {
    'use strict';

    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    render();
}


function render() {
    'use strict';
    renderer.render(scene, camera);
}

function createScene(){
    scene = new THREE.Scene();

    board = new Board();
    cue = new Cue();
    rubix = new Rubix();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3 * window.innerHeight);
    camera.lookAt(scene.position);

    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(100,104,80);
    controls.update();

    // var light = new THREE.PointLight(0xFFFFFF);
    var sunLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    // color, intensity
    sunLight.position.set( 50,50,50 );
    scene.add(sunLight);
}

function createCamera(){
}
