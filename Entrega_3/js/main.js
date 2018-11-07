var cameraPerspective, scene, renderer;

var geometry, material, mesh;

var body, wing, verticalStabilizer, sideStabilizer, cockpit, sun;

var angle = 0;

var pointlight1, pointlight2, pointlight3, pointlight4;

var airplane = [];

function createScene() {
	'use strict';

	scene = new THREE.Scene();

    body = new Body(0, 0, 0);

	wing = new Wing(0, 0, 0);

    verticalStabilizer = new VerticalStabilizer(0, 0, 0);

    sideStabilizer = new SideStabilizer(0, 0, 0);

    cockpit = new Cockpit(0, 0, 0);

    airplane.push(body, wing, verticalStabilizer, sideStabilizer, cockpit);

}

function createSun(){
	//Creates a directionalLight with color 0xffffee and intensity 1
    sun = new THREE.DirectionalLight(0xffffee, 1);
    sun.position.x = 60;
    sun.position.y = 120;
    sun.position.z = 0;
    scene.add(sun);
}

/*
	Function to turn On or Off the Sun. Key "N"
 */
function toggleSun(){
	if(sun.intensity === 1)
		sun.intensity = 0;
	else
		sun.intensity = 1;
}

function createCameraPerspective() {
	'use strict';

	cameraPerspective = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3 * window.innerHeight);
	cameraPerspective.position.set(10,75,-200);
	cameraPerspective.lookAt(scene.position);
}


function onResize() {
	'use strict';

    if (window.innerHeight > window.innerWidth) {
        var aspectRatio = window.innerHeight / window.innerWidth;
        cameraPerspective.left = -200 / 2;
        cameraPerspective.right = 200 / 2;
        cameraPerspective.top = 100 * aspectRatio;
        cameraPerspective.bottom = -100 * aspectRatio;
    } else {
        var aspectRatio = window.innerWidth / window.innerHeight;
        cameraPerspective.left = -200 * aspectRatio / 2;
        cameraPerspective.right = 200 * aspectRatio / 2;
        cameraPerspective.top = 100;
        cameraPerspective.bottom = -100;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    cameraPerspective.aspect = aspectRatio;
    cameraPerspective.updateProjectionMatrix();
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

		case 39: // Right Arrow
			airplane.forEach(function e(element){
				element.rotateRight();
			});
            break;

		case 37: // Left Arrow
			airplane.forEach(function e(element){
				element.rotateLeft();
			});
            break;

		case 38: // Up Arrow
			airplane.forEach(function e(element){
				element.rotateUp();
			});
            break;

		case 40: // Down Arrow
			airplane.forEach(function e(element){
				element.rotateDown();
			});
            break;

		case 78: //N - Sun On/Off
			toggleSun();
			break;

		case 76: //L - Lighting Calculus On/Off
			airplane.forEach(function e(element){
				element.toggleLighting();
			});
			break;

		case 71: //G - Phong vs Lambert Material
			airplane.forEach(function e(element){
				element.toggleShadow();
			});
			break;

		//LightBulbs On/Off
		case 49: //1
			pointlight1.toggleLight();
			break;

		case 50: //2
			pointlight2.toggleLight();
			break;

		case 51: //3
			pointlight3.toggleLight();
			break;

		case 52: //4
			pointlight4.toggleLight();
			break;

	}
}

function render() {
    'use strict';
    renderer.render(scene, cameraPerspective);
}

function init() {
	'use strict';

	renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	createCameraPerspective();
    createSun();

	pointlight1 = new Pointlight(50,90,-80);
	pointlight2 = new Pointlight(-50,90,-80);
	pointlight3 = new Pointlight(50,90,80);
	pointlight4 = new Pointlight(-50,90,80);

	render();

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("resize", onResize);

}

function animate() {
	'use strict';

	render();

	requestAnimationFrame(animate);
}
