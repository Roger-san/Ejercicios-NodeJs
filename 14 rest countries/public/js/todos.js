const paises = document.querySelector("#paises")
fetch("https://restcountries.eu/rest/v2/all")
  .then((data) => data.json())
  .then((data) => {
    paises.innerHTML = data
      .map((x) => `<li>${x.name} - ${x.capital}</li>`)
      .join(" ")
    console.log(data)
  })
