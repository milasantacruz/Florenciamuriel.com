



function setup(){
    
    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0);
    canvas.parent("sketch_holder");
    noCursor();
    
    

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw(){
    clear();

    fill(0);

    ellipse(mouseX, mouseY, 50);

    var angle = map(mouseX*0.05, 0, width, -180, 180);
    var r = windowWidth/2.5;
    var x = r * cos(angle);
    var y = r * sin(angle);
    

    translate(windowWidth/2, windowHeight/2);
    fill(63, 255, 191, 150);
    noStroke();
    ellipse(x, y, 700);

   


    
}