let nameInput = document.getElementById("nameInput");

let spriteHtml = document.getElementById("sprite");
let moveOne = document.getElementById("move1");
let moveTwo = document.getElementById("move2");
let moveFour = document.getElementById("move3");
let moveThree = document.getElementById("move4");

let spritePreviousEvolutionHtml = document.getElementById("spritePrevious");
let previousEvolutionSprite;

document.getElementById("run").addEventListener("click", function () {
    console.log(nameInput.value);
    getPokemon();
    getPreviousEvolution()
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
        moveOne.innerHTML = pokemonData.moves[0].move.name;
        moveTwo.innerHTML = pokemonData.moves[2].move.name;
        moveThree.innerHTML = pokemonData.moves[1].move.name;
        moveFour.innerHTML = pokemonData.moves[3].move.name;

    }


    async function getEvolution() {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameInput.value}`);
        let evolutionData = response.json();
        console.log(evolutionData);
    }

    async function getPreviousEvolution() {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameInput.value}`);
        let pokemonEvolutionDataPrevious = response.json();
        console.log(pokemonEvolutionDataPrevious);
    }





