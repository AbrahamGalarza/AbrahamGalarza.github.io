var materias = [
    { nombre: "Tecnologias Web", creditos: 8, optativa: true },
    { nombre: "Pensamiento Computacional", creditos: 10, optativa: false },
    { nombre: "Compiladores", creditos: 10, optativa: false }
];

muestraMaterias();


function muestraMaterias(){
    var tabla = document.createElement('table');//Crea elemento tabla
    tabla.setAttribute('id','tabla'); //Asigna un ID
    tabla.appendChild(crearEncabezado());//Agrega nodo
    document.body.appendChild(tabla); //Agrega nodo

    //Recorrer Arreglo con forEach

    materias.forEach(function (mat){

        var renglon = document.createElement('tr');

        ///Columna Nombre
        var columna1 = document.createElement('td');
        var nombre = document.createTextNode(mat.nombre);
        columna1.appendChild(nombre);

        //Columna Creditos
        var columna2 = document.createElement('td');
        var creditos = document.createTextNode(mat.creditos);
        columna2.appendChild(creditos);

        //Columna Optativa
        var columna3 = document.createElement('td');
        var optativa = document.createTextNode(mat.optativa);
        columna3.appendChild(optativa);

        renglon.appendChild(columna1); //Agrega Columna 1 a renglon nombre
        renglon.appendChild(columna2); //Agrega Columna 2 a renglon 
        renglon.appendChild(columna3); //Agrega Columna 3 a renglon

        tabla.appendChild(renglon);

    });

    /*console.log('for-normalito');
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
    });*/
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