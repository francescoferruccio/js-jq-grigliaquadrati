$(document).ready(function() {
  var griglia = $("#griglia");

  // creo un ciclo che crea 64 div in pagina
  for (var i = 0; i < 64; i++) {
    var prevContent = griglia.html();
    griglia.html(prevContent + "<div class='box'></div>");
  }

  // creo un ciclo che assegna in maniera random la classe red ai quadratini
  for (var j = 15; j > 0; j--) {
    // genero un numero casuale tra 1 e 64
    var index = Math.floor(Math.random() * 64 + 1);
    console.log("numero random " + j + ": " + index);
    // seleziono il div con l'indice random corrispondente
    var divSelected = $("#griglia div").eq(index);
    // controllo se il div selezionato ha gia la classe red
    // se ce l'ha incremento il contatore del ciclo per ripetere il ciclo
    // se non ce l'ha gliela assegno
    if (divSelected.hasClass("red")) {
      j++;
    } else {
      $("#griglia div").eq(index).addClass("red");
    }
  }









})
