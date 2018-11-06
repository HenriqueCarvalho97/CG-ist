var directionalLight;

function createLights(){
    directionalLight = createDirectionallight();
}

function createDirectionallight(){
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = -100;
    light.position.y = 150;
    scene.add(light);
}