import enlace from "./peti.js"

const versus = document.getElementById('versus')

const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

const personaje_1 = document.getElementById('personaje_1')
const personaje_2 = document.getElementById('personaje_2')

const div_jugarNuevo = document.querySelectorAll(".jugar-nuevo")


const h1 = document.getElementsByTagName("h1")


const ganador = (jugadores) => {
    return (jugadores.J1.ki > jugadores.J2.ki ? jugadores.J1.name : jugadores.J2.name)
}

export const mostrarFirst = async (jugadores) => {
    const players = await jugadores
    console.log(players)

    if (players.J1.name!=players.J2.name){
        personaje_1.innerHTML = `
             <img
              id="img-j1"
              src=${players.J1.image}
              alt=""
              class="jugador"
            />
            <div class="infoJugador">
              <img src="./img/winner.PNG" alt="" class="ganador" />
              <h2 class="nombre" id="jugador1">${players.J1.name}</h2>
              <p id="planeta1" class="descripcion">${players.J1.race}</p>
            </div>
    `


    personaje_2.innerHTML = `
             <img
              id="img-j2"
              src=${players.J2.image}
              alt=""
              class="jugador"
            />
            <div class="infoJugador">
              <img src="./img/winner.PNG" alt="" class="ganador" />
              <h2 class="nombre" id="jugador2">${players.J2.name}</h2>
              <p id="planeta2" class="descripcion">${players.J2.race}</p>
            </div>
    `
    }
    else{
        mostrarFirst(enlace())
    }

    


    // mostrarPersonajes(jugadores.J1.name==jugadores.J2.name?enlace():jugadores)
}


const mostrarJugadores = (jugadores) => {
    console.log(h1)
    const img_ganador = document.querySelectorAll(".ganador")
    const imagenJ1 = document.getElementById('img-j1')
    const J1 = document.getElementById('jugador1')
    const planeta1 = document.getElementById('planeta1')

    const imagenJ2 = document.getElementById('img-j2')
    const J2 = document.getElementById('jugador2')
    const planeta2 = document.getElementById('planeta2')

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
        const img_ganador = document.querySelectorAll(".ganador")
    const imagenJ1 = document.getElementById('img-j1')
    const J1 = document.getElementById('jugador1')
    const planeta1 = document.getElementById('planeta1')

    const imagenJ2 = document.getElementById('img-j2')
    const J2 = document.getElementById('jugador2')
    const planeta2 = document.getElementById('planeta2')

    const winner = ganador(jugadores)

    for (let index = 0; index < div_jugarNuevo.length; index++) {
        div_jugarNuevo[index].style.display = "flex"
        img_ganador[index].style.display = "flex"

    }

    // h1.style.display="none"
    console.log(h1)

    // const landscape = window.matchMedia("(orientation: landscape)");

    // function alCambiarOrientacion(event) {
    // if (event.matches) {
    //     console.log("El móvil está en horizontal");
    //     // Haz algo aquí
    // } else {

    // }
    J1.textContent != winner ? player1.style.display = "none" : player2.style.display = "none"
    versus.style.display = "none"

    J1.textContent != winner ? imagenJ1.style.width = "100%" : imagenJ2.style.width = "100%"
    J1.textContent != winner ? imagenJ1.style.height = "100%" : imagenJ2.style.height = "100%"

    // }    

    // landscape.addEventListener("change", alCambiarOrientacion);

    // // Comprueba también la orientación inicial
    // alCambiarOrientacion(landscape);


}




export default mostrarJugadores