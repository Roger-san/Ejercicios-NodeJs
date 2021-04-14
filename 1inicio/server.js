const http = require("http")
const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write("<h1>Curso fullStack Neoland</h1>")
  response.end()
})

const host = "127.0.0.1"
const port = "1111"

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http:/${host}:${port}`)
})
