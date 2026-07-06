import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const locationName = args[0];
    const location = await state.pokeAPI.fetchLocation(locationName);
    console.log(`Exploring ${location.name}... `);
    console.log("Found Pokemon:");
    location.pokemon_encounters.forEach((encounter) => {
            console.log(` - ${encounter.pokemon.name}`);});
}