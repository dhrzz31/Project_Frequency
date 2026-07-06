import { showSplash } from "./components/Splash.js";
import { showMenu } from "./components/Menu.js";

export function startGame() {

    // Start with splash screen
    showSplash(showMenu);

}