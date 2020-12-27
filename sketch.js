const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7,stand8;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 780, 1200, 10);

  stand1 = new Division(10, 700, 10, 150);
  stand2 = new Division(150, 700, 10, 150);
  stand3 = new Division(290, 700, 10, 150);
  stand4 = new Division(430, 700, 10, 150);
  stand5 = new Division(570, 700, 10, 150);
  stand6 = new Division(710, 700, 10, 150);
  stand7 = new Division(850, 700, 10, 150);
  stand8 = new Division(990, 700, 10, 150);
  
  

  for (var j = 75; j <=width-75; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-50; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width-75; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-50; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }
  
}

function draw() {
   background(225, 201, 226);

   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   
   for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }
  
  if(frameCount%40===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
}
