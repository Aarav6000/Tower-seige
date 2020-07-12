class Box {
    constructor(x, y, w, h, colour, stat) {
        var options = {
            'isStatic': stat,
            'restitutuin': 1,
            'friction': 1,
            'density': 0.8
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.colour = colour;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.colour);
        rect(0, 0, this.width, this.height);
        pop();
    }
}