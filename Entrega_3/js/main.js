var cameraPerspective, scene, renderer;

var geometry, material, mesh;

var body, front, propeller, wing, verticalStabilizer, sideStabilizer, cockpit, sun;

var angle = 0;

var pointlight1, pointlight2, pointlight3, pointlight4;

var airplane = [];

function createScene() {
	'use strict';

	scene = new THREE.Scene();

    body = new Body(0, 0, 0);

	wing = new Wing(0, 0, 0);

    var planeGeo = new THREE.PlaneGeometry(600,900);
    var planeMaterial = new THREE.MeshPhongMaterial( { color: 0x555555, specular: 0x112211, shininess: 5, wireframe: false } );
    planeMaterial.side = THREE.DoubleSide;
    var planeMesh = new THREE.Mesh( planeGeo, planeMaterial);
    planeMesh.rotation.x = Math.PI * .5;
    planeMesh.position.set(0,-60,0);
    scene.add( planeMesh );

    verticalStabilizer = new VerticalStabilizer(0, 0, 0);

    sideStabilizer = new SideStabilizer(0, 0, 0);

    cockpit = new Cockpit(0, 0, 0);

    airplane.push(body, wing, verticalStabilizer, sideStabilizer, cockpit);

}

function createSun(){
    sun = new THREE.DirectionalLight(0xffffff, 1);
    sun.position.x = 80;
    sun.position.y = 80;
    sun.position.z = 80;
    scene.add(sun);
}

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
		case 39:
			airplane.forEach(function e(element){
				element.rotateRight();
			});
            break;
		case 37:
			airplane.forEach(function e(element){
				element.rotateLeft();
			});
            break;
		case 38:
			airplane.forEach(function e(element){
				element.rotateUp();
			});
            break;
		case 40:
			airplane.forEach(function e(element){
				element.rotateDown();
			});
            break;
        //N
		case 78:
			toggleSun();
			break;
		//L
		case 76:
			airplane.forEach(function e(element){
				element.toggleLighting();
			});
			break;
		//G
		case 71:
			airplane.forEach(function e(element){
				element.toggleShadow();
			});
			break;
		case 49:
			pointlight1.toggleLight();
			break;
		case 50:
			pointlight2.toggleLight();
			break;
		case 51:
			pointlight3.toggleLight();
			break;
		case 52:
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
