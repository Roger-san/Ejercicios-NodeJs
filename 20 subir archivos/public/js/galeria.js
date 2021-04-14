const render = () => {
  fetch("/api/images")
    .then((data) => data.json())
    .then((data) => {
      // var myCarousel = document.querySelector("#myCarousel")
      // var carousel = new bootstrap.Carousel(myCarousel)

      const container = document.getElementById("container")
      for (x = 0; x < data.length; x++) {
        const box = document.createElement("div")
        const img = document.createElement("img")
        if (x === 0) box.className = "carousel-item active"
        else box.className = "carousel-item"

        img.className = "d-block w-100"
        img.src = "/img/" + data[x]

        container.appendChild(box)
        box.appendChild(img)
      }
    })
}

render()
