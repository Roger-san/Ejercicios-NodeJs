let p1 = []
let p2 = []

let player = "player 1"
let iaPlayer = ""

const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
]
const choosePlayers = () => {
  const container = document.getElementById("choosePlayers")

  if (container.style.display === "none") container.style.display = "flex"

  document.getElementById("p1").addEventListener("click", (event) => {
    iaPlayer = "on"
    container.style.display = "none"
    renderCells()
  })
  document.getElementById("p2").addEventListener("click", (event) => {
    iaPlayer = "off"
    container.style.display = "none"
    renderCells()
  })
}
const renderCells = () => {
  p1 = []
  p2 = []
  const container = document.getElementById("flex")
  flex.innerHTML = ""

  for (let x = 1; x < 10; x++) {
    const div = document.createElement("div")
    div.id = x
    div.addEventListener("click", (event) => {
      if (!event.target.className) {
        event.target.className = player === "player 1" ? "player1" : "player2"
        addCell(Number.parseInt(event.target.id))

        didWin()
        changePlayer()
      }
    })
    container.appendChild(div)
  }
}
const changePlayer = () => {
  if (iaPlayer === "off") {
    player === "player 1" ? (player = "player 2") : (player = "player 1")
  } else {
    if (player === "player 1") {
      player = "ia"
      playIa()
    } else player = "player 1"
  }
}
const addCell = (number) => {
  player === "player 1" ? p1.push(number) : p2.push(number)
}
const didWin = () => {
  const playerCells = player === "player 1" ? p1 : p2
  winConditions.forEach((condition) =>
    condition.every((number) => playerCells.includes(number))
      ? alert(`${player} win`, choosePlayers(), renderCells())
      : console.log("meh")
  )
  tie()
}
const tie = () => {
  if (p1.length + p2.length === 9) alert("tablas"), choosePlayers(), renderCells()
}
const playIa = () => {
  const randomPic = () => {
    const cell = document.getElementById(random())
    if (cell.className !== "player1") {
      cell.className = "player2 "
      addCell(Number.parseInt(cell.id))
      didWin()
      changePlayer()
    } else randomPic()
  }

  const random = () => {
    return (Math.floor(Math.random() * 9) + 1).toString()
  }
  setTimeout(randomPic(), 500)
}
choosePlayers()
