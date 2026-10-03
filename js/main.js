import enlace from "./peti.js"
import mostrarPersonajes,{mostrarGanador} from "./ui.js"

const boton_azar = document.getElementById("boton-azar")
const btn_jugarNuevo = document.querySelectorAll(".btn-jugarNuevo")

boton_azar.addEventListener("click", async () => {
    let ganador= []

    for (let index = 0; index < 300; index++) {

        const jugadores = await enlace()
    
        ganador= await mostrarPersonajes(jugadores.J1 == jugadores.J2 ? await enlace() : jugadores)
    }


    setTimeout(async ()=> mostrarGanador(await ganador),2000)
   

})

// console.log(btn_jugarNuevo)


btn_jugarNuevo.forEach(div => {
    div.addEventListener("click", async () => {
        const jugadores = await enlace()
        mostrarPersonajes((jugadores.J1 == jugadores.J2 ? await enlace() : jugadores))
    })
})