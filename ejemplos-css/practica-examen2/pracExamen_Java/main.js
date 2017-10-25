var boton = document.getElementById('boton');
var form = document.getElementById('fo');

boton.onclick = function(e){
    var texto = form.nombre.value;
    alert(texto);
    agregaTabla();
}

function agregaTabla(){

    var tabla = document.createElement('table');

    var renglon = document.createElement('tr');
    
         //Crar primer celda
         var col1 = document.createElement('th');
         var text1 = document.createTextNode('Nombre');
         col1.appendChild(text1);
    
         var col2 = document.createElement('th');
         var text2 = document.createTextNode('Creditos');
         col2.appendChild(text2);
    
         var col3 = document.createElement('th');
         var text3 = document.createTextNode('Optativa');
         col3.appendChild(text3);
    
         renglon.appendChild(col1);
         renglon.appendChild(col2);
         renglon.appendChild(col3);
    
         tabla.appendChild(renglon);
         document.body.appendChild(tabla);
    
}