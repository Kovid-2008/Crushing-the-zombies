class Stone{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        var options={
            restitution:0.1
        }

        this.body=Bodies.circle(this.x,this.y,r,options);
        World.add(world,this.body);
    }


    draw(){
    let pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    strokeWeight(1);
    fill("white");
    ellipseMode(CENTER);
    ellipse(0,0,70,70);
    noStroke();
    pop();
    }
}