let nameInput = document.getElementById("nameInput");
let idInput = document.getElementById("idInput");
let spriteHtml = document.getElementById("sprite");

let spritePreviousEvolutionHtml = document.getElementById("spritePrevious");
let previousEvolutionSprite;

// let previousEvolutionApi =


async function getPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    let pokemonData = await response.json();
    console.log(pokemonData);
    console.log(pokemonData.id);
    console.log(pokemonData.moves);
    console.log(pokemonData.sprites.front_shiny);
    let pokemonId = pokemonData.id;
    let pokemondMoves = pokemonData.moves;
    let pokemonSprite = pokemonData.sprites.front_shiny;
    spriteHtml.setAttribute("src", pokemonSprite);


};


async function getEvolution() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon-species/25");
    let evolutionData = response.json();
    console.log(evolutionData);
}
async function getPreviousEvolution() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    let pokemonEvolutionDataPrevious = response.json();
    console.log(pokemonEvolutionDataPrevious);
}


getPokemon();
getEvolution();