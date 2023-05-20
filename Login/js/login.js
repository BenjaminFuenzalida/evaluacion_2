
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const container = document.getElementById("container")


form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regxEmail =/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    parrafo.innerHTML = ""
    
    if(entrar){
       parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        console.log('enviado');
    }

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); 
        window.location.href = "/HOME/Home.html"; 
    });
})



