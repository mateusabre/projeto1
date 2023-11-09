function setup() {
    createCanvas(400, 400);
    background("#000000");
  }
  
  function draw() {
    stroke("#FFFFFF");
    fill("blue");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  