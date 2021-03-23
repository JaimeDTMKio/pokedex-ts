import { PokemonService } from "./services/pokemon-service";
import { LoadigView } from "./views/loading-view";
import { PokemonView } from "./views/pokemon-view";

// La funcion main es la funcion principal, en la cual llamamos todo lo que se desea ejecutar en el programa

const main = async (): Promise<void> => {

    const pkService: PokemonService = PokemonService.getInstance();
    const loading = new LoadigView();
    loading.attachViewTo("msg");
    const myPokemons = await pkService.getPokemons(1, 100);
    const views: PokemonView[] = [];

    for (let pokemon of myPokemons) {
        views.push(new PokemonView(pokemon));
    }

    for (let v of views) {
        v.attachViewTo("root");
    }

    loading.hide();
};

main();