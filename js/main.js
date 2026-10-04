import enlace from "./peti.js"
import mostrarPersonajes,{mostrarFirst, mostrarGanador} from "./ui.js"

const boton_azar = document.getElementById("boton-azar")
const btn_jugarNuevo = document.querySelectorAll(".btn-jugarNuevo")


mostrarFirst(enlace())

boton_azar.addEventListener("click", async () => {
    let ganador= []

    for (let index = 0; index < 50; index++) {

        const jugadores = await enlace()
    
        ganador= await mostrarPersonajes(jugadores)

    }
    console.log(ganador)

    if ( await ganador.J1.name==await ganador.J2.name){
        boton_azar.click()
    }
    else{

        setTimeout(async ()=> mostrarGanador(await ganador),2000)
    }
    // while 

})

// console.log(btn_jugarNuevo)


btn_jugarNuevo.forEach(div => {
    div.addEventListener("click", async () => {
        // const jugadores = await enlace()
        window.location.reload()
        // mostrarPersonajes((jugadores.J1 == jugadores.J2 ? await enlace() : jugadores))
    })
})