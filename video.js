const video = document.querySelector("#video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const progreso = document.querySelector("#progreso")


play.addEventListener("click", reproducir)
pause.addEventListener("click", pausar)

video.addEventListener("timeupdate", actualizarTiempo) 
video.addEventListener("loadedmetadata", tiempoLimite) 
function reproducir(){
    console.log("Diste click en Reproducir")
    video.play()
}

function pausar(){
    console.log("Diste click en Pausar")
    video.pause()
}

function tiempoLimite(){
    progreso.max = video.duration  
}

function actualizarTiempo(){
    ProgressEvent.value = video.currentTime  
    
}

progreso.addEventListener("input", current)  

function current(){
    video.currentTime = progreso.value    
