let lista = document.getElementById("listaPokemon")
        
function consultPokemon (id, num) { 
        fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then (function (response) {
    response.json()
    .then (function (pokemon) {
        createPokemon (pokemon, num)
    })
    })
        
}

function consultPokemons () {
    let primeId= Math.round(Math.random() * 150)
 
    consultPokemon (primeId, 1)
}

function createPokemon (pokemon, num) {
    let item = lista.querySelector(`#pokemon-${num}`)
    let image = item.getElementsByTagName("img")[0]
    image.setAttribute("src", pokemon.sprites.front_default)

    let number = item.getElementsByTagName("p")[0]
    number.textContent = pokemon.name

}

consultPokemons ()

fetch(`https://pokeapi.co/api/v2/type/${id}`)
        .then(res => res.json())
        .then(data => {
            const {type} = data;
            const html = `
                <ul class="list-unstyled">
                    <li> ${type}</li>
                </ul>
            `;

            document.getElementById(id).innerHTML = html;
            console.log(data)
        
        })
