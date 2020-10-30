class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:     bird.body,
            bodyB:     constrainedLog.body,
            stiffness: 0.04,
            length:    30
        }  
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        
        strokeWeight(8);
        fill(0);
        line(pointA.x,point.y,pointB.x,pointB.y);
        
    }
}