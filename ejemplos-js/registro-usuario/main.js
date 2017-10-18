
var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');
var retro = document.getElementById('retroalimentacion');
var retro2 = document.getElementById('retroalimentacion2');
formulario.user.addEventListener('blur',function(){
    verificaNombre();
});

formulario.password2.addEventListener('keyup',function(){
    if(formulario.password.value == formulario.password2.value){//Si sin iguales
        retro2.innerHTML = 'Son iguales';
        retro2.className = 'coinciden';
    }
    else{
        retro2.innerHTML = 'No coinciden';
        retro2.className = 'distintas';
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
            retro.innerHTML = 'mediana';
            retro.className = 'nivel-media';
        }
        else if(letras)
        {
            retro.innerHTML = 'debil';
            retro.className = 'nivel-debil';
        }

});
formulario.addEventListener('submit',function(){
    if(formulario.terminos.value == "si")
        {
            
        }
        else
            {
                alert("Acepta  los terminos y condiciones");
            }
});

function verificaNombre(){
    var expReg = /[a-z]/i;
    if(expReg.test(formulario.user.value.charAt(0)))
        {
            return true;
        }
        else
            {
              mensaje.innerHTML = "Nombre de usuario no valido";
                return false;
            }
        
    return false;
}

function verificaContraseña(){
    var letras = (/[a-z]/i).test(formulario.password.value);
    var digitos = (/[0-9]/).test(formulario.password.value);
    var simbolos = (/[!"#$%&/()=]/).test(formulario.password.value);
    if(letras && digitos && simbolos)
        {

        }
    return true;
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