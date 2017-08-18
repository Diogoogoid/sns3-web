/*
var x = "10";
var y = "A dona Aranha subiu pela parede...";
var z = soma(x);
console.log(`SOMA :: ${z}`);

function soma(a, b=10){
  return a + b;
}
*/

var teste = function(evt){
  let largura = window.innerWidth;
  let altura = window.innerHeight;
  let calcX = (Math.round((evt.x / largura) * 255));
  let calcY = (Math.round((evt.y / altura) * 255));
  //let calcX = Math.round((x/largura) * 255);
  //let calcY = Math.round((y/altura) * 255);

  let cor = `rgb(${calcX},${calcY},0)`;
  document.body.style.background = cor;
};

window.addEventListener("click", teste);
