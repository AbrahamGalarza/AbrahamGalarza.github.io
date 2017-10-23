
var materias = [
    { nombre: "Tecnologias Web", creditos: 8, optativa: true },
    { nombre: "Pensamiento Computacional", creditos: 10, optativa: false },
    { nombre: "Compiladores", creditos: 10, optativa: false }
];

muestraMaterias();


function muestraMaterias(){
    var tabla = document.createElement('table');
    tabla.appendChild(crearEncabezado());
    document.body.appendChild(tabla);

    console.log('for-normalito');
    for(var i =0; i < materias.length; i++){
        console.log('Nombre: ' + materias[i].nombre);
        console.log('Creditos: ' + materias[i].creditos);
        console.log('Optativa: '+  materias[i].optativa);
    }
    console.log('forEach');
    materias.forEach(function (mat){
        console.log('Nombre: '+ mat.nombre);
        console.log('Creditos: ' + mat.creditos);
        console.log('Optativa: '+ mat.optativa ? 'Sí' : 'No');
    });
}

function crearEncabezado(){

        var encabezado = document.createElement('tr');
        var nombre = document.createElement('th');
        var textoNombre = document.createTextNode('Nombre');
        nombre.appendChild(textoNombre);
    
        var creditos = document.createElement('th');
        var textoCreditos = document.createTextNode('Creditos');
        creditos.appendChild(textoCreditos);
    
        var optativa = document.createElement('th');
        var textoOptativa = document.createTextNode('Optativa');
        optativa.appendChild(textoOptativa);
    
        encabezado.appendChild(nombre);
        encabezado.appendChild(creditos);
        encabezado.appendChild(optativa);
    
        return encabezado;
}


function crearFila(){

    var fila = document.createElement('tr');

    var nom = document.createElement('td');
    var textNom = document.createTextNode('Nombre');
    nom.appendChild(textNom);

    var cred = document.createElement('td');
    var textCred = document.createTextNode('');
    cred.appendChild(textCred);

    var opt = document.createElement('td');
    var textOpt = document.createElement('td');
    opt.appendChild(textOpt);
}  