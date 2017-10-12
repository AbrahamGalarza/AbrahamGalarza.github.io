var cajas = document.getElementsByName('div');

var btnAgregar = document.getElementById("btnAgregar");
/**Event Handler */
/*btnAgregar.onclick = agregaCaja;*/

/*Event Listener */
btnAgregar.addEventListener('click',function(){
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    if(contenido != '')
        agregaCaja(contenido);
});
//document.addEventListener('click', agregaCaja);
//document.addEventListener('click',prueba);


var padre = document.getElementById("contenedor");
//Delegacion de eventos
padre.addEventListener('click', function(evento){
    var hijo = evento.target;
    if(hijo != padre){//Validar que no se hizo click en el contendor
        this.removeChild(hijo);
    }
});
/*
var cajas  = document.getElementsByClassName("caja");
for(var i = 0; i < cajas.length; i++)
{
    cajas[i].addEventListener('click',function() {
        padre.removeChild(this);
    });
}*/

function agregaCaja(texto)
{
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class", "caja");
    var padre = document.getElementById('body');
    padre[0].appendChild(nuevo);
}

function prueba()
{
    window.alert("Hola");
}