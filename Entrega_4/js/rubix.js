'use strict'

class Rubix{
    constructor(){
        this.geometry = new THREE.CubeGeometry(8, 8, 8);
        let textureLoader = new THREE.TextureLoader();
        let texture1 = textureLoader.load( 'textures/rubix/face1.jpg' );
        let texture2 = textureLoader.load( 'textures/rubix/face2.jpg' );
        let texture3 = textureLoader.load( 'textures/rubix/face3.jpg' );
        let texture4 = textureLoader.load( 'textures/rubix/face4.jpg' );
        let texture5 = textureLoader.load( 'textures/rubix/face5.jpg' );
        let texture6 = textureLoader.load( 'textures/rubix/face6.jpg' );

        let bumpTexture = textureLoader.load('textures/base.jpg');

        let materials = [
            new THREE.MeshPhongMaterial( { map: texture1 , bumpMap: bumpTexture } ),
            new THREE.MeshPhongMaterial( { map: texture2 , bumpMap: bumpTexture } ),
            new THREE.MeshPhongMaterial( { map: texture3 , bumpMap: bumpTexture } ),
            new THREE.MeshPhongMaterial( { map: texture4 , bumpMap: bumpTexture } ),
            new THREE.MeshPhongMaterial( { map: texture5 , bumpMap: bumpTexture } ),
            new THREE.MeshPhongMaterial( { map: texture6 , bumpMap: bumpTexture } )
        ];
        this.faceMaterial = new THREE.MeshFaceMaterial( materials );
        this.cube = new THREE.Mesh( this.geometry, this.faceMaterial );
        this.cube.position.set(0,6,0);
        scene.add( this.cube );

        // var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
    }
}