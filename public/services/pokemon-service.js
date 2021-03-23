"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
class PokemonService {
    constructor() {
        this.POKEMON_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    }
    static getInstance() {
        if (!PokemonService.instance) {
            PokemonService.instance = new PokemonService();
        }
        return this.instance;
    }
    getPokemons(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            //const rawPokemons = await fetch(this.POKEMON_ENDPOINT);
            console.log("rawPokemons");
            return [];
        });
    }
}
exports.PokemonService = PokemonService;
