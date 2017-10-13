var btnAgregar = document.getElementById("btnAgregar");

var padre = document.getElementById('contenedor');
padre.addEventListener('click', function(evento)
{
    var hijo = evento.target;
    
    if(hijo!=padre)
    {
        this.removeChild(hijo);
    }
}
);
/*
var cajas = document.getElementsByClassName('caja');
for(var i=0;i<cajas.length;i++)
{
    cajas[i].addEventListener('click',function()
    {
        padre.removeChild(this);
    });
}*/
//cajas[0].addEventListener('click',function()


/*
btnAgregar.onclick = agregaCaja;
btnAgregar.onclick = prueba;
btnAgregar.onclick = function()
{
    window.alert('Ejecutando funcion anonima');
}*/
/* envent listener*/
btnAgregar.addEventListener('click', function(){
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    if(contenido!="")
    {
        agregaCaja(contenido);
    }
    
}
);
//document.addEventListener('click',agregaCaja);
/*document.addEventListener('click',prueba);
document.addEventListener('click', function() {
    window.alert('funcion anonima');
}
);*/
function agregaCaja(texto)
{
    window.alert('agregando');
var nuevo = document.createElement('div');
var texto = document.createTextNode(texto);
nuevo.appendChild(texto);
nuevo.setAttribute("class","caja");
var padre = document.getElementsById('contenedor');
padre.appendChild(nuevo);

}

function prueba()
{
    window.alert('hola');
}



//agregaCaja();