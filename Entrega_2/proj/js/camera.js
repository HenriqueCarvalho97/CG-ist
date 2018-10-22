'use strict';

function createCamera() {   // Default camera

    var delta1 = ((CAMERA_HEIGHT) * (window.innerWidth/window.innerHeight) - (CAMERA_WIDTH)) / 2;
    var delta2 = ((CAMERA_WIDTH) / (window.innerWidth/window.innerHeight) - (CAMERA_HEIGHT)) / 2;

    if ((CAMERA_WIDTH/CAMERA_HEIGHT) < (window.innerWidth/window.innerHeight))
        camera = new THREE.OrthographicCamera( (CAMERA_WIDTH / -2) - delta1, (CAMERA_WIDTH / 2) + delta1, CAMERA_HEIGHT / 2, CAMERA_HEIGHT / -2, 1 , CAMERA_WIDTH);
    else
        camera = new THREE.OrthographicCamera( CAMERA_WIDTH / -2, CAMERA_WIDTH / 2, (CAMERA_HEIGHT / 2) + delta2, (CAMERA_HEIGHT / -2) - delta2, 1 , CAMERA_WIDTH);

    camera.position.x = 0;
    camera.position.y = 800;
    camera.position.z = 0;

    camera.lookAt(new THREE.Vector3(0,0,0));
    camera.updateProjectionMatrix();
}

