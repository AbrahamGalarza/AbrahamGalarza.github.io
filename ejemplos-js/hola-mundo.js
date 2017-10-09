document.write("Hola desde JavaScript");
imprimeNumeros(5);
imprimeNumeros(15);

/*Notacion literal*/
var arreglo = [3,5,7];

/*Notacion constructor de Arreglo*/
var arreglo2 = new Array(9,11,13);

/*Notacion literal de Objetos */
var triangulo = {
    base : 3,
    altura : 5,
    area : function(){
        console.log("area = " + this.base*this.altura/2);
    }
}
triangulo.area();
window.alert("Yo aquí dando lata");
console.log("Hola para la consola");
imprimeNumeros2(arreglo);

function imprimeNumeros(max)
{
    for(var i=0; i < max; i++)
    {
        document.write(i);
        document.write('<br>');
    }
}

function imprimeNumeros2(arreglo)
{
    for(var i=0; i < arreglo.length; i++)
    {
        document.write(arreglo[i]);
        document.write('<br>');
    }
}