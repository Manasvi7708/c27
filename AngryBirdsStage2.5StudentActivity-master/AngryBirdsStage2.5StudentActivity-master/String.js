class String  {
    constructor (b1,b2) {
       var options = {
        bodyA : b1,
        bodyB : b2,
        stiffness : 0.03,
        length : 10
       } 
       this.body = Constraint.create(options)
       World.add (world,this.body);
       this.body1 = b1;
       this.body2 = b2
    }

    display (){
        line(this.body1.position.x , this.body1.position.y , this.body2.position.x , this.body2.position.y)
    }
}


