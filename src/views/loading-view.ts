import { BaseView } from "./base-view";
import { ErrorView } from "./error-view";

export class LoadigView extends BaseView {

    base = document.createElement("div");

    attachViewTo(id: string) {
        const target = document.getElementById(id);
        if (!target) throw new Error(`There's no id whit the name "${id}"`);
        try {
            const img = document.createElement("img");
            //img.src = "https://24.media.tumblr.com/tumblr_mcm1ec68fN1qfqgb9o1_1280.gif";
            img.src = "https://i.gifer.com/2iiJ.gif";
            this.base.className = "loader";
            this.base.appendChild(img);
            target.appendChild(this.base);
        } catch (err) {
            const msg = new ErrorView(err);
            msg.attachViewTo("msg");
        }
    }
    hide() {
        this.base.style.display = "none";
    }
    show() {
        this.base.style.display = "flex";
    }
}