class Hexa{
    constructor(x, y){
        var options = {
            'isStatic': false,
            'restitution': 0.6,
            'friction': 1,
            'density': 1
        }
        this.body = Bodies.rectangle(x, y, 6,60, 60, options);
        this.rad = 40
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(224, 224, 0);
        rect(0, 0, this.rad, this.rad);
        pop();
    }
}