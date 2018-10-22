'use strict';

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {
        case 69: //E
        case 101: //e
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;
    }

}

function render() {
    renderer.clear();
}

function init() {

    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    document.body.appendChild(renderer.domElement);

    createScene();  // createObjects.js
    createCamera(); // camera.js

    render();
    
    window.addEventListener("keydown", onKeyDown);
}