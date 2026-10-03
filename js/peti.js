const enlace = async () => {
    const url = await fetch("https://dragonball-api.com/api/characters")
    const data = await url.json()


    let listaPersonajes = []

    data.items.forEach((personaje) => {

        const { name, image, race, ki } = personaje
        listaPersonajes.push({ name, image, race, ki:ki.replace(".", "") })

    }
    )

    return {"J1":listaPersonajes[Math.floor(Math.random() * listaPersonajes.length)], "J2":listaPersonajes[Math.floor(Math.random() * listaPersonajes.length)]}
}

export default enlace