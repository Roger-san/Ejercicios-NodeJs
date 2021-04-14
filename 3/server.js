const http = require("http")
const fs = require("fs")

const server = http.createServer((request, reponse) => {
  let path = `html${request.url}`
  fs.readFile(path, (error, data) => {
    if (error) {
      reponse.writeHead(400)
      reponse.write("<h1>Error 400</h1>")
      reponse.end()
    } else {
      reponse.writeHead(200, {"Content-Type": "text/html"})
      reponse.write(data)
      reponse.end()
    }
  })
})

server.listen(2222)
console.log("hola mundo")
