const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300

var engine, world;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world

    ground = new Ground(240,790,480,20)
  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2, 10, divisionHeight));
}

for(var j = 40; j<= width; j = j+50){
  plinkos.push(new Plinkos(j,75,10));
}

for(var j = 15; j<= width-10; j = j+50){
  plinkos.push(new Plinkos(j,175,10));
}

for(var j = 40; j<= width; j = j+50){
  plinkos.push(new Plinkos(j,275,10));
}

for(var j = 15; j<= width-10; j = j+50){
  plinkos.push(new Plinkos(j,375,10));
}


}

function draw() {
  
  background(255,255,255); 
  Engine.update(engine);

  for(var j = 0; j < particles.length; j  ++) {
    particles[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2 + 10), 10, 10));
  }


for(var j = 0; j < particles.length; j  ++) {
  particles[j].display();
}

for(var l = 0; l < plinkos.length; l ++) {
  plinkos[l].display();
}

for(var k = 0; k < divisions.length; k  ++) {
  divisions[k].display();
}

ground.display();
}

