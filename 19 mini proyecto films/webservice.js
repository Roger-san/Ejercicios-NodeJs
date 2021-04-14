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

app.listen(PORT, () => console.log(`server corriendo en localhost:${PORT}`))
