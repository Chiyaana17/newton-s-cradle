class roof{
    constructor(x,y,w,h){
   this.width=w   
   this.height=h 
   var properties= {isStatic:true}
  this.body=Matter.Bodies.rectangle(x,y,width,20,properties)
  Matter.World.add(world,this.body)
    }
    display(){
        fill("purple")
        rectMode(CENTER)
        var star=this.body.position
    rect(star.x,star.y,this.width,this.height)
    }
}