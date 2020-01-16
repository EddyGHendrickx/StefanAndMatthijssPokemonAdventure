let nameInput = document.getElementById("nameInput");

let spriteHtml = document.getElementById("sprite");
let moveOne = document.getElementById("move1");
let moveTwo = document.getElementById("move2");
let moveFour = document.getElementById("move3");
let moveThree = document.getElementById("move4");

let spriteChainOne = document.getElementById("spriteChain1");
let spriteChainTwo = document.getElementById("spriteChain2");
let spriteChainThree = document.getElementById("spriteChain3");


let previousNameHtml = document.getElementById("previousNameHTML");

let previousIdHtml = document.getElementById("previousIdHTML");

let spritePreviousHtml = document.getElementById("spritePrevious");

document.getElementById("run").addEventListener("click", function () {
    console.log(nameInput.value);
    getPokemon();
    getEvolution().catch(function () {
        spriteChainOne.removeAttribute("src");
        spriteChainTwo.removeAttribute("src");
        spriteChainThree.removeAttribute("src");
    });
});

async function getPokemon() {
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
    if (!(pokemonData.moves[1] == null)) {
        moveOne.innerHTML = pokemonData.moves[0].move.name;
        moveTwo.innerHTML = pokemonData.moves[2].move.name;
        moveThree.innerHTML = pokemonData.moves[1].move.name;
        moveFour.innerHTML = pokemonData.moves[3].move.name;
    } else {
        moveOne.innerHTML = pokemonData.moves[0].move.name;
        moveTwo.innerHTML = "";
        moveThree.innerHTML = "";
        moveFour.innerHTML = "";
    }


}


async function getEvolution() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameInput.value}`);
    let evolutionData = await response.json();

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
    // console.log(pokemonEvolutionChainData.chain.evolves_to[0].evolves_to[0].species.name);

    console.log(pokemonEvolutionChainData.chain);
    let evolutionOne = pokemonEvolutionChainData.chain.species.name;
    if (pokemonEvolutionChainData.chain.evolves_to[0] == null) {
        await getEvolutionChainSprites1(evolutionOne)

    } else if (pokemonEvolutionChainData.chain.evolves_to[0].evolves_to[0] == null) {
        let evolutionTwo = pokemonEvolutionChainData.chain.evolves_to[0].species.name;
        await getEvolutionChainSprites2(evolutionOne, evolutionTwo);
    } else {
        let evolutionTwo = pokemonEvolutionChainData.chain.evolves_to[0].species.name;
        let evolutionThree = pokemonEvolutionChainData.chain.evolves_to[0].evolves_to[0].species.name;
        await getEvolutionChainSprites3(evolutionOne, evolutionTwo, evolutionThree)
    }

}

async function getEvolutionChainSprites1(evolutionOne) {
    let responseOne = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionOne}`);

    let pokemonEvolutionChainSprite1 = await responseOne.json();

    spriteChainTwo.removeAttribute("src");
    spriteChainThree.removeAttribute("src");

    console.log(pokemonEvolutionChainSprite1.sprites.front_shiny);
    spriteChainOne.setAttribute("src", pokemonEvolutionChainSprite1.sprites.front_shiny);
}


async function getEvolutionChainSprites2(evolutionOne, evolutionTwo) {
    let responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionTwo}`);
    let responseOne = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionOne}`);

    let pokemonEvolutionChainSprite1 = await responseOne.json();
    let pokemonEvolutionChainSprite2 = await responseTwo.json();


    console.log(pokemonEvolutionChainSprite1.sprites.front_shiny);
    spriteChainOne.setAttribute("src", pokemonEvolutionChainSprite1.sprites.front_shiny);
    spriteChainTwo.setAttribute("src", pokemonEvolutionChainSprite2.sprites.front_shiny);
    spriteChainThree.removeAttribute("src");

    console.log(pokemonEvolutionChainSprite2.sprites.front_shiny);

}

async function getEvolutionChainSprites3(evolutionOne, evolutionTwo, evolutionThree) {
    let responseThree = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionThree}`);
    let responseTwo = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionTwo}`);
    let responseOne = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionOne}`);

    let pokemonEvolutionChainSprite1 = await responseOne.json();
    let pokemonEvolutionChainSprite2 = await responseTwo.json();
    let pokemonEvolutionChainSprite3 = await responseThree.json();

    console.log(pokemonEvolutionChainSprite1.sprites.front_shiny);
    console.log(pokemonEvolutionChainSprite2.sprites.front_shiny);
    console.log(pokemonEvolutionChainSprite3.sprites.front_shiny);

    spriteChainOne.setAttribute("src", pokemonEvolutionChainSprite1.sprites.front_shiny);
    spriteChainTwo.setAttribute("src", pokemonEvolutionChainSprite2.sprites.front_shiny);
    spriteChainThree.setAttribute("src", pokemonEvolutionChainSprite3.sprites.front_shiny);


}


let chainDiv = document.getElementById("chainDiv");
