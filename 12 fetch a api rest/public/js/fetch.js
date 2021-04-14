let url = "http://localhost:1011/api/pokemon"
const div = document.querySelector("#pokemons")
let poke
const li = (data) => {
  return data
    .map(
      (pokemon) =>
        `<li>${pokemon.name} type: ${pokemon.type}</li>`
    )
    .join("")
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    div.innerHTML = `<ul>${li(data.pokemons)}</ul>`
  })
  .catch((error) => console.log(error))
