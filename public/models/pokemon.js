"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.PokemonGender = exports.PokemonTypes = void 0;
var PokemonTypes;
(function (PokemonTypes) {
    PokemonTypes[PokemonTypes["WATER"] = 0] = "WATER";
    PokemonTypes[PokemonTypes["FIRE"] = 1] = "FIRE";
    PokemonTypes[PokemonTypes["GRASS"] = 2] = "GRASS";
    PokemonTypes[PokemonTypes["GROUND"] = 3] = "GROUND";
    PokemonTypes[PokemonTypes["ROCK"] = 4] = "ROCK";
    PokemonTypes[PokemonTypes["STEEL"] = 5] = "STEEL";
    PokemonTypes[PokemonTypes["ICE"] = 6] = "ICE";
    PokemonTypes[PokemonTypes["ELECTRIC"] = 7] = "ELECTRIC";
    PokemonTypes[PokemonTypes["DRAGON"] = 8] = "DRAGON";
    PokemonTypes[PokemonTypes["GHOST"] = 9] = "GHOST";
    PokemonTypes[PokemonTypes["PSYCHIC"] = 10] = "PSYCHIC";
    PokemonTypes[PokemonTypes["NORMAL"] = 11] = "NORMAL";
})(PokemonTypes = exports.PokemonTypes || (exports.PokemonTypes = {}));
class Pokemon {
    constructor(id, name, description, type, gender) {
        this.id = -1;
        this.name = "";
        this.description = "";
        this.type = PokemonTypes.GRASS;
        this.gender = PokemonGender.FEMALE;
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.gender = gender;
    }
    toString() {
        return `${this.name}:\n${this.description}\nType:${this.type}   Gender:${this.gender}\n`;
    }
}
exports.Pokemon = Pokemon;
