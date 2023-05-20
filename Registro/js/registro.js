const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const NombreUsuario = document.getElementById("NombreUsuario")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regxEmail =/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    parrafo.innerHTML = ""

    if(nombres.value.length <5){
        warnings += 'Nombres no es valido<br>'
        entrar = true
    }

    if(apellidos.value.length <5){
        warnings += 'Apellidos no es valido<br>'
       entrar = true
    }

    if (NombreUsuario.value.length <5) {
        warnings += 'Nombre de Usuario muy corto<br>'  
        entrar = true
    }

    if(!regxEmail.test(correo.value)){
        warnings += 'Correo Electronico no es valido<br>'
        entrar = true
    }

    if(contraseña.value.length <8){
        warnings += 'La contraseña muy corta <br>'
        entrar = true
    }

    
    if(entrar){
       parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        console.log('enviado');
    }
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    window.location.href = "/Login/LOGIN.html"; 
  });

})

