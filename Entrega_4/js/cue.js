'use strict'

class Cue{
    constructor(){
        this.geometry = new THREE.SphereGeometry( 3, 32, 32 );
        this.material = new THREE.MeshPhongMaterial( {map: new THREE.TextureLoader().load('textures/ball.jpg'), specular: 0x888888, shininess: 5} );
        this.cueball = new THREE.Mesh( this.geometry, this.material );
        this.cueball.position.set(0,6,15);
        scene.add( this.cueball );
    }
}