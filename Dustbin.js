class Dustbin{
    constructor(x,y,width,height){

        this.image = loadImage("Images/dustbingreen.png");

       var options ={
           isStatic: true,
           'restitution':0,
           'friction': 1,
           'density': 0.1
           
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        
        fill("white");
  
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 200, 200);
      }
}