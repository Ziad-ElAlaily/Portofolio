// particle density. 100 - 2000
var density = 1500;

// spore cloud starting dimensions
var cloud_w = 200;
var cloud_h = 200;

// spore cloud starting position
var cloud_posX = 0;
var cloud_posY = 50;

//---------------------

var canvas = document.getElementById('spores');
var ctx = canvas.getContext('2d');

canvas.height = canvas.clientHeight;
canvas.width = canvas.clientWidth;

function particle(x, y, blur) {
  this.x = x;
  this.y = y;
  this.blur = blur;
  
  this.vx = Math.random()*5-1;
	this.vy = Math.random()*5-1;
}

var den = (density / 100) * (cloud_w + cloud_h);

var spores = [];
for (var i = 0; i < den; i++) {
  x = Math.floor((Math.random() * cloud_w) + cloud_posX);
  y = Math.floor((Math.random() * cloud_h) + cloud_posY);
  
  var blur = 1;
  spores.push(new particle(x, y, blur)); 
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var k = 0; k < spores.length; k++) {
    var p = spores[k];

    ctx.fillStyle = "white";
    ctx.fillRect(p.x, p.y, p.blur, p.blur);    

    //randomly random
    p.x += Math.random() * p.vx;
		p.y += Math.random() * p.vy;
  }
}

setInterval(draw, 40);