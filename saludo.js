var boton = document.getElementById("miBoton");
var etiqueta = document.getElementById("numero");


boton.addEventListener("click", function() {
   
    var numeroActual = parseInt(etiqueta.textContent);
    etiqueta.textContent = (numeroActual + 1).toString();
});