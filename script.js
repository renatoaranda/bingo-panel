var lastNumbers = [];
function blink(item){
  let count = 0;
  const intervalId = setInterval(function() {
    item.style.visibility = (item.style.visibility === "hidden" ? "visible" : "hidden");
    if (count++ === 7) {
      clearInterval(intervalId);
    }
  }, 400);
}

function color(valor) {

  var number = document.getElementById("lastNumber");
  var item = document.getElementById(valor);
  
  if (item.style.color != 'white') {
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
      
    if (valor != "linha" && valor != "cartela") {
      blink(item);
        
      if(lastNumbers.length = 5){
        lastNumbers.pop();
      }
      lastNumbers.splice(0,0,valor); 
    }
      else {
          document.getElementById("linha").style.visibility = "hidden";
          document.getElementById("cartela").style.visibility = "hidden";
          document.getElementById(valor).style.visibility = "visible";
      }
  }
  else {
    if (valor != "linha" && valor != "cartela") {
      let index = lastNumbers.indexOf(valor);
      if (index > -1) {
          lastNumbers.splice(index, 1);
      }
    }
      else {
          document.getElementById("linha").style.visibility = "visible";
          document.getElementById("cartela").style.visibility = "visible";
      }
    item.style.backgroundColor = 'white';
    item.style.color = 'lightgray';
  }
  number.innerHTML = lastNumbers.toString().replaceAll(',',' ');
}
