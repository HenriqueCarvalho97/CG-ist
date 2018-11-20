'use strict'

class Cue extends MyObject{
    constructor(){
        super();
        this.name = "cue";
        this.geometry = new THREE.SphereGeometry( 3, 32, 32 );
        this.texture = new THREE.TextureLoader().load('textures/ball.jpg')
        this.originalMaterial = new THREE.MeshPhongMaterial( {map: this.texture, specular: 0x888888, shininess: 5} );
        this.material = new THREE.MeshBasicMaterial( {map: this.texture, specular: 0x888888, shininess: 5} );
        this.mesh = new THREE.Mesh( this.geometry, this.originalMaterial );
        this.mesh.position.set(0,6,15);
        scene.add( this.mesh );
    }
}