
var formulario = document.getElementById('registro');
formulario.addEventListener('submit',function(){
    if(!verificaNombre() || !verificaContraseña() || verificaTerminos())
    {
        alert("error");
        event.preventDefault;
    }
});

function verificaNombre(){
    if(formulario.user.value.charAt(0))
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