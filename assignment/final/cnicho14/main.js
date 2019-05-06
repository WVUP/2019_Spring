const baseUrl = "https://pokeapi.co/api/v2";
let pokemon = [];
let next = null;
let pkmnListDiv = document.getElementById("displays");

function buildPokemon() {
  document.getElementById("displays");
  pokemon.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function fetchPkmn(loadMore) {
  const url = loadMore ? next : `${baseUrl}/pokemon`;
  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      const { results, next: nextAPI } = data;
      next = nextAPI;
      pokemon = pokemon.push(results);
    });
}
fetchPkmn();
