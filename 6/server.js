const http = require("http")
const qrcode = require("qrcode")
const server = http.createServer((request, response) => {
  run().catch((error) => console.error(error.stack))
  async function run() {
    const data = await qrcode.toDataURL(
      "http://www.neoland.es/"
    )
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`<img src="${data}">`)
    response.end()
  }
})
server.listen(4444)
console.log("server_qrcode_html.js in port 4444 is init")
