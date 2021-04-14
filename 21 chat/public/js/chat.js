const socket = io()
const message = document.getElementById("inputMessage")
message.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage()
  }
})
const sendMessage = () => {
  const name = document.getElementById("idUser")
  const message = document.getElementById("inputMessage")
  socket.emit("addNewMessage", message.value, name.value)
}
socket.on("paintMessage", (message, name) => {
  const ul = document.getElementById("ulMessage")
  const li = document.createElement("li")
  ul.appendChild(li)
  li.innerHTML = `${name}: ${message}`
})
