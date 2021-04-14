const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
  let path
  if (request.url === "/") {
    path = "index.html"
  } else {
    path = request.url.substring(1)
  }
  fs.readFile(path, (error, data) => {
    if (error) {
      fs.readFile("index.html", (error, data) => {
        response.writeHead(200)
        response.write(data)
        response.end()
      })
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html",
      })
      response.write(data)
      response.end()
    }
  })
})

server.listen(4444)
console.log("hola mundo")
