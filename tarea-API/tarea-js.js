$(function () {
    $('#form-consultar').on('submit', function (evento) {
        var genero = $("input[name='genero']:checked").val();
        var cantidad = $('#numero').val();
        var pais = $('#pais').val();
        evento.preventDefault()
        $.get('https://uinames.com/api/', { amount: cantidad, gender: genero, region: pais, ext: true }, function (respuesta) {
            var cadena = '<table class="table table-hover table-striped" id="usuarios-2">'+
            '<tr>  <th>Foto</th> <th>Nombre</th> <th>Apellido</th> <th>Genero</th> <th>Edad</th> <th>Correo</th> </tr>';
            $('#usuarios-2').html('');
            console.clear();
            respuesta.forEach(function (elemento) {
                $('#usuarios-2').append()
                console.log('name :' + elemento.name + ', surname: ' + elemento.surname + ', gender: ' + elemento.gender + ', age: ' + elemento.age + ', email: ' + elemento.email + ', photo: ' + elemento.photo);
                //cadena += '<li class="list-group-item">'+elemento.name +' ' + elemento.surname+ ' '+ elemento.gender  + ' ' +elemento.region + '</li>';
                cadena += '<tr>' +
                    '<td><img src="' + elemento.photo + '"width="50px" height="50px" class="rounded-circle"></td>' +
                    '<td>' + elemento.name + '</td>' +
                    '<td>' + elemento.surname + '</td>' +
                    '<td>' + elemento.gender + '</td>' +
                    '<td>' + elemento.age + '</td>' +
                    '<td>' + elemento.email + '</td>' +
                    '</tr>';
            });
            cadena += '</table';
            $('#usuarios-2').html(cadena);
        });
    });
});