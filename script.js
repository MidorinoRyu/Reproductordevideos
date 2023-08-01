const BotonLogIn = document.getElementById("InicioSecion")
const veriCorreo ="memotigre88@hotmail.com"
const veriPassword ="Dragon00"

BotonLogIn.addEventListener("submit",function(event){
    event.preventDefault()  

    const correo = document.getElementById("correo").value
    const password = document.getElementById("password").value

    if(correo == veriCorreo ){
            if(password == veriPassword){
        window.location.href = "reproductor.html"
        alert ("Tu contraseña es ¡" + pasword + "!")} 
    
    
    else{
        alert (correo + " no es tu correo")
    }}})
