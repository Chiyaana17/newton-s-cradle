class bob{
    constructor(x,y,r){
    this.radius=r
    var properties={
    isStatic:false,
    density:1,
    friction:0,
    restitution:1
  }
    this.body=Matter.Bodies.circle(x,y,r,properties)
    Matter.World.add(world,this.body)
}
display(){
  push()
  fill("pink")
  circle (this.body.position.x,this.body.position.y,this.radius*2)
  pop()   
}}