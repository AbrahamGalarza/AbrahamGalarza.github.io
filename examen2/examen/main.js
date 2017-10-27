var form = document.getElementById('form');
var botonAdd = document.getElementById('agregar');
var botonDel = document.getElementById('eliminar');



var ordenDescripcion = false;
var ordenPriorida = false;

var tareas =[{tarea:'Examen',descripcion:'Hacer el examen de Tecnologias Web',prioridad:2,pendiente:false},
{tarea:'Tarea compiladores',descripcion:'Terminar LL1',prioridad:1,pendiente:true},
{tarea:'Tarea archivos',descripcion:'Avance',prioridad:2,pendiente:false},
{tarea:'Comprar despensa',descripcion:'Comprar Leche y cereal',prioridad:3,pendiente:true},
{tarea:'GYM',descripcion:'Hacer cardio y pesas',prioridad:1,pendiente:false},
{tarea:'Cita Médica',descripcion:'Ir al médico a las ocho p.m.',prioridad:3,pendiente:true}
];

muestratabla();

form.tarea.addEventListener('keyup',function(e){
 
    /*if((e.which >= 65 && e.which <= 90))
    {
        alert(e.which);
    }*/
});

form.busqueda.addEventListener('keyup',function(e){
    var cadena = form.busqueda.value;
    cadena = cadena.toLowerCase();
    if(cadena == '')
    {
        //alert('vacia');
        var tabla = document.getElementById('tabla');
        tabla.remove(); //Elimina tabla
        muestratabla();
    }else if(cadena == 'baja')
    {
        var tabla = document.getElementById('tabla');
        tabla.remove();
        var tareasFiltradas = tareas.filter(function(mat){
            return mat.prioridad == 1;
        });
        //muestraTablaFiltrada(tareasFiltradas);
        muestraTablaFiltrada(tareasFiltradas);
    }
    else if(cadena == 'media')
    {
        var tabla = document.getElementById('tabla');
        tabla.remove();
        var tareasFiltradas = tareas.filter(function(mat){
            return mat.prioridad == 2;
        });
        //muestraTablaFiltrada(tareasFiltradas);
        muestraTablaFiltrada(tareasFiltradas);
    }
    else if(cadena == 'alta')
        {
            var tabla = document.getElementById('tabla');
            tabla.remove();
            var tareasFiltradas = tareas.filter(function(mat){
                return mat.prioridad == 3;
            });
            //muestraTablaFiltrada(tareasFiltradas);
            muestraTablaFiltrada(tareasFiltradas);
        }
    else{
        //alert('cambia a no vacia');
        var tabla = document.getElementById('tabla');
        tabla.remove();
        var tareasFiltradas = tareas.filter(function(mat){
            return mat.descripcion.toLowerCase().includes(cadena);
        });
        //muestraTablaFiltrada(tareasFiltradas);
        muestraTablaFiltrada(tareasFiltradas);
        
    }

});


function IsLetter(letra) {
    
        var charCode;
        charCode = letra.keyCode;
        status = charCode;
        if ((charCode >= 65 && charCode <= 90)||(charCode >= 97 && charCode <= 122) || charCode == 32 )
            return true;
        else
            if (charCode == 65)
                return true;
            else
                return false;
    }

botonDel.onclick = function(e) //Borrar los marcados como completados
{
    for(var i = 0; i < tareas.length; i++)
    {
        if(tareas[i].pendiente == true) //Si completada igual a true entonces eliminar
        {
            tareas.splice(i,1);
            i--;
        }
    }

    var tabla = document.getElementById('tabla');
    tabla.remove(); //Elimina tabla
    muestratabla();

}

botonAdd.onclick = function(e)
{
    var descr = form.descripcion.value;
    if(descr.length != 0){
    var tar = form.tarea.value;
    
    var prio = document.getElementById('prioridad');
    var valuePrio = form.tipo.value;
    var pri=0;
    if(valuePrio == 'Alta')
        pri=3;
    else if(valuePrio == 'Media')
        pri=2;
    else if(valuePrio == 'Baja')
        pri=1;
    //alert(tar);
    //alert(descr);
    //alert(valuePrio);

    var nuevo = {tarea:tar,descripcion:descr,prioridad:pri,pendiente:false}
    tareas.push(nuevo);
    var tabla = document.getElementById('tabla');
    tabla.remove(); //Elimina tabla
    muestratabla();
    }
    else {
        alert('No puedes agregar una tarea sin descripción');
    }
}



