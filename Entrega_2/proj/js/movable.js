'use strict';

class Movable extends THREE.Object3D {
    constructor() {
        super();
    }

    setRandom(){
        var xx = this.getRandomInt(-200, 200);
        var zz = this.getRandomInt(-100, 100);

        this.position.x = this.limits(xx, 200, -200);
        this.position.y = Math.sqrt(50000)/20;
        this.position.z = this.limits(zz, 100, -100);
    }

    getPosition(){
        return [this.position.x, this.position.y, this.position.z];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    limits(lim, max, min){
        'use strict';

        if(lim > 0){
            if(lim > max - Math.sqrt(50000)/10){
                lim = max - Math.sqrt(50000)/10;
            }
        }
        else{
            if(lim < min + Math.sqrt(50000)/10){
                lim = min + Math.sqrt(50000)/10;
            }
        }

        return lim;
    }


}
