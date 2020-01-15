let nameInput = document.getElementById("nameInput");
let idInput = document.getElementById("idInput");
let spriteHtml = document.getElementById("sprite");
let finalInput;
let spritePreviousEvolutionHtml = document.getElementById("spritePrevious");
let previousEvolutionSprite;
document.getElementById("run").addEventListener("click",function () {




if (!(nameInput.value === "" && idInput.value === "")){
    finalInput = idInput
}
else if (!(nameInput.value === "")){
    finalInput = nameInput
}
else if (!(idInput.value === "")){
    finalInput = idInput
}
else {alert("Please do enter something")}

// let previousEvolutionApi =
getPokemon();
});
async function getPokemon() {
    // use backticks ``
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${finalInput}`);
    let pokemonData = await response.json();
    console.log(pokemonData);
    console.log(pokemonData.id);
    console.log(pokemonData.moves);
    console.log(pokemonData.sprites.front_shiny);

    let pokemonId = pokemonData.id;
    let pokemondMoves = pokemonData.moves;
    let pokemonSprite = pokemonData.sprites.front_shiny;
    document.getElementById("pokemonNameHTML").innerHTML = pokemonData.id;
    spriteHtml.setAttribute("src", pokemonSprite);


}


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

