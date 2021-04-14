const fs = require("fs")

module.exports.writeLog = (request) => {
  fs.appendFile(
    "server.log",
    ` \n${new Date().toISOString()}|${request.method}|${
      request.headers.host
    }${request.url}`,
    (error) => {}
  )
}
