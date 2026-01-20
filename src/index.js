import randomJoke from "./randomJoke.js";

function appendJoke() {
    const joke = randomJoke();
    document.getElementById("joke").textContent = joke;
}

document.addEventListener("DOMContentLoaded", appendJoke);
document.getElementById("generate").addEventListener("click", appendJoke);
