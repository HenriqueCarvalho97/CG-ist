'use strict'

class AirplaneComponent extends THREE.Object3D {
    constructor(x, y, z) {
        super();
    }


    rotateLeft(){
        this.mesh1.rotation.x += 0.1;
    }
}