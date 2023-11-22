import {Burger} from "./utils/burger.js";
import {Home} from "../scripts/home.js";
import {PopUp} from "./utils/pop-up.js";
import {Router} from "./router.js";

class App {
    constructor() {
        this.router = new Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        this.router = new Router();
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
        // PopUp.show();
        // PopUp.deleteOperation();
        // Burger.showBurger();
        // Home.showGraphics();
    }
    handleRouteChanging(){
        this.router.openRoute();
    }
}
(new App());

