const http = require("http")
const log = require("./log.js")
const server = http.createServer((request, response) => {
  log.writeLog(request)
  // const date = new Date()
  // fs.appendFile(
  //   "server.log",
  //   ` \n${new Date().toISOString()}|${request.method}|${
  //     request.headers.host
  //   }${request.url}`,
  //   (error) => {}
  // )
  response.writeHead(200)
  response.write("<h1>Hola mundo</h1>")
  response.end()
})
server.listen(7777)

console.log("server listen in port 7777")
