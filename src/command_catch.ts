import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0];
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);

    const roll = Math.random();
    const chance = 1 - (pokemon.base_experience / 500);

    if (roll < chance) {
        console.log(`${pokemon.name} was caught!`);
        state.pokedex[pokemon.name] = pokemon;
    } else {
        console.log(`${pokemon.name} escaped!`);
    }
}