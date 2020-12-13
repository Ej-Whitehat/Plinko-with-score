const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var turn = 0;
var play = 1;
var end = 0;
var gamestate = play;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle = new Particle(0,0,10,10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j=j+50){    
    plinkos.push(new Plinko(j,75));
  }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    sideDivision1=new Divisions(0,400,10,800);
    sideDivision2=new Divisions(800,400,10,800)

    tingting=createSprite(400,450,800,2);
    tingting.shapeColor = color("yellow");
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  textSize(20);
  fill("white");
  text("score = "+score,width/2-375,25);

  text("500",25,485);
  text("500",105,485);
  text("500",665,485);
  text("500",745,485);
  text("300",185,485);
  text("300",265,485);
  text("300",585,485);
  text("300",505,485);
  text("100",345,485);
  text("100",425,485);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {   
    divisions[k].display();
  }
  sideDivision1.display();
  sideDivision2.display();

  if(particle!==null){
    particle.display();
    if(particle.body.position.y>500){
      if(particle.body.position.x<160||particle.body.position.x>640){
        score = score+500;
        particle=null;
        turn=turn+1;
      }
      if(turn>=5){
        gamestate="end"
      }
    }
  }
  if(particle!==null){
    particle.display();
    if(particle.body.position.y>500){
      if((particle.body.position.x<320&&particle.body.position.x>160)||(particle.body.position.x<640&&particle.body.position.x>480)){
        score = score+300;
        particle=null;
        turn=turn+1;
      }
      if(turn>=5){
        gamestate="end"
      }
    }
  }
  if(particle!==null){
    particle.display();
    if(particle.body.position.y>500){
      if(particle.body.position.x>320&&particle.body.position.x<480){
        score = score+100;
        particle=null;
        turn=turn+1;
      }
      if(turn>=5){
        gamestate="end"
      }
    }
  }
  if(gamestate=="end"){
    textSize(100);
    fill("red");
    text("Game Over",150,400);
  }
  drawSprites();
}

function keyPressed(){
  if(turn<5){
    if(keyCode==49){
      particle=new Particle(random(5,155),10,12,12);
    }
    if(keyCode==50){
      particle=new Particle(random(165,315),10,12,12);
    }
    if(keyCode==51){
      particle=new Particle(random(325,475),10,12,12);
    }
    if(keyCode==52){
      particle=new Particle(random(485,635),10,12,12);
    }
    if(keyCode==53){
      turn = turn+1;
      particle=new Particle(random(645,795),10,12,12);
    }
  }
}