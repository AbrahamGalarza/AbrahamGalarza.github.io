
var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');
var retro = document.getElementById('retroalimentacion');
var retro2 = document.getElementById('retroalimentacion2');
formulario.user.addEventListener('blur',function(){
    verificaNombre();
});

formulario.password2.addEventListener('keyup',function(){
    if(formulario.password.value == formulario.password2.value){//Si sin iguales
        retro2.innerHTML = 'Comprobación valida';
        retro2.className = 'Las contraseñas no coinciden';
        return true;
    }
    else{
        retro2.innerHTML = 'Comprobación no Valida';
        retro2.className = 'distintas';
        return false;
    }
});

formulario.password.addEventListener('keyup',function(){
    //mensaje.innerHTML = formulario.password.value.length;
    var letras = (/[a-z]/i).test(formulario.password.value);
    var digitos = (/[0-9]/).test(formulario.password.value);
    var simbolos = (/[!"#$%&/()]/).test(formulario.password.value);
    if(letras && digitos && simbolos)
        {
           retro.innerHTML = 'Segura';
           retro.className = 'nivel-segura';
        }
        else if(letras && digitos)
        {
            retro.innerHTML = '*Mediana';
            retro.className = 'nivel-media';
        }
        else if(letras)
        {
            retro.innerHTML = '*Débil';
            retro.className = 'nivel-debil';
        }

});
formulario.addEventListener('submit',function(){
    var formu = document.getElementById('registro');
    if(formu.terminos.checked && verificaContraseña() && verificaNombre()){
        alert("Usuario registrado");
    }
    else
    {
        if(formu.terminos.checked == false)
        {
            alert("Debes aceptar los terminos y condiciones para poder registrar");
        }
        else{
            alert("No se ha podido registar");
        }
    }
});

function verificaNombre(){
    var expReg = /[a-z]/i;
    if(expReg.test(formulario.user.value.charAt(0)) && formulario.user.value.length >= 8)
        {
            mensaje.innerHTML="Usuario Valido";
            mensaje.className="user-valid";
            return true;
        }
        else
        {
            mensaje.innerHTML = "Nombre de usuario no valido deber comenzar con letra y tener almenos 8 caracteres";
            mensaje.className = "user-invalid";
            return false;
        }
}

function verificaContraseña(){
    if(formulario.password.value == formulario.password2.value && formulario.password.value.length > 5)
    {
        return true;
    }
    else{
        return false;
    }
}

function verificaTerminos(){
    return true;
}
function registro()
{
    var reg = document.getElementById('registro');
    var nameuser = reg.user.value;
    var pass = reg.password.value;
    var pass2 = reg.password2.value;
}