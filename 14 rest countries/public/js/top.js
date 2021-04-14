const paisesArea = document.querySelector("#area")
const paisesPop = document.querySelector("#population")

const render = (id, data) => {
  const ul = document.querySelector(`#${id}`)
  data.forEach((x) => {
    const li = document.createElement("li")
    li.innerHTML = `${x[1]} - ${x[0]}`
    ul.append(li)
  })
}

const info = (data, name) => {
  return data
    .map((x) => [x[name], x.name])
    .sort((a, b) => b[0] - a[0])
    .splice(0, 10)
}

fetch("https://restcountries.eu/rest/v2/all")
  .then((data) => data.json())
  .then((data) => {
    render("population", info(data, "population"))
    render("area", info(data, "area"))
  })
