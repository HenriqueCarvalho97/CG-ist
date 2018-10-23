var cameraOrthographic, cameraPerspective, cameraMovable, scene, renderer, cameraValue = 1;

var geometry, material, mesh;

var clock;

var ball;

var angle = 0,
	keys = [];

function createScene() {
	'use strict';

	scene = new THREE.Scene();

	createField(0, 0, 0);

	for(var i = 0; i < 9; i++){
		ball = new Ball(0,0,0,false);
	}

	ball = new Ball(0,0,0,true);

}

function createCameraOrthographic() {
    if (window.innerHeight > window.innerWidth) {
        var aspectRatio = window.innerHeight / window.innerWidth;
        cameraOrthographic = new THREE.OrthographicCamera( -150, 150, 150 * aspectRatio, -150 * aspectRatio, 1, 1000);
    } else {
        var aspectRatio = window.innerWidth / window.innerHeight;
        cameraOrthographic = new THREE.OrthographicCamera(-150 * aspectRatio, 150 * aspectRatio, 150, -150, 1, 1000);
    }

	cameraOrthographic.position.set(0,100,0);
	cameraOrthographic.lookAt(scene.position);
}

function createCameraPerspective() {
	'use strict';

	cameraPerspective = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3 * window.innerHeight);
	cameraPerspective.position.set(250,150,250);
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

function onKeyUp(e) {
	'use strict';
	// mark keys that were released
	switch (e.keyCode) {
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

	switch (e.keyCode) {
		case 49: //1
			cameraValue = 1;
			break;
		case 50: //2
			cameraValue = 2;
			break;
		case 51: //3
            alert("Por fazer! Usa outra camera");
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
			renderer.render(scene, cameraPerspective);
			// renderer.render(scene, cameraMovable);
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
	// createCameraMovable();

	clock = new THREE.Clock();

	render();

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
	window.addEventListener("resize", onResize);

}


function animate() {
	'use strict';

	var delta = clock.getDelta();


	render();

	requestAnimationFrame(animate);
}
