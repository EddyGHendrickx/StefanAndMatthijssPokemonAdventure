let nameInput = document.getElementById("nameInput");
let idInput = document.getElementById("idInput");
let spriteHtml = document.getElementById("sprite");
let spritePreviousEvolutionHtml = document.getElementById("spritePrevious");
let previousEvolutionSprite


async function getPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    let pokemonData = response.json();
    console.log(pokemonData);
}


async function getEvolution() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon-species/25");
    let evolutionData = response.json();
    console.log(evolutionData);
}
async function getPreviousEvolution() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    let pokemonEvolutionData = response.json();
    console.log(pokemonEvolutionData);
}


getPokemon();
getEvolution();