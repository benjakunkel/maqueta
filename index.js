window.onload = function () {
  let contador = 1;
  let total = 35.99
  let cosasEnElCarro= 2
  let compraTotal = 72
    
  document.getElementById("+").onclick = function () {
      contador++;
      total+=35.99
      cosasEnElCarro+=1
      compraTotal+=35.99
      document.getElementById("cantidad").innerHTML = contador
      document.getElementById("total1").innerHTML = "$" + Math.round(total)
      document.getElementById("cantidades").innerHTML = cosasEnElCarro
      document.getElementById("compraTotal").innerHTML = "$" + Math.round(compraTotal)
      document.getElementById("compraParcial").innerHTML = "$" + Math.round(compraTotal)

  }
  document.getElementById("-").onclick = function () {
      if (contador > 0) {
        contador--;
        total-=35.99
        cosasEnElCarro-=1
        compraTotal-=35.99
      }
      document.getElementById("cantidad").innerHTML = contador
      document.getElementById("total1").innerHTML = "$" + Math.round(total)
      document.getElementById("cantidades").innerHTML = cosasEnElCarro
      document.getElementById("compraTotal").innerHTML = "$" + Math.round(compraTotal)
      document.getElementById("compraParcial").innerHTML = "$" + Math.round(compraTotal)



  }
  
  let contador2 = 1;
  let total2 = 35.99
  document.getElementById("++").onclick = function () {
      contador2++;
      total2+=35.99
      compraTotal+=35.99
      cosasEnElCarro+=1
      document.getElementById("cantidad2").innerHTML = contador2
      document.getElementById("total2").innerHTML = "$" + Math.round(total2)
      document.getElementById("cantidades").innerHTML = cosasEnElCarro
      document.getElementById("compraTotal").innerHTML = "$" + Math.round(compraTotal)
      document.getElementById("compraParcial").innerHTML = "$" + Math.round(compraTotal)

  }

  document.getElementById("--").onclick = function () {
      if (contador2 > 0) {
        contador2--;
        total2-=35.99
        compraTotal-=35.99
        cosasEnElCarro-=1
      }
      document.getElementById("cantidad2").innerHTML = contador2
      document.getElementById("total2").innerHTML = "$" + Math.round(total2)
      document.getElementById("cantidades").innerHTML = cosasEnElCarro
      document.getElementById("compraTotal").innerHTML = "$" + Math.round(compraTotal)
      document.getElementById("compraParcial").innerHTML = "$" + Math.round(compraTotal)
  }
  
}
