import "./style.css";


async function appendJoke() {
  const res = await fetch("/api/joke");
  const data = await res.json();
  document.getElementById("joke").textContent = data.joke;
}

appendJoke();

document
  .getElementById("generate")
  .addEventListener("click", appendJoke);
