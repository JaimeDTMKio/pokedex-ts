"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const pokemon_1 = require("./models/pokemon");
const pokemon_service_1 = require("./services/pokemon-service");
const main = () => {
    let pikachu = new pokemon_1.Pokemon(0, "Pikachu", "Es un pokemon ratón", pokemon_1.PokemonTypes.ELECTRIC, pokemon_1.PokemonGender.MALE);
    const pkService = pokemon_service_1.PokemonService.getInstance();
    pkService.getPokemons();
    console.log(pikachu.toString());
};
exports.main = main;
exports.main();
