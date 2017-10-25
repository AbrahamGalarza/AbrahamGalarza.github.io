var form = document.getElementById('for');
var boton = document.getElementById('btnBuscar');
var existetabla2 = false;

var ordenNombre = false;
var ordenCreditos = false;
var ordenOptativa = false;




boton.onclick = function(e){
    var palabra = form.buscador.value;
    if(palabra.length == 0)
    {
        //alert('Introduce un nombre para buscar');
    }
    else{
        muestraMateriasSearch(palabra);
    }
    //alert(palabra);
}

var filtro = materias;


function filtrarMaterias(){

}

var materias = [
    {nombre: "EDA-A", creditos: 12, optativa:false},
    { nombre: "Tecnologias Web", creditos: 8, optativa: true },
    { nombre: "Pensamiento Computacional", creditos: 10, optativa: false },
    { nombre: "Compiladores", creditos: 10, optativa: false },
    { nombre: "Software A", creditos: 10, optativa: false },
    { nombre: "Introduccion a la programacion", creditos : 10,optativa : false}
];


muestraMaterias();

function aaa(nombre)
{
    alert(nombre);
}


function muestraMateriasSearch(nombre)
{
    //alert(existetabla2);
    
    var tabla2 = document.createElement('table');//Crea elemento tabla
    tabla2.setAttribute('id','tabla2'); //Asigna un ID
    tabla2.appendChild(crearEncabezado());//Agrega nodo en donde crearEncabezado regresa el encabezado  

    materias.forEach(function (mat){
        var nom = mat.nombre;
        var nombr = nombre.toUpperCase();
        nom = nom.toUpperCase();
        if (nom.search(nombr) != -1){
            var renglon2 = document.createElement('tr');
            var col1 = document.createElement('td');
            var text1 = document.createTextNode(mat.nombre);
            col1.appendChild(text1);

            var col2 = document.createElement('td');
            var text2 = document.createTextNode(mat.creditos);
            col2.appendChild(text2);

            var col3 = document.createElement('td');
            var text3 = document.createTextNode(mat.optativa? 'SI':'NO');
            col3.appendChild(text3);

            renglon2.appendChild(col1);
            renglon2.appendChild(col2);
            renglon2.appendChild(col3);

            tabla2.appendChild(renglon2);
        }

    });
    var tablaant = document.getElementById('tabla2');
    document.body.appendChild(tabla2);
    tablaant.remove();
}


function muestraMaterias(){
    var tabla = document.createElement('table');//Crea elemento tabla
    tabla.setAttribute('id','tabla'); //Asigna un ID
    tabla.appendChild(crearEncabezado());//Agrega nodo en donde crearEncabezado regresa el encabezado
    document.body.appendChild(tabla); //Agrega nodo

    //Recorrer Arreglo con forEach

    materias.forEach(function (mat){
        var nom = mat.nombre;
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
        var optativa = document.createTextNode(mat.optativa ? 'SI':'NO');
        columna3.appendChild(optativa);

        renglon.appendChild(columna1); //Agrega Columna 1 a renglon nombre
        renglon.appendChild(columna2); //Agrega Columna 2 a renglon 
        renglon.appendChild(columna3); //Agrega Columna 3 a renglon

        tabla.appendChild(renglon);
    });

    var tablacreada = document.getElementById('tabla');
    tablacreada.addEventListener('click', function(e) {
        var encabezado = e.target;
        if(encabezado == document.getElementById('idnombre')) //Si es en nombre
        {
            if(ordenNombre == true){
            materias.sort(function(a,b){
                if(a.nombre > b.nombre)
                return 1; //mayor
                if(a.nombre < b.nombre)
                return -1; //menor
                else
                return 0; //iguales
            });
            ordenNombre = false;
        }
        else {
            materias.sort(function(a,b){
                if(a.nombre > b.nombre)
                return 1; //mayor
                if(a.nombre < b.nombre)
                return -1; //menor
                else
                return 0; //iguales
            }).reverse();
            ordenNombre = true;
        }
            var tabla = document.getElementById('tabla');
            tabla.remove(); //Elimina tabla 
            muestraMaterias(); //agrega la nueva tabla con nueva organizacion
        }
        if(encabezado == document.getElementById('idcreditos')) //Si es en creditos
        {
            if(ordenCreditos == true){
                materias.sort((a,b) => a.creditos - b.creditos).reverse();
                ordenCreditos = false;
            }
            else {
                materias.sort((a,b) => a.creditos - b.creditos);
                ordenCreditos = true;
            }
            

            var tabla = document.getElementById('tabla');
            tabla.remove(); //Elimina tabla
            muestraMaterias(); //agrega la nueva tabla con nueva organizacion
        }
        if(encabezado == document.getElementById('idoptativa')) //Es en optativa
        {
            if(ordenOptativa == true)
            {
                materias.sort((a,b) => a.optativa - b.optativa).reverse();
                ordenOptativa = false;
            }
            else{
                materias.sort((a,b) => a.optativa - b.optativa);
                ordenOptativa = true;
            }
            
            var tabla = document.getElementById('tabla');
            tabla.remove();
            muestraMaterias();
        }
    }
    );

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

        var encabezado = document.createElement('tr'); //renglon

        var nombre = document.createElement('th'); //columna tipo th
        var textoNombre = document.createTextNode('Nombre');
        nombre.appendChild(textoNombre);    //Agrega columna para identificar campo nombre
        nombre.setAttribute('id','idnombre');   //Agrega atributo para utilizar con el click

        var creditos = document.createElement('th');    //renglon
        var textoCreditos = document.createTextNode('Creditos');    //columna tipo th
        creditos.appendChild(textoCreditos);    //Agrega columna para identificar campo creditos
        creditos.setAttribute('id','idcreditos');   //Agrega atributo para utilizar con el click
    
        var optativa = document.createElement('th');    //renglon
        var textoOptativa = document.createTextNode('Optativa');    //columna tipo th
        optativa.appendChild(textoOptativa);    //Agrega columna para identificar campo optativa
        optativa.setAttribute('id','idoptativa');   //Agrega atributo para utilizar con el click
    
        encabezado.appendChild(nombre); //Agrega al encabezado los campos 
        encabezado.appendChild(creditos);
        encabezado.appendChild(optativa);
    
        return encabezado;
}