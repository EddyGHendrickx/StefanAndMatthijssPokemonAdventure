let varInput;
let varPreviousEvolution;




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
    let pokemonData = response.json();
    console.log(pokemonData);
}


getPokemon();
getEvolution();