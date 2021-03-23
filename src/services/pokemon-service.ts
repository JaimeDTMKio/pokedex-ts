import axios from "axios";
import { Pokemon } from "../models/pokemon";

export class PokemonService {

    private readonly POKEMON_ENDPOINT: string = "https://pokeapi.co/api/v2/pokemon/";
    //Este objeto es un Singleton!
    private static instance: PokemonService;

    private constructor() { }

    static getInstance(): PokemonService {

        if (!PokemonService.instance) {
            PokemonService.instance = new PokemonService();
        }
        return this.instance;
    }

    async getPokemons(from: number = 1, to: number = 20): Promise<Array<Pokemon>> {

        if (from > to) throw new Error(`"From" must not be greater than "to"`);
        
        try {
            let buffer: any;
            let rawList: Array<any> = [];
            let pokemonList: Array<Pokemon> = [];
            for (let i = from; i <= to; i++) {
                buffer = await axios.get(`${this.POKEMON_ENDPOINT}${i}`);
                rawList.push(buffer.data);
            }
            rawList.forEach(rawPokemon => { pokemonList.push(new Pokemon(rawPokemon)) });
            return pokemonList;
        } catch (error) {
            console.log(error);
            return [];
        }

    }
}