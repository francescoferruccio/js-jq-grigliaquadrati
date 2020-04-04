$(document).ready(function() {
  var griglia = $("#griglia");

  // creo un ciclo che crea 64 div in pagina
  for (var i = 0; i < 64; i++) {
    var prevContent = griglia.html();
    griglia.html(prevContent + "<div class='box'></div>");
  }









})
