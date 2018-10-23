'use strict';

class Ball extends Movable{
    constructor(x, y, z, playerBall) {
        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

        this.geometry = new THREE.SphereGeometry(Math.sqrt(50000)/20, 15, 15);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y, z);
        this.add(this.mesh);

        if(playerBall){
            this.name = 'Player Ball';
        }

        scene.add(this);

        this.setRandom();
    }

}