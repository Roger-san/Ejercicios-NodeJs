const express = require("express")
const fs = require("fs")
const formidable = require("formidable")

const PORT = 2020

const app = express()

app.use(express.static(__dirname + "/public/html", {extensions: ["html"]}))
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist/"))
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/img", express.static(__dirname + "/public/img"))

app.post("/uploadFile", (req, res) => {
  const form = new formidable.IncomingForm() // iniciamos formidable
  form.parse(req, (err, fields, files) => {
    console.log("fields:", fields)
    console.log("files:", files)
  }) //parseamos la request para que formidable lo entienda
  form.on("fileBegin", (name, file) => {
    file.path = __dirname + "/public/img/" + file.name
  }) // evento que se ejecuta el empezar la subida
  form.on("file", (name, file) => {
    console.log("uploaded")
  }) // evento que se ejecuta al terminar la subida
  form.on("end", () => {
    res.redirect("/galeria")
  }) // evento que se ejecuta al final de todo el proceso
})

app.get("/api/images", (request, response) => {
  fs.readdir("./public/img", (err, files) => {
    response.status(200).send(files)
  })
})

app.listen(PORT, () => console.log(`server corriendo en localhost:${PORT}`))
