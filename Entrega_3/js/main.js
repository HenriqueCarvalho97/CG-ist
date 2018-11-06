var cameraOrthographic, cameraPerspective, cameraMovable, scene, renderer, cameraValue = 1;

var geometry, material, mesh, active = true;

var clock, n = 40;

var body, front, propeller, wing, verticalStabilizer, sideStabilizer, cockpit;

var angle = 0;

var airplane = [];

function createScene() {
	'use strict';

	scene = new THREE.Scene();

    var axesHelper = new THREE.AxisHelper( 50 );
    scene.add( axesHelper );

    body = new Body(0, 0, 0);

	wing = new Wing(0, 0, 0);

    verticalStabilizer = new VerticalStabilizer(0, 0, 0);

    sideStabilizer = new SideStabilizer(0, 0, 0);

    cockpit = new Cockpit(0, 0, 0);

    airplane.push(body, wing, verticalStabilizer, sideStabilizer, cockpit);
    // var ambientLight = new THREE.AmbientLight( 0x777777 );
    // scene.add( ambientLight );

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = 80;
    light.position.y = 80;
    light.position.z = 80;
    scene.add(light);
}

function createCameraOrthographic() {
    if (window.innerHeight > window.innerWidth) {
        var aspectRatio = window.innerHeight / window.innerWidth;
        cameraOrthographic = new THREE.OrthographicCamera( -100, 100, 100 * aspectRatio, -100 * aspectRatio, 1, 1000);
    } else {
        var aspectRatio = window.innerWidth / window.innerHeight;
        cameraOrthographic = new THREE.OrthographicCamera(-100 * aspectRatio, 100 * aspectRatio, 100, -100, 1, 1000);
    }

	cameraOrthographic.position.set(100,0,0);
	cameraOrthographic.lookAt(scene.position);
}

function createCameraPerspective() {
	'use strict';

	cameraPerspective = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3 * window.innerHeight);
	cameraPerspective.position.set(-10,100,100);
	cameraPerspective.lookAt(scene.position);
}


function onResize() {
	// 'use strict';
	//
    // if (window.innerHeight > window.innerWidth) {
    //     var aspectRatio = window.innerHeight / window.innerWidth;
    //     camera.left = -200 / 2;
    //     camera.right = 200 / 2;
    //     camera.top = 100 * aspectRatio;
    //     camera.bottom = -100 * aspectRatio;
	//
    // } else {
    //     var aspectRatio = window.innerWidth / window.innerHeight;
    //     camera.left = -200 * aspectRatio / 2;
    //     camera.right = 200 * aspectRatio / 2;
    //     camera.top = 100;
    //     camera.bottom = -100;
    // }
	//
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.aspect = aspectRatio;
    // camera.updateProjectionMatrix();
}


function onKeyDown(e) {
	'use strict';

	switch (e.keyCode) {
		case 49: //1
			cameraValue = 1;
			break;
		case 50: //2
			cameraValue = 2;
			break;
		case 51: //3
			cameraValue = 3;
			break;
		case 65: //A
		case 97: //a
			scene.traverse(function (node) {
				if (node instanceof THREE.Mesh) {
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
		case 69:
			airplane.forEach(function e(element){
				element.rotateLeft();
			});
            break;

	}

}

function render() {
    'use strict';
    switch (cameraValue) {
        case 1:
            renderer.render(scene, cameraOrthographic);
            break;
        case 2:
            renderer.render(scene, cameraPerspective);
            break;
        case 3:
            renderer.render(scene, cameraMovable);
            break;
    }
}

function init() {
	'use strict';

	renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	createCameraOrthographic();
	createCameraPerspective();
	//createCameraMovable();

	createLights();

	clock = new THREE.Clock();
	clock.start();


	render();

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("resize", onResize);

}

function animate() {
	'use strict';

	render();

	requestAnimationFrame(animate);
}
