import { Pokemon } from "../models/pokemon";
import { BaseView } from "./base-view";
import { ErrorView } from "./error-view";

export class PokemonView extends BaseView {
    card = document.createElement("div");
    pokemon: Pokemon;

    constructor(pokemon: Pokemon) {
        super();
        this.pokemon = pokemon;
    }

    attachViewTo(id: string) {
        const target = document.getElementById(id);
        if (!target) throw new Error(`There's no id whit the name "${id}"`);
        try {
            this.card.className = "card col s12 m6 l3 ";

            const content = document.createElement("div");
            content.className = "card-content";

            const imageHolder = document.createElement("div");
            imageHolder.className = "card-image";

            const image = document.createElement("img");
            image.src = this.pokemon.imgPath;
            image.alt = this.pokemon.name;
            image.style.backgroundColor = this.getColor(this.pokemon.types[0]);

            const cardTitle = document.createElement("span");
            cardTitle.style.paddingTop = "2rem"
            cardTitle.className = "card-title";
            cardTitle.textContent = this.pokemon.name;

            imageHolder.appendChild(image);
            imageHolder.appendChild(cardTitle);

            content.append(
                `${this.pokemon.description}`)

            this.card.appendChild(imageHolder);
            this.card.appendChild(content);


            target.appendChild(this.card);
        } catch (err) {
            const msg = new ErrorView(err);
            msg.attachViewTo("msg");
        }
    }

    hide(): void {
        throw new Error("Method not implemented.");
    }

    show() { }

    private getColor(pokemonType: string): string {
        const i = this.pokemon.allowedTypes.indexOf(pokemonType);
        const colors: string[] = [
            "#E8E6CD",
            "#FD5A5A",
            "#403DF0",
            "#86D683",
            "#FFD000",
            "#5DC3FF",
            "#E06236",
            "#BA3BCF",
            "#BB620D",
            "#D3FEFB",
            "#FFCC52",
            "#A016DA",
            "#EAEAEA",
            "#FF52D7",
            "#E036A7",
            "#923BFF",
            "#DEC953",
            "#343434"
        ]
        return colors[i];
    }
}