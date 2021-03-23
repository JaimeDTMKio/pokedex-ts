import { BaseView } from "./base-view";

export class ErrorView extends BaseView {

    base = document.createElement("div");
    error: Error;

    constructor(error: Error) {
        super();
        this.error = error;
    }
    attachViewTo(id: string): void {
        const target = document.getElementById(id);
        if (!target) throw new Error(`There's no id whit the name "${id}"`);
        try {
            const img = document.createElement("img");
            img.src = "https://media.tenor.com/images/9b6676bde88262d50a7b2b2620bf8768/tenor.gif";
            const errorMsg = document.createElement("h3");
            errorMsg.textContent = this.error.message;
            errorMsg.style.marginTop = "1rem";
            errorMsg.style.color = "#FFF";
            this.base.className = "warning";
            this.base.appendChild(img);
            this.base.appendChild(errorMsg);
            target.appendChild(this.base);

        } catch (err) {
            console.error(err);
        }
    }
    hide(): void {
        throw new Error("Method not implemented.");
    }
    show(): void {
        throw new Error("Method not implemented.");
    }

}