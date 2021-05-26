class Bob{
    constructor(x,y,r){
        var options={
           // isStatic:false,
            restitution:1.4,
            friction:1.0,
            density:1.0

        }
         this.x=x;
         this.y=y;
         this.r=r
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body)
    }
    display(){

        var pointA=this.body.position;
        push();
        translate(pointA.x,pointA.y)
        rectMode(CENTER);
        fill(254,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}