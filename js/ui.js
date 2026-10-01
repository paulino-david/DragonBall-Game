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

const ganador = (jugadores) => {
    return (jugadores.J1.ki > jugadores.J2.ki ? jugadores.J1.name : jugadores.J2.name)
}

const mostrarJugadores = (jugadores) => {

    console.log(jugadores.J1.name + " vs " + jugadores.J2.name)

    J1.textContent = jugadores.J1.name
    imagenJ1.src = jugadores.J1.image
    planeta1.textContent = jugadores.J1.race

    J2.textContent = jugadores.J2.name
    imagenJ2.src = jugadores.J2.image
    planeta2.textContent = jugadores.J2.race

    setTimeout(() => {
        console.log(ganador(jugadores))
        const winner = ganador(jugadores)
        J1.textContent != winner ? player1.style.display = "none" : player2.style.display = "none"
        versus.style.display = "none"
        console.log(personajes)
        J1.textContent != winner ? imagenJ1.style.width = "50px" : imagenJ2.style.width = "50px"
        J1.textContent != winner ? imagenJ1.style.height = "100%" : imagenJ2.style.height = "100%"
        

    }, 2000)


}



export default mostrarJugadores