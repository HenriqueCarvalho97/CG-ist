'use strict'

class Board {
    constructor(){
        this.geom = new THREE.PlaneGeometry(120,120,1,1);
        this.texture = new THREE.TextureLoader().load( "textures/board.jpg" );
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.repeat.set(2,2);
        this.material = new THREE.MeshPhongMaterial( { map: this.texture } );
        this.plane = new THREE.Mesh( this.geom, this.material );
        // this.plane.position.y = -50;
        // this.plane.position.z = -60;
        // this.plane.position.x = -60;
        this.plane.position.set(0,0,0);
        this.plane.rotateX(-Math.PI/2);
        scene.add( this.plane );
    }

}