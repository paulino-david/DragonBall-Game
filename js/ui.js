const imagenJ1 = document.getElementById('img-j1')
const J1 = document.getElementById('jugador1')
const planeta1 = document.getElementById('planeta1')

const imagenJ2 = document.getElementById('img-j2')
const J2 = document.getElementById('jugador2')
const planeta2 = document.getElementById('planeta2')

const versus = document.getElementById('versus')

const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

const personajes = document.querySelectorAll('.personaje')

const div_jugarNuevo = document.querySelectorAll(".jugar-nuevo")

const img_ganador = document.querySelectorAll(".ganador")


const ganador = (jugadores) => {
    return (jugadores.J1.ki > jugadores.J2.ki ? jugadores.J1.name : jugadores.J2.name)
}

const mostrarJugadores = (jugadores) => {

    for (let index = 0; index < div_jugarNuevo.length; index++) {
        div_jugarNuevo[index].style.display = "none"
        img_ganador[index].style.display = "none"

    }

    J1.textContent = jugadores.J1.name
    imagenJ1.src = jugadores.J1.image
    planeta1.textContent = jugadores.J1.race

    J2.textContent = jugadores.J2.name
    imagenJ2.src = jugadores.J2.image
    planeta2.textContent = jugadores.J2.race

    versus.style.display = "flex"
    player1.style.display = "flex"
    player2.style.display = "flex"

    return jugadores


}

export const mostrarGanador = (jugadores) => {

    const winner = ganador(jugadores)

    for (let index = 0; index < div_jugarNuevo.length; index++) {
        div_jugarNuevo[index].style.display = "flex"
        img_ganador[index].style.display = "flex"

    }

    const landscape = window.matchMedia("(orientation: landscape)");

    function alCambiarOrientacion(event) {
        if (event.matches) {
            console.log("El móvil está en horizontal");
            // Haz algo aquí
        } else {

        }
        J1.textContent != winner ? player1.style.display = "none" : player2.style.display = "none"
        versus.style.display = "none"
    
        J1.textContent != winner ? imagenJ1.style.width = "100%" : imagenJ2.style.width = "100%"
        J1.textContent != winner ? imagenJ1.style.height = "100%" : imagenJ2.style.height = "100%"

    }    

    landscape.addEventListener("change", alCambiarOrientacion);

    // Comprueba también la orientación inicial
    alCambiarOrientacion(landscape);


}




export default mostrarJugadores