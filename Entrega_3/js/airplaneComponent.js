'use strict'

class AirplaneComponent extends THREE.Object3D {
    constructor(x, y, z) {
        super();
        this.directionAxis = new THREE.Vector3(1,0,0);
        this.lightingOn = true;
        this.oldMaterial = 1;
    }

    setOldMaterial(n){
        this.oldMaterial = n;
    }

    getOldMaterial(){
        return this.oldMaterial;
    }

    rotateRight(){
        this.mesh1.rotateOnAxis(this.directionAxis, 0.1 );
    }

    rotateLeft(){
        this.mesh1.rotateOnAxis(this.directionAxis, -0.1 );
    }

    rotateUp(){
        this.mesh1.rotation.z += 0.1;
    }

    rotateDown(){
        this.mesh1.rotation.z -= 0.1;
    }

    toggleLighting(){
        var thiscolor = this.mesh1.material.color;
        if(this.lightingOn)
            this.mesh1.material = new THREE.MeshBasicMaterial({color: thiscolor, side:THREE.DoubleSide});
        else{
            switch(this.getOldMaterial()){
                case 1:
                    this.mesh1.material = new THREE.MeshLambertMaterial({color: thiscolor, side: THREE.DoubleSide})
                    break;
                case 2:
                    break;
            }
        }
        this.lightingOn = !this.lightingOn;


    }
}