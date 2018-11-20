'use strict'

class Cue extends MyObject{
    constructor(rubix){
        super();
        this.name = "cue";
        this.geometry = new THREE.SphereGeometry( 3, 32, 32 );
        this.texture = new THREE.TextureLoader().load('textures/ball.jpg')
        this.originalMaterial = new THREE.MeshPhongMaterial( {map: this.texture, specular: 0x888888, shininess: 5} );
        this.material = new THREE.MeshBasicMaterial( {map: this.texture, specular: 0x888888, shininess: 5} );
        this.mesh = new THREE.Mesh( this.geometry, this.originalMaterial );
        this.mesh.position.set(0,6,15);
        scene.add( this.mesh );

        this.directionAxis = new THREE.Vector3(0,1,0);
        this.theta = 0;

    }

    moveBall(point, delta){

        if(moveBall === true && this.theta < 0.05){
            this.theta += delta/15;
        }if(moveBall !== true && this.theta > 0){
            this.theta -= delta/15;
        }

        this.mesh.position.sub(point); // remove the offset
        this.mesh.position.applyAxisAngle(this.directionAxis, this.theta); // rotate the POSITION
        this.mesh.position.add(point); // re-add the offset

        this.mesh.rotateOnAxis(this.directionAxis, this.theta); // rotate the OBJECT
    }
}