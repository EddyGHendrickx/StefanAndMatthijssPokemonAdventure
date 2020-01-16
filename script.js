let nameInput = document.getElementById("nameInput");

let spriteHtml = document.getElementById("sprite");
let moveOne = document.getElementById("move1");
let moveTwo = document.getElementById("move2");
let moveFour = document.getElementById("move3");
let moveThree = document.getElementById("move4");

let previousNameHtml = document.getElementById("previousNameHTML");

let previousIdHtml = document.getElementById("previousIdHTML");

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
    if (!(evolutionData.evolves_from_species == null)){
        console.log(evolutionData.evolves_from_species.name);
        const previousPokemonName = evolutionData.evolves_from_species.name;
        getPreviousEvolution(previousPokemonName, evolutionData);
    } else {
        previousNameHtml.innerHTML = "";
        previousIdHtml.innerHTML = "";
        spritePreviousHtml.setAttribute("src", "niets")
    }
    getEvolutionChain(evolutionData.evolution_chain.url);
}
async function getPreviousEvolution(namepokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namepokemon}`);
    let pokemonEvolutionDataPrevious = await response.json();
    console.log(pokemonEvolutionDataPrevious.sprites);

    let pokemonSprite = pokemonEvolutionDataPrevious.sprites.front_shiny;
    spritePreviousHtml.setAttribute("src", pokemonSprite);

    previousNameHtml.innerHTML = pokemonEvolutionDataPrevious.name;
    previousIdHtml.innerHTML = pokemonEvolutionDataPrevious.id;
    //spritePreviousEvolutionHtml.setAttribute("src", );
    // console.log(pokemonEvolutionDataPrevious);
    // document.getElementById("pokemonNameHTML").innerHTML = pokemonData.species.name;
    // document.getElementById("pokemonIdHTML").innerHTML = pokemonData.id;
}

async function getEvolutionChain(chainId) {
    let response = await fetch(chainId);
    let pokemonEvolutionChainData = await response.json();
    console.log(pokemonEvolutionChainData.chain.evolves_to[0].evolves_to[0].species.name);
    console.log(pokemonEvolutionChainData.chain);
    let evolutionOne = pokemonEvolutionChainData.chain.species.name;
    let evolutionTwo = pokemonEvolutionChainData.chain.evolves_to[0].species.name;
    let evolutionThree = pokemonEvolutionChainData.chain.evolves_to[0].evolves_to[0].species.name;

    await getEvolutionChainSprites(evolutionOne,evolutionTwo, evolutionThree );

 //   let pokemonSprite = pokemonEvolutionChainData.;
   // spritePreviousHtml.setAttribute("src", pokemonSprite);

    //previousNameHtml.innerHTML = pokemonEvolutionDataPrevious.name;
    // previousIdHtml.innerHTML = pokemonEvolutionDataPrevious.id;

}

async function getEvolutionChainSprites(evolutionOne, evolutionTwo, evolutionThree) {
    let responseOne = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionOne}`);
    let responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionTwo}`);
    let responseThree = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionThree}`);
    let pokemonEvolutionChainSprite1 = await responseOne.json();
    let pokemonEvolutionChainSprite2 = await responseTwo.json();
    let pokemonEvolutionChainSprite3 = await responseThree.json();

    console.log(pokemonEvolutionChainSprite1.sprites.front_shiny);
    console.log(pokemonEvolutionChainSprite2.sprites.front_shiny);
    console.log(pokemonEvolutionChainSprite3.sprites.front_shiny);


}

