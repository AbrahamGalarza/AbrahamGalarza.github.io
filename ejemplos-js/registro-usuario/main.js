
var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');
formulario.user.addEventListener('blur',function(){
    verificaNombre();
});

formulario.password.addEventListener('keyup',function(){
    mensaje.innerHTML = formulario.password.value.length;
});
formulario.addEventListener('submit',function(){
    if(!verificaNombre() || !verificaContraseña() || verificaTerminos())
    {
        alert("error");
        event.preventDefault;
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