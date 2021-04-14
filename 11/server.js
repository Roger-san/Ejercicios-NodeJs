const express = require("express")
const pokemons = require("./dbPokemons")
const api = express()

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
  api.options("*", (req, res) => {
    // allowed XHR methods
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    )
    res.send()
  })
})

api.get("/api/pokemon", (request, response) => {
  response.status(200).send({
    success: true,
    message: "api pokemon",
    pokemons: pokemons.pokemons,
  })
})

api.listen(1011, () => {
  console.log("api corriendo en localhost:1011")
  //   console.log(pokemons)
})
