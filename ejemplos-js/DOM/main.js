var cajas = document.getElementsByName('div');

var btnAgregar = document.getElementById("btnAgregar");
/**Event Handler */
/*btnAgregar.onclick = agregaCaja;*/

/*Event Listener */
btnAgregar.addEventListener('click',function(){
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    agregaCaja(contenido);
});
//document.addEventListener('click', agregaCaja);
//document.addEventListener('click',prueba);

function agregaCaja(texto)
{
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class", "caja");
    var padre = document.getElementsByTagName('body');
    padre[0].appendChild(nuevo);
}

function prueba()
{
    window.alert("Hola");
}