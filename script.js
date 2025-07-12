function color(valor) {

  var number = document.getElementById("lastNumber");
  var item = document.getElementById(valor);
  var lastNumbers = [];
  if (item.style.color != 'white') {
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
    if (valor != "linha" && valor != "cartela") {
      if(lastNumbers.length <= 5)
      {
        lastNumbers.pop();
        lastNumbers.splice(0,0,valor);
      }
      number.innerHTML = lastNumbers;
    }
  }
  else {
    item.style.backgroundColor = 'white';
    item.style.color = 'lightgray';
  }

}
