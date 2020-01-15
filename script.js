let nameInput = document.getElementById("nameInput");

let spriteHtml = document.getElementById("sprite");
let moveOne = document.getElementById("move1");
let moveTwo = document.getElementById("move2");
let moveFour = document.getElementById("move3");
let moveThree = document.getElementById("move4");

let spritePreviousHtml = document.getElementById("spritePrevious");

document.getElementById("run").addEventListener("click", function () {
    console.log(nameInput.value);
    getPokemon();
    getEvolution()
});

async function getPokemon(id) {
    // use backticks ``
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameInput.value}`);
    let pokemonData = await response.json();
    console.log(pokemonData);
    console.log(pokemonData.id);
    console.log(pokemonData.moves);
    console.log(pokemonData.sprites.front_shiny);

    let pokemonId = pokemonData.id;
    let pokemondMoves = pokemonData.moves;
    let pokemonSprite = pokemonData.sprites.front_shiny;
    document.getElementById("pokemonNameHTML").innerHTML = pokemonData.species.name;
    document.getElementById("pokemonIdHTML").innerHTML = pokemonData.id;
    spriteHtml.setAttribute("src", pokemonSprite);
    moveOne.innerHTML = pokemonData.moves[0].move.name;
    moveTwo.innerHTML = pokemonData.moves[2].move.name;
    moveThree.innerHTML = pokemonData.moves[1].move.name;
    moveFour.innerHTML = pokemonData.moves[3].move.name;

}


async function getEvolution() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameInput.value}`);
    let evolutionData = await response.json();
    console.log(evolutionData.evolves_from_species.name);
    const previousPokemonName = evolutionData.evolves_from_species.name;
    getPreviousEvolution(previousPokemonName, evolutionData);

}



async function getPreviousEvolution(namepokemon, data) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namepokemon}`);
    let pokemonEvolutionDataPrevious = await response.json();
    console.log(pokemonEvolutionDataPrevious.sprites);
    console.log(data);
    let pokemonSprite = pokemonEvolutionDataPrevious.sprites.front_shiny;
    spritePreviousHtml.setAttribute("src", pokemonSprite);
    let previousNameHtml = document.getElementById("previousNameHTML");
    let previousIdHtml = document.getElementById("previousIdHTML");
    previousNameHtml.innerHTML = pokemonEvolutionDataPrevious.name;
    previousIdHtml.innerHTML = pokemonEvolutionDataPrevious.id;
    //spritePreviousEvolutionHtml.setAttribute("src", );
    // console.log(pokemonEvolutionDataPrevious);
    // document.getElementById("pokemonNameHTML").innerHTML = pokemonData.species.name;
    // document.getElementById("pokemonIdHTML").innerHTML = pokemonData.id;
}




