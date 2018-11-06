'use strict'

class AirplaneComponent extends THREE.Object3D {
    constructor(x, y, z) {
        super();
        this.directionAxis = new THREE.Vector3(1,0,0);
        this.lightingOn = true;
        this.lamb = true;
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
        let thiscolor = this.mesh1.material.color;
        if(this.lightingOn)
            this.mesh1.material = new THREE.MeshBasicMaterial({color: thiscolor, side: THREE.DoubleSide});
        else{
            if(this.lamb){
                var lambMaterial = new THREE.MeshLambertMaterial({color: thiscolor});
                lambMaterial.shading = THREE.FlatShading;
                lambMaterial.shading = THREE.SmoothShading;
                this.geometry.normalsNeedUpdate = true;
                this.mesh1.material = lambMaterial;
                this.lamb = true;
            }else{
                var matPhong = new THREE.MeshPhongMaterial({color: thiscolor, side:THREE.DoubleSide});
                matPhong.specular = new THREE.Color(0x111111);
                matPhong.shininess = 30;
                matPhong.shading = THREE.FlatShading;
                matPhong.shading = THREE.SmoothShading;
                matPhong.needsUpdate = true;
                this.mesh1.normalsNeedUpdate = true;
                this.mesh1.material = matPhong;            }
        }
        this.lightingOn = !this.lightingOn;
    }

    toggleShadow(){
        let thiscolor = this.mesh1.material.color;
        if(!this.lamb) {
            var lambMaterial = new THREE.MeshLambertMaterial({color: thiscolor});
            lambMaterial.shading = THREE.FlatShading;
            lambMaterial.shading = THREE.SmoothShading;
            this.geometry.normalsNeedUpdate = true;
            this.mesh1.material = lambMaterial;
            this.lamb = true;
        }
        else{
            var matPhong = new THREE.MeshPhongMaterial({color: thiscolor, side:THREE.DoubleSide});
            matPhong.specular = new THREE.Color(0x111111);
            matPhong.shininess = 30;
            matPhong.shading = THREE.FlatShading;
            matPhong.shading = THREE.SmoothShading;
            matPhong.needsUpdate = true;
            this.mesh1.normalsNeedUpdate = true;
            this.mesh1.material = matPhong;
            this.lamb = false;
        }
    }
}