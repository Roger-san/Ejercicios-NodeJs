const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
  let contentType
  let path

  const extension = request.url.split(".")[1]

  switch (extension) {
    case "html":
      path = "./public/html" + request.url
      contentType = "text/html"
      break
    case "css":
      path = "./public/css" + request.url
      contentType = "text/css"
      break
    case "js":
      path = "./public/js" + request.url
      contentType = "text/javascript"
      break
    case "ico":
      path = "./public/img" + request.url
      contentType = "image/ico"
      break
    default:
      ruta = ""
      contentType = ""
  }
  fs.readFile(path, (error, data) => {
    if (error) {
      response.writeHead(400, {"Content-Type": "text/html"})

      response.end()
    }
    if (data) {
      response.writeHead(200)
      response.write(data)
      response.end()
    }
  })
})

server.listen(1006)
