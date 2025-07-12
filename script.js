function color(valor) {

  var number = document.getElementById("lastNumber");
  var item = document.getElementById(valor);
  var last-numbers = [];
  if (item.style.color != 'white') {
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
    if (valor != "linha" && valor != "cartela") {
      if(last-numbers.length <= 5)
      {
        last-numbers.pop();
        last-numbers.splice(0,0,valor);
      }
      number.innerHTML = last-numbers;
    }
  }
  else {
    item.style.backgroundColor = 'white';
    item.style.color = 'lightgray';
  }

}
