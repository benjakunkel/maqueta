window.onload = function () {
  let contador = 1;
  document.getElementById("+").onclick = function () {
      contador++;
      document.getElementById("cantidad").innerHTML = contador
  }
  document.getElementById("-").onclick = function () {
      if (contador > 0) {
        contador--;
      }
      document.getElementById("cantidad").innerHTML = contador
  }
  
  let contador2 = 1;
  document.getElementById("++").onclick = function () {
      contador2++;
      document.getElementById("cantidad2").innerHTML = contador2
  }
  document.getElementById("--").onclick = function () {
      if (contador2 > 0) {
        contador2--;
      }
      document.getElementById("cantidad2").innerHTML = contador2
  }
}
