$(document).ready(function() {
  var griglia = $("#griglia");
  var punteggioRosso = 0;
  var punteggioVerde = 0;

  // creo un ciclo che crea 64 div in pagina
  for (var i = 0; i < 64; i++) {
    griglia.append("<div class='box'><i class='fas fa-question fa-3x'></i></div>");
  }

  // creo un ciclo che assegna in maniera random la classe red ai quadratini
  for (var j = 15; j > 0; j--) {
    // genero un numero casuale tra 1 e 64
    var index = Math.floor(Math.random() * 64);
    // console.log("numero random " + j + ": " + index);
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

  // evento al click sui quadratini
  $(".box").click(
    function () {
      // controllo se ho già cliccato su quel quadratino
      if (!$(this).hasClass("cliccato")) {
        // se non ho cliccato e ha la classe "red" aumento il punteggio rosso
        // altrimento aumento il punteggio verde
        // in entrambi i casi assegno la classe corrispondente per cambiare colore
        if ($(this).hasClass("red")) {
          $(this).addClass("clickedRed");
          $(this).html("<i class='fas fa-times fa-3x'></i>");
          punteggioRosso++;
          // console.log("rosso: " + punteggioRosso);
          $(".rosso").text(punteggioRosso);
        } else {
          $(this).addClass("clickedGreen");
          $(this).html("<i class='fas fa-check fa-3x'></i>");
          punteggioVerde++;
          // console.log("verde: " + punteggioVerde);
          $(".verde").text(punteggioVerde);
        }
      }
      $(this).addClass("cliccato");
    }
  );

})
