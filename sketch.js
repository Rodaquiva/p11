var weight = [35,38,42,45,43,34,36,41,48,32];
var suma = 0;
var promedio;

function setup() {
  createCanvas(400,400);
  for (var i=0; i<weight.length; i++){
    suma = suma+weight[i];
  }
  promedio = suma/weight.length;
  console.log(promedio);
  
}

function draw() 
{
  background(30);
}

 

