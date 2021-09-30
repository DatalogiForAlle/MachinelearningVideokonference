function setup() {
  createCanvas(640, 480);
  firework = loadImage("Firework_transparent.png");
  colorYellow = color(255,255,0);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(220);
  image(video,0,0);
  star();
  image(firework,0,0,640,480);
}

function star(){
  noStroke();
  fill(colorYellow);
  triangle(400,250,500,100,600,250);
  triangle(400,150,600,150,500,300);
}

