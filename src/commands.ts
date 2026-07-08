import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

import type { CLICommand } from "./state.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect  } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Display map locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Navigate back in the map",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Explore a specific location and display the Pokemon found there",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempt to catch a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a specific Pokemon in your Pokedex",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Display the contents of your Pokedex",
      callback: commandPokedex,
    },
  };
}