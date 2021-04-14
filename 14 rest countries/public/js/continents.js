const region = document.title
const paises = document.querySelector("#paises")

fetch(`https://restcountries.eu/rest/v2/region/${region}`)
  .then((data) => data.json())
  .then((data) => {
    paises.innerHTML = data
      .map((x) => `<li>${x.name} - ${x.capital}</li>`)
      .join(" ")
    console.log(data)
  })
