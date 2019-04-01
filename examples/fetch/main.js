// Used for our initial call
const baseUrl = 'https://pokeapi.co/api/v2';


// An example promise
// const example = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('I am goood');
//     }, 2000)
// });

// example.then(msg => console.log(msg))
//     .catch(err => console.error(err));


// Stores an array of all pokemon fetched from API
let pokemon = [];

// Stores the value of our next API call to hit on 'load more'
let next = null;


/**
 * Builds out the HTML for our pokemon
 */
function buildPokemon(){
    const html = `
        <div>
            <div class="row">
            ${
                pokemon
                .sort(function(a,b){
                    return a.name.localeCompare(b.name);
                })
                .map(p => (
                    "<div class=\"col-sm-4 point\" onclick=\"viewPokemon('" + p.name + "') \">" + p.name + "</div>"
                )).join('')
            }
        
            </div>

            <br />
            <div class="btn btn-primary" onclick="fetchpokemon(true)"> Load More </div>
        </div>
    `;

    document.getElementById('content').innerHTML = html;
}

/**
 * Handles loading of our data through pokeapi
 * @param {*} loadMore - this argument is used for subsequent call to the api to fetch additional pokemon
 */
function fetchpokemon(loadMore) {
    
    // check if they are loading more but next is empty b/c nothing is left to load
    // if(loadMore && !next) return;

    // If we pass in load more that is truth...we know to use our NEXT API url...
    // otherwise, let just use the base path to get our first list of pokemon
    const url = loadMore ? next : `${baseUrl}/pokemon`;

    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // rename destructuring next to nextAPI to avoid conflict with `next` up above (reassignment)
        const {results, next: nextAPI} = data;
        // Set global next to the nextAPI for our pagination
        next = nextAPI;
        // Merge current results with out already existing array
        pokemon = pokemon.concat(results);
        console.log(results);
        // Build out our html to render on page
        buildPokemon();
    });
}

function viewPokemon(pokemonName) {
    console.log(`you clicked: ${pokemonName}`)
    const selected = pokemon.find(x=> x.name === pokemonName);
    const id = 'pokemonModal';
    // Lets open the modal immediately so we have loading and impatient users are satisfied
    swal.fire({
        title: pokemonName,
        html:
          `<div id="${id}">Loading...</div>`,
        showCloseButton: true,
        showCancelButton: true,
    })

    fetch(selected.url)
        .then(res => res.json())
        .then(data => {
            const {weight, abilities, height, moves, sprites} = data;
            const html = `
                <div>
                    <img src="${sprites.front_default}" />
                </div>
                <ul class="list-unstyled">
                    <li>Weight: ${weight}</li>
                    <li>Height: ${height}</li>
                    <li># of moves: ${moves.length}</li>
                    <li># of abilities: ${abilities.length}</li>
                </ul>
            `;

            document.getElementById(id).innerHTML = html;
            console.log(data)
        
        })
}

// Fetch the initial set of pokemon to display for the user
fetchpokemon();