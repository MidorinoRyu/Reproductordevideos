const video = document.querySelector("#video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const progreso = document.querySelector("#progreso")


play.addEventListener("click", reproducir)
pause.addEventListener("click", pausar)

video.addEventListener("timeupdate", actualizarTiempo)  //esto es para que se meta el avance deel videeo a la barra
video.addEventListener("loadedmetadata", tiempoLimite)  ///esto es para que el avance de el videeo utilice el 100% de la barra

function reproducir(){
    console.log("diste click en boton de reproducir")
    video.play()
}

function pausar(){
    console.log("diste click en boton de pausar")
    video.pause()
}

function tiempoLimite(){
    progreso.max = video.duration  //esto hace que la barra avance correspondientemente al video
}

function actualizarTiempo(){
    ProgressEvent.value = video.currentTime  //genera el valor para utilizarse en el movimiento de la barra de tiempo
    
}

progreso.addEventListener("input", current)   //generamos el valor de la barra, para poder moverla

function current(){
    video.currentTime = progreso.value    //con esto podemos mover la barrita y acomodar el video donde queramos
}