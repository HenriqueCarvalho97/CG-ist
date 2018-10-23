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

        this.direction = new THREE.Vector3(1, 0, 0);
        this.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), (Math.random() * 4*Math.PI) - 2*Math.PI);

        this.speed = 2;
        scene.add(this);

        this.setRandom();
    }

    moveBall(){
        this.position.x += this.direction.x * this.speed;
        this.position.z += this.direction.z * this.speed;
        this.hasCollidedWall();
        this.hasCollidedAnotherBall(balls);
    }


    hasCollidedWall(){
        if(this.position.x >= 100 - Math.sqrt(50000)/20 || this.position.x <= -100 + Math.sqrt(50000)/20){
            this.direction.x = -this.direction.x;
        }
        if(this.position.z >= 50 - Math.sqrt(50000)/20 || this.position.z <= -50 + Math.sqrt(50000)/20 ){
            this.direction.z = -this.direction.z;
        }
    }

    hasCollidedAnotherBall(balls){
        var x = this.position.x;
        var z = this.position.z;
        var thisball = 2;
        balls.forEach(function(element){
            if(element.position.x === x && element.position.z === z){
                return;
            }
            else{
                if(x - element.position.x + Math.sqrt(50000)/10 === 0 || z - element.position.z + Math.sqrt(50000)/10 === 0){
                    thisball = 0;
                    element.speed = 0;
                }
            }
        });
        if(thisball = 0){
            this.speed = 0;
        }

    }

}