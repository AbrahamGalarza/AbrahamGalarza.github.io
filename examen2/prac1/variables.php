<?php
    //Este es un comentario de una linea
    /*Este es un comentario 
    de varias lineas*/
    #Estes tambien es un comentario al estilo Perl

    #Todas las variables se les antepone el simbolo $ a su nombre
    
    #variables Enteras
    $varEntera = 1;

    #variables flotantes
    $varFlotante = 3.1416;

    #variables de cadena
    $varCadena = 'hola';
    $varCadena2 = "mundo";

    echo $varEntera;
    echo '<br>';
    echo $varFlotante;
    echo '<br>';
    echo $varCadena;
    echo '<br>';
    echo $varCadena2;
    echo '<br>';
    #interpolacion de cadenas

    $variableInterpolada = "Una cadena $varFlotante";
    echo $variableInterpolada;
    echo '<br>';
    $variableNoInterpolada = 'Una cadena $varFlotante';
    echo $variableNoInterpolada;
    echo '<br>';

    #Conatenacion de cadenas
    # Se utiliza el operador . para concatenar cadenas
    echo $varCadena. ' ' . $varCadena2.'<br>';

    #variables Booleanas
    $varBooleana = true;
    echo $varBooleana . '<br>';

    #variables Nulas
    $varNula = null;
    echo $varNula . '<br>';

    #varibles arreglo
    $varArreglo = [123,10.05,"UASLP", true];
    var_dump($varArreglo);
    echo '<br>';

    #Los arreglos en PHP son tablas asociativas (Llave, valor)
    $varColores = ['color1' => 'red','color2' => 'green', 'color3' => 'blue'];
    var_dump($varColores);
    echo '<br>';

    echo $varColores['color1'] . '<br>';

    echo 'Tamaño del arreglo de colores' .' ' . count($varColores) . '<br>';

    #Imprimir loa elementos del arreglo uno por uno en el ciclo

    #for-tradicional
    for($i = 0; $i < count($varArreglo); $i++)
    {
        echo $varArreglo[$i] . '<br>';
    }

    #for-each
    foreach($varArreglo as $elem)
    {
        echo $elem . '<br>';
    }

    foreach($varColores as $elem)
    {
        echo $elem . '<br>';
    }

    foreach($varColores as $llave=>$val)
    {
        echo 'Llave = ' . $llave . ' Valor = '. $val . '<br>';
    }
?>