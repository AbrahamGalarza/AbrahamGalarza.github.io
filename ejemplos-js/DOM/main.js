var btnAgregar = document.getElementById("btnAgregar");   //tenemos un boton de agregar le pasamos el id de button el html


var padre = document.getElementById("contenedor");

/*delegacion de eventos sirve para eliminar los hijos*/
padre.addEventListener('click', function(evento) {
    var hijo = evento.target;
    console.log(hijo);
    if(hijo != padre) //vañidar que no se hixo click al mismo contenedor padre osea asi mismo
    {
        this.removeChild(hijo); //elimina hijos del nodo padre
    }
    
    
})
/*var cajas = document.getElementsByClassName("caja");  //creo una variable de cajas
var padre = document.getElementById("contenedor");
for (var i=0; i<3; i++)
    {
        cajas[i].addEventListener('click', function() {
            padre.removeChild(this);
            })
    }*/



btnAgregar.addEventListener('click', function(){
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    agregaCaja(contenido);

});



/*document.addEventListener('click',agregaCaja);
document.addEventListener('click',prueba);
document.addEventListener('click',function (){window.alert('hola2');})*/

function agregaCaja(texto){
   // var cajas = document.getElementsByTagName('div');
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class","caja");
    var padre = document.getElementById('contenedor');
    padre.appendChild(nuevo);

  /*  nuevo.addEventListener('click', function() {
        padre.removeChild(this);
        })*/


}

/*function prueba()
{
    window.alert("hola");
}*/