'use strict'

class AirplaneComponent extends THREE.Object3D {
    constructor(x, y, z) {
        super();
    }


    rotateRight(){
        this.mesh1.rotation.x += 0.1;
    }

    rotateLeft(){
        this.mesh1.rotation.x -= 0.1;
    }

    rotateUp(){
        this.mesh1.rotation.z += 0.1;
    }

    rotateDown(){
        this.mesh1.rotation.z -= 0.1;
    }
}