class Rope{
    constructor(BodyA, BodyB, offsetX, offsetY, Stiffness, Length){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var rope_options={
            bodyA: BodyA,
            bodyB: BodyB,
            pointB:{x: this.offsetX,  y: this.offsetY},
            stifness: Stiffness,
            length: Length
        }
        this.rope = Constraint.create(rope_options)
        World.add(world, this.rope)    
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position

        strokeWeight (5);

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY

        line (Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
    }
}