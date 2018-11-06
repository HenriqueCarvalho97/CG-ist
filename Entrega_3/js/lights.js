'use strict'

function createSpotlight(x,y,z){
    var spotLight = new THREE.SpotLight( 0xffff00, 5, 90, Math.PI / 6, 10);
    spotLight.position.set( 0, 50, 0 );
    spotLight.target.position.set( 0, 0, 0 );
    spotLight.penumbra = .2;
    scene.add( spotLight );
    scene.add( spotLight.target);
    var spotter = new THREE.SpotLightHelper( spotLight);
    scene.add( spotter);
}