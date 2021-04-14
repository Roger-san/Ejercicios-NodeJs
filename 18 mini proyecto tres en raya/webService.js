const express = require("express")
const app = express()
const PORT = 1018

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*") // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
  app.options("*", (req, res) => {
    // allowed XHR methods
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS")
    res.send()
  })
})

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/css", express.static(__dirname + "/public/css"))

app.use(express.static(__dirname + "/public/html", {extensions: ["html"]}))
app.get("", (req, res) => {
  fs.readFile("./public/html/index.html", (err, data) => {
    if (err) log.error(req)
    else res.status(200).type("html").send(data)
  })
})

app.listen(PORT, () => {
  console.log(`server corriendo en localhost:${PORT}`)
})
