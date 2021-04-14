const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) => {
  const date = new Date()
  const fullDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  fs.appendFile(
    "server.log",
    ` \n${new Date().toISOString()}|${request.method}|${
      request.headers.host
    }${request.url}`,
    (error) => {}
  )
  response.writeHead(200)
  response.write("<h1>Hola mundo</h1>")
  response.end()
})
server.listen(7777)

console.log("server listen in port 7777")
