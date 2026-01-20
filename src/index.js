import "./style.css";

const API_URL ="https://kickjoke.onrender.com/api/joke";

async function appendJoke() {
  const res = await fetch(API_URL);
  const data = await res.json();
  document.getElementById("joke").textContent = data.joke;
}
appendJoke();

document
  .getElementById("generate")
  .addEventListener("click", appendJoke);
