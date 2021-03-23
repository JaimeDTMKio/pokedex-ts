export interface PokemonStats {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
}

export class Pokemon {

    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly imgPath: string;
    readonly types: string[] = [];
    readonly stats: PokemonStats;
    readonly allowedTypes: string[] = [
        "normal",
        "fire",
        "water",
        "grass",
        "electric",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "steel"];

    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.types = this.defineTypes(json.types);
        this.description = `Es un pókemon tipo ${this.types[0]}`;
        this.imgPath = json.sprites.front_default;
        this.stats = {
            hp: json.stats[0].base_stat,
            attack: json.stats[1].base_stat,
            defense: json.stats[2].base_stat,
            speed: json.stats[5].base_stat
        };
    }

    toString(): string {
        return `${this.name}:\n${this.description}\nTipo:${this.types[0]}`;
    }

    private defineTypes(rawType: RawType[]): string[] {

        let result: string[] = []
        for (const rType of rawType) {
            const isAllowedType: boolean =
                this.allowedTypes.indexOf(rType.type.name) > -1;
            if (isAllowedType) {
                result.push(rType.type.name);
            } else {
                result.push("unknow");
            }
        }
        return result;
    }
}

interface RawType {
    slot: number,
    type: {
        name: string,
        url: string
    }
}