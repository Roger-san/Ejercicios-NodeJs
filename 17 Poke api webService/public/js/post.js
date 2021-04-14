const URL = `${heroku}/api/pokemons`
const heroku = "https://rsh-poke-api.herokuapp.com"
const postPokemon = () => {
  const newPokemon = {
    name: document.getElementById("name").value,
    type: document.getElementById("type").value
  }
  const opts = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newPokemon)
  }
  fetch(URL, opts)
    .then((data) => data.json())
    .then((pokemon) => {
      document.querySelector("#name").value = ""
      document.querySelector("#type").value = ""

      console.log(pokemon)
    })
    .catch((err) => console.log(err))
}
