const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var ground2;
var rope;
var ball;
var link;
var balls = [];
var ballButton;

function setup() 
{
  createCanvas(1000,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(75,350,300,150);
  var options = {
    isStatic : true
  }
  ground2 = Matter.Bodies.rectangle(width-75,350,300,150, options);
  World.add(world,ground2);

  rope = new Rope(30,{x:100,y:250})
  link = new Link(rope,ground2);  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  for(var i = 0; i < balls.length; i++){
    if(balls[i] != undefined){
    balls[i].show();
    }
  }

  fill(148, 127, 146);
  rect(ground2.position.x,ground2.position.y,300,150);
  
  Engine.update(engine);

  textSize(23);
  fill(255,255,255);
  text("Press the space bar to create a ball!",30,75);
}

function keyReleased(){
  if(keyCode === 32){
    createBalls();  
  }
}

function createBalls(){
  ball = new Ball(random(200,800),0,30,30);
  World.add(world,ball);
  balls.push(ball);
}
