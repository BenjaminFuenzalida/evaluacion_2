const Nombres = document.getElementById("Nombres")
const Email = document.getElementById("Email")
const textarea = document.getElementById("textarea")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regxEmail =/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    parrafo.innerHTML = ""

    if(Nombres.value.length <5){
        warnings += 'Nombres no es valido<br>'
        entrar = true
    }

    if(!regxEmail.test(Email.value)){
        warnings += 'Correo Electronico no es valido<br>'
        entrar = true
    }

    if(textarea.value.length <2){
        warnings += 'el texto es muy corto <br>'
        entrar = true
    }
    
    if(entrar){
       parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        console.log('enviado');
    }
})

