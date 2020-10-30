//Angry Birds by Armaan Sareen



//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig2, pig3, log3, log2, log5, log4;
var bg, platform;
var bird;
var constrainedLog;
var slingShot;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
    bg = loadImage("sprites/bg.png");
    
}


//define the intial environment of the software by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(100, 100);
    constrainedLog = new Log(230,180,80,PI/2);  
    
    //var chain = Constraint.create(options);

    slingShot = new Chain(bird.body,constrainedLog.body);
  
}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
    background(255);
    Engine.update(engine);

    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    constrainedLog.display();
    chain.display();

    platform.display();


}