function color(valor) {

  var number = document.getElementById("lastNumber");
  var item = document.getElementById(valor);
  if (item.style.color != 'white') {
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
    if (valor != "linha" && valor != "cartela") {
      number.innerHTML = valor;
    }
  }
  else {
    item.style.backgroundColor = 'white';
    item.style.color = 'lightgray';
  }

}