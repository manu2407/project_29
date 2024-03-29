class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
            image(this.sling1, 200,20);
            image(this.sling2, 170,20)
            if(this.sling.bodyA){
                
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(14);
            stroke(48,22,8);
            line(pointA.x -20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.X-30,pointA.Y-10,15,30);
                pop();
        }
    }
    
}