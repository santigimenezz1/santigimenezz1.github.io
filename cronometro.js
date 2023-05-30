
const pantalla = document.querySelector(".pantalla")
const audio = document.querySelector(".audio");
const activar = document.querySelector(".activar")

setInterval(() => {
    let hora = new Date().getHours()
    let minutos = new Date().getMinutes()
    let segundos = new Date().getSeconds()
    
    pantalla.innerHTML = `${hora}:${minutos}:${segundos}`
    if(segundos === 58){
        audio.play()    
    }
}, 1000);


activar.addEventListener("click",()=>{
    audio.play()
})