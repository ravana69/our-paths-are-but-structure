//genuary2024 - impossible shapes;

function setup() {
  createCanvas(500, 500, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  n = floor(random(3, 5));
  background(0);
  d1 = random(30, 50);
  d2 = random(5, 40);
  nRot = floor(random(3, 10));
  if (nRot === 4) {
    nRot = 3;
  }
  r1 = random(100, 255);
  g1 = random(100, 255);
  b1 = random(100, 255);
  r2 = random(20, 50);
  g2 = random(20, 50);
  b2 = random(20, 50);
}

function draw() {
  t = frameCount / (3 + n);
  pointLight(
    r1 + r2 * sin(t),
    g1 + g1 * sin(t),
    b1 + b2 * sin(t),
    600,
    600,
    600
  );
  specularMaterial(255, 255, 255);

  for (let j = 0; j < nRot; j++) {
    push();

    rotateZ((j * 360) / nRot);
    translate(d1, d1, d1);

    for (let i = 0; i < n; i++) {
      x =
        (n - 2) * d1 * sin(t + (360 / n) * i) +
        (n - 1) *
          d1 *
          sin((n - 1) * (t + (360 / n) * i)) *
          cos(t + (360 / n) * i);
      y =
        (n - 2) * d1 * cos(t + (360 / n) * i) -
        (n - 1) *
          d1 *
          cos((n - 1) * (t + (360 / n) * i)) *
          sin(t + (360 / n) * i);
      z = -(n - 2) * sin(n * (t + (360 / n) * i));
      push();
      translate(x, y, z);
      rotateY(45);
      rotateZ(-20);
      box(d2 / 2, d2 / 2, d2 / 2);
      pop();
    }
    pop();
  }
}

function border() {
  noFill();
  stroke(20, 50, 60);
  strokeWeight(4);
  rect(0, 0, width - 20, height - 20);
}

function mousePressed() {
  frameCount = 0;
  setup();
  draw();
}

function keyPressed() {
  trails = !trails;
}

function windowResized() {
  resizeCanvas(windowWidth * 0.9, windowHeight * 0.9);
}
