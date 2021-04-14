const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
  let path
  const url = request.url.split(".")[1]
  switch (url) {
    case "js":
      path = `./public/js/${request.url}`
      break
    case "html":
      path = "./index.html"
      break
    default:
      path = "./index.html"
      break
  }
  if (request.url)
    fs.readFile(path, (error, data) => {
      if (error) {
        response.writeHead(400)
        response.write("uuups")
        response.end()
      }
      if (data) {
        response.writeHead(200)
        response.write(data)
        response.end()
      }
    })
})

server.listen(1012)
