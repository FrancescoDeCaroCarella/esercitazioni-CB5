import { c, q, GET, POST, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;
const container = q(".pokemon_container");

const ul = q(".pokemonList");

//FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    // id: uuidv4(),
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

//FORM LIST
window.onload = GET(url).then((res) =>
  res.map(
    (pkm) => (ul.innerHTML += `<li>#${pkm.id} ${pkm.name}, ${pkm.type}</li>`)
  )
);

//CARD CREATION
const createCard = (res) => {
  const cardEl = c("div");
  cardEl.className = "card";
  cardEl.classList.add(`bg-${res?.type[0].toLowerCase() + res?.type.slice(1)}`); //Classe per assegnare il background-color

  const imgEl = c("img");
  const idEl = c("p");
  const nameEl = c("h1");
  const typeEl = c("p");

  idEl.className = "pokemon-id";
  imgEl.className = "img";
  nameEl.className = "pokemon_name";
  typeEl.className = "pokemon_type";

  idEl.textContent = "# " + res.id; 
  nameEl.textContent = res.name;
  typeEl.textContent = `Type: ${res.type}`;
  imgEl.setAttribute("src", `https://picsum.photos/200?${(res?.id)}`);
  imgEl.setAttribute("alt", "image");

  cardEl.append(imgEl, idEl, nameEl, typeEl);
  container.append(cardEl);
};;

//CARD LIST
window.onload = GET(url).then((res) => res.map((res) => createCard(res)));
