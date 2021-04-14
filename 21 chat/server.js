// const app = require("express")()
// const server = require("http").createServer(app)

// const io = require("socket.io")(server)

// const PORT = 2021

// io.on("connection", () => {
//   /* … */
// })
const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server)

const PORT = 2021

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public/html", {extensions: ["html"]}))
app.use("/js", express.static(__dirname + "/node_modules/socket.io/client-dist"))

io.on("connection", (socket) => {
  console.log("nuevo usuario conectado")
  socket.on("addNewMessage", (message, name) => {
    io.emit("paintMessage", name, message)
  })

  socket.on("disconect", () => {
    console.log("susuario desconectado")
  })
})

server.listen(PORT, () => {
  console.log(`server runing in localhost:${PORT}`)
})
