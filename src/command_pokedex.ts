import {State} from "./state.js";

export async function commandPokedex(state: State) {
    const pokedex = state.pokedex;
    if (Object.keys(pokedex).length === 0) {
        console.log("Your Pokedex is empty. Catch some Pokemon first!");
        return;
    }

    console.log("Your Pokedex:");
    for (const pokemonName in pokedex) {
        const pokemon = pokedex[pokemonName];
        console.log(` - ${pokemon.name}`);
    }
}