function muestraTablaFiltrada(tareas1)
{
    var tabla = document.createElement('table');//Crea elemento tabla
    tabla.setAttribute('id','tabla'); //Asigna un ID
    tabla.appendChild(crearEncabezado());//Agrega nodo en donde crearEncabezado regresa el encabezado
    document.body.appendChild(tabla);

    tareas1.forEach(function(mat){
        var renglonn = document.createElement('tr');

        var tareaa = document.createElement('td');
        var textotareaa = document.createTextNode(mat.tarea);
        tareaa.appendChild(textotareaa);

        var descripcionn = document.createElement('td');
        var textodescripcionn = document.createTextNode(mat.descripcion);
        descripcionn.appendChild(textodescripcionn);

        var prioridadd = document.createElement('td');
        var prioridadname ="";
        if(mat.prioridad == 1)
            prioridadname="Baja";
        else if(mat.prioridad == 2)
            prioridadname="Media";
        else if(mat.prioridad == 3)
            prioridadname ="Alta";
        var textoprioridadd = document.createTextNode(prioridadname);
        prioridadd.appendChild(textoprioridadd);

        var pendientee = document.createElement('td');
        var textopendientee = document.createTextNode(mat.pendiente ? 'SI':'NO');
        pendientee.appendChild(textopendientee);

        renglonn.appendChild(tareaa);
        renglonn.appendChild(descripcionn);
        renglonn.appendChild(prioridadd);
        renglonn.appendChild(pendientee);

        tabla.appendChild(renglonn);
    });

    var tablacreada = document.getElementById('tabla');
    tablacreada.addEventListener('click', function(e){
        var encabezado = e.target;
        if(encabezado == document.getElementById('iddescripcion'))
        {
           if(ordenDescripcion == false)
           {
            //alert('sadasad');
            tareas1.sort(function(a,b){
                if(a.descripcion < b.descripcion)
                    return -1;
                else if(a.descripcion > b.descripcion)
                    return 1;
                else return 0;
            });
            ordenDescripcion = true;
           }
           else if(ordenDescripcion == true)
           {
            //alert('sadasad');
            tareas1.sort(function(a,b){
                if(a.descripcion < b.descripcion)
                    return -1;
                else if(a.descripcion > b.descripcion)
                    return 1;
                else return 0;
            }).reverse();
            ordenDescripcion = false;
           }
        }
        if(encabezado == document.getElementById('idprioridad'))
        {
            //alert('prioridad');
            if(ordenPriorida == false)
            {
                tareas1.sort(function(a,b){
                    return a.prioridad - b.prioridad;
                });
                ordenPriorida = true;
            }else if(ordenPriorida == true)
            {
                tareas1.sort(function(a,b){
                    return a.prioridad - b.prioridad;
                }).reverse();
                ordenPriorida = false;
            }
        }
        var tabla = document.getElementById('tabla');
        tabla.remove();
        muestratabla();
    });
}


function muestratabla()
{
    var tabla = document.createElement('table');//Crea elemento tabla
    tabla.setAttribute('id','tabla'); //Asigna un ID
    tabla.appendChild(crearEncabezado());//Agrega nodo en donde crearEncabezado regresa el encabezado
    document.body.appendChild(tabla);

    tareas.forEach(function(mat){
        var renglonn = document.createElement('tr');

        var tareaa = document.createElement('td');
        var textotareaa = document.createTextNode(mat.tarea);
        tareaa.appendChild(textotareaa);

        var descripcionn = document.createElement('td');
        var textodescripcionn = document.createTextNode(mat.descripcion);
        descripcionn.appendChild(textodescripcionn);

        var prioridadd = document.createElement('td');
        var prioridadname ="";
        if(mat.prioridad == 1)
            prioridadname="Baja";
        else if(mat.prioridad == 2)
            prioridadname="Media";
        else if(mat.prioridad == 3)
            prioridadname ="Alta";
        var textoprioridadd = document.createTextNode(prioridadname);
        prioridadd.appendChild(textoprioridadd);

        var pendientee = document.createElement('td');
        var textopendientee = document.createTextNode(mat.pendiente ? 'SI':'NO');
        pendientee.appendChild(textopendientee);

        renglonn.appendChild(tareaa);
        renglonn.appendChild(descripcionn);
        renglonn.appendChild(prioridadd);
        renglonn.appendChild(pendientee);

        tabla.appendChild(renglonn);
    });

    var tablacreada = document.getElementById('tabla');
    tablacreada.addEventListener('click', function(e){
        var encabezado = e.target;
        if(encabezado == document.getElementById('iddescripcion'))
        {
           if(ordenDescripcion == false)
           {
            //alert('sadasad');
            tareas.sort(function(a,b){
                if(a.descripcion < b.descripcion)
                    return -1;
                else if(a.descripcion > b.descripcion)
                    return 1;
                else return 0;
            });
            ordenDescripcion = true;
           }
           else if(ordenDescripcion == true)
           {
            //alert('sadasad');
            tareas.sort(function(a,b){
                if(a.descripcion < b.descripcion)
                    return -1;
                else if(a.descripcion > b.descripcion)
                    return 1;
                else return 0;
            }).reverse();
            ordenDescripcion = false;
           }
        }
        if(encabezado == document.getElementById('idprioridad'))
        {
            //alert('prioridad');
            if(ordenPriorida == false)
            {
                tareas.sort(function(a,b){
                    return a.prioridad - b.prioridad;
                });
                ordenPriorida = true;
            }else if(ordenPriorida == true)
            {
                tareas.sort(function(a,b){
                    return a.prioridad - b.prioridad;
                }).reverse();
                ordenPriorida = false;
            }
        }
        var tabla = document.getElementById('tabla');
        tabla.remove();
        muestratabla();
    });
}

function crearEncabezado(){
    
            var encabezado = document.createElement('tr'); //renglon
    
            var tarea = document.createElement('th'); 
            var textoTarea = document.createTextNode('Nombre');
            tarea.appendChild(textoTarea);
            tarea.setAttribute('id','idtarea');
    
            var descripcion = document.createElement('th');
            var textoDescripcion = document.createTextNode('Descripción'); 
            descripcion.appendChild(textoDescripcion);
            descripcion.setAttribute('id','iddescripcion');
        
            var prioriadad = document.createElement('th');    
            var textoPrioridad = document.createTextNode('Prioridad');
            prioriadad.appendChild(textoPrioridad);
            prioriadad.setAttribute('id','idprioridad');

            var pendiente = document.createElement('th');    
            var textoPendiente = document.createTextNode('Completada');
            pendiente.appendChild(textoPendiente);
            pendiente.setAttribute('id','idPendiente');

            encabezado.appendChild(tarea);
            encabezado.appendChild(descripcion);
            encabezado.appendChild(prioriadad);
            encabezado.appendChild(pendiente);
        return encabezado;
}