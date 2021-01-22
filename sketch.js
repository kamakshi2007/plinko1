const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinko = [];
var particle = [];


function setup(){
    createCanvas(1350,620);
    engine = Engine.create();
    world = engine.world;

    bg = loadImage("bb.jpg");
    

    ground = new Ground(700,610,1400,10);
    divider1 = new Ground(100,455,10,300);
    divider2 = new Ground(200+10,455,10,300);
    divider3 = new Ground(300+20,455,10,300);
    divider4 = new Ground(400+30,455,10,300);
    divider5 = new Ground(500+40,455,10,300);
    divider6 = new Ground(600+50,455,10,300);
    divider7 = new Ground(700+60,455,10,300);
    divider8 = new Ground(800+70,455,10,300);
    divider9 = new Ground(900+80,455,10,300);
    divider10 = new Ground(1000+90,455,10,300);
    divider11 = new Ground(1100+100,455,10,300);
    divider12 = new Ground(1200+110,455,10,300);
    //divider13 = new Ground(1300,455,10,300);
   
    for (var j = 40; j <= width; j+= 70) {
        plinko.push(new Plinko(j, 85, 15))
      }
      for (var j = 15; j <= width - 10; j+= 70) {
        plinko.push(new Plinko(j, 185, 15))
      }
      for (var j = 40; j <= width; j+= 70) {
        plinko.push(new Plinko(j, 285, 15))
      }
      /*for (var j = 15; j <= width - 10; j+= 50) {
        plinko.push(new Plinko(j, 385, 10))
      }*/
      
      
     
      Engine.run(engine);
}

function draw(){
    background(bg);
    //background(color(random(0,100),random(0,100),random(0,100)));
    
    fill("white");
    textSize(30);
    text("100",680,590);
    text("0",580,590);
    text("0",800,590);
    text("90",470,590);
    text("90",910,590);
    text("0",360,590);
    text("0",1020,590);
    text("70",250,590);
    text("70",1120,590);
    text("60",140,590);
    text("60",1240,590);
    text("50",30,590);

    if (frameCount % 60 == 0) {
      for (var j = 0; j <= 1; j++) {
        particle.push(new Particle(random(random(100,1100), width / 2 + 50), 20, 20))
      }
    }



//displaing
    ground.display();
    divider1.display();
    divider2.display();
    divider3.display();
    divider4.display();
    divider5.display();
    divider6.display();
    divider7.display();
    divider8.display();
    divider9.display();
    divider10.display();
    divider11.display();
    divider12.display();
    //divider13.display();
    for (var j = 0; j < plinko.length; j++) {
        plinko[j].display();
      }
    for (var j = 0; j < particle.length; j++) {
        particle[j].display();
      }
    
}

