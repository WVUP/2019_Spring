const baseUrl = "https://pokeapi.co/api/v2";
let pokemon = [];
let next = null;
let pitems = document.getElementsByTagName("p");

function fetchPkmn(loadMore) {
  const url = loadMore ? next : `${baseUrl}/pokemon`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const { results, next: nextAPI } = data;
      next = nextAPI;
      pokemon = pokemon.concat(results);
      addEventlis();
      buildPokemon();
    });
}
function buildPokemon() {
  pokemon.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  let pkmnListDiv = document.getElementById("displays");
  for (let i = 0; i < pokemon.length; i++) {
    pkmnListDiv.innerHTML += `<p id ="${pokemon[i].name}">${
      pokemon[i].name
    }</p>`;
  }
}
function displaySprite() {
  let whitecontainer = document.getElementById("whitescontainer");
  fetch(baseUrl)
    .then(res => res.json)
    .then(data => {
      const { sprites } = data;
      whitecontainer.innerHTML += `<img src="${sprites.front_default}" />`;
      console.log(data);
    });
}
function addEventlis() {
  for (let i = 0; i < pitems.length; i++) {
    pitems[i].addEventListener("click", function() {
      //displaySprite();
      console.log("you clicked me");
    });
  }
}

fetchPkmn();
