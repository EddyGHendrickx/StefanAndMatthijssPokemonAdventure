let nameInput = document.getElementById("nameInput");
let idInput = document.getElementById("idInput");
let spriteHtml = document.getElementById("sprite");
let finalInput;
let spritePreviousEvolutionHtml = document.getElementById("spritePrevious");
let previousEvolutionSprite;
document.getElementById("run").addEventListener("click", function () {
/*
 function getCorrectInput() {
        if (!(nameInput.value === "" && idInput.value === "")) {
            finalInput = idInput;
            return finalInput;
        } else if (!(nameInput.value === "")) {
            finalInput = nameInput;
            return finalInput;
        } else if (!(idInput.value === "")) {
            finalInput = idInput;
            return finalInput;
        } else {
            alert("Please do enter something")
        }
    }
    let varIets = getCorrectInput();
    console.log(varIets);
    
 */
// let previousEvolutionApi =
    getPokemon().catch(error => {
        console.log("error");
        console.error(error);
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
}());




