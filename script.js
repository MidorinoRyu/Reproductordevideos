const BotonLogIn = document.getElementById("InicioSecion")
const veriCorreo ="suraj@telacreiste.net"
const veriPassword ="1234"

BotonLogIn.addEventListener("submit",function(event){
    event.preventDefault()  

    const correo = document.getElementById("correo").value
    const password = document.getElementById("password").value

    if(correo == veriCorreo ){
            if(password == veriPassword){
        window.location.href = "reproductor.html"
        alert ("Tu contraseña es ¡" + pasword + "!")} 
    //else{
        //alert (password + " no es la contraseña") esto aun no jala
    
    else{
        alert (correo + " no es tu correo")
    }}})