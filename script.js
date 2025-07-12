var lastNumbers = [];
function color(valor) {

  var number = document.getElementById("lastNumber");
  var item = document.getElementById(valor);
  
  if (item.style.color != 'white') {
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
    if (valor != "linha" && valor != "cartela") {
      if(lastNumbers.length = 5){
        lastNumbers.pop();
      }
      lastNumbers.splice(0,0,valor); 
      
    }
  }
  else {
    if (valor != "linha" && valor != "cartela") {
      let index = lastNumbers.indexOf(valor);
      if (index > -1) {
          lastNumbers.splice(index, 1);
      }
    }
    item.style.backgroundColor = 'white';
    item.style.color = 'lightgray';
  }
  number.innerHTML = lastNumbers.toString().replaceAll(',',' ');
}
