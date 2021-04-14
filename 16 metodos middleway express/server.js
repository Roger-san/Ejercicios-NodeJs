const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(__dirname + "/public"))

app.use(express.static(__dirname + "/public/html", {extensions: ["html"]}))
app.use("/js", express.static(path.join(__dirname + "public/js"), {"content-type": "js"}))

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(path.join(__dirname + "/node_modules/bootstrap/dist/js"), {
  "content-type": "js",
}))

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"))

app.listen(1016, () => console.log(`servidor corriendo en localhost:1016`))
