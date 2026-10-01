import enlace from "./peti.js"
import mostrarPersonajes from "./ui.js"

const boton_azar = document.getElementById("boton-azar")
boton_azar.addEventListener("click", async () => {
    const jugadores = await enlace()
    
    mostrarPersonajes(jugadores.J1== jugadores.J2 ? await enlace() : jugadores)
})
