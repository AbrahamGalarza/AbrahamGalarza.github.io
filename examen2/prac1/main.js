var form = document.getElementById('form');
var boton = document.getElementById('boton');

var objeto = {nombre:'Graficacion',creditos:8};

var materias = [
    {nombre: 'Compiladores',creditos:10},
    {nombre: 'Estructuras', creditos:7},
    {nombre: 'Arquitectura',creditos:3}
];
materias.push(objeto);

boton.onclick = function(e)
{
    var texto = form.nombre.value;
    alert(texto);

    var tabla = document.createElement('table');
    var ren = document.createElement('tr');

    var colNombre = document.createElement('th');
    var NombreTexto = document.createTextNode('Nombre');
    colNombre.appendChild(NombreTexto);

    var colCreditos = document.createElement('th');
    var CreditosTexto = document.createTextNode('Creditos');
    colCreditos.appendChild(CreditosTexto);
    var colOptativa = document.createElement('th');
    var OptativaTexto = document.createTextNode('Creditos');
    colOptativa.appendChild(OptativaTexto);

    ren.appendChild(colNombre);
    ren.appendChild(colCreditos);
    ren.appendChild(colOptativa);

    tabla.appendChild(ren);

    var parrafo = document.createElement('p');
    var textoparrafo = document.createTextNode(texto);
    parrafo.appendChild(textoparrafo);
    parrafo.setAttribute('id','cuadro');

    /*materias.sort(function(a,b){
        return a.creditos - b.creditos;
    });*/

    var metnew = materias.filter(function(mat){
        return mat.nombre.includes('t');
    });

    materias.sort(function(a,b){
        if(a.nombre < b.nombre)
        return -1;
        else if(a.nombre > b.nombre)
        return 1;
        else return 0;
    });

    document.body.appendChild(tabla);
    document.body.appendChild(parrafo);
}