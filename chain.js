class thread{
 constructor(a,b){
        var friend={pointA:a,bodyB:b,stiffness:1,length:200}
        this.sling=Matter.Constraint.create(friend)
        Matter.World.add(world,this.sling)
    }
    display(){
    var star=this.sling.pointA
   var star1=this.sling.bodyB.position
   stroke("white")
   line(star.x,star.y,star1.x,star1.y)
    }
}