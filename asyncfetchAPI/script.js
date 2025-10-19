var center = document.querySelector(".center")
var second = document.querySelector(".second")
var input = document.querySelector("#name")

function generate(key, value) {
    let itemsDiv = document.createElement("div")
    itemsDiv.classList.add("items")

    let keyDiv = document.createElement("div")
    keyDiv.classList.add("key")
    keyDiv.innerHTML = key

    let valueDiv = document.createElement("div")
    valueDiv.classList.add("value")


    if (key === "flags") {
        let img = document.createElement("img")
        img.src = value
        valueDiv.appendChild(img)
    }
    else if (key === "maps") {
        let a = document.createElement("a")
        a.href = value
        a.innerHTML = "Click here to open google map"
        a_target = "_blank"
        valueDiv.appendChild(a)
    }
    else
        valueDiv.innerHTML = value

    itemsDiv.appendChild(keyDiv)
    itemsDiv.appendChild(valueDiv)
    second.append(itemsDiv)
}

async function getAPIData() {
    let name = "bharat"

    if (input.value !== "") {
        name = input.value
        input.value = ""
    }
    try {
        let response = await fetch("https://restcountries.com/v3.1/name/" + name)
        let data = await response.json()

        center.removeChild(second)
        second = document.createElement("div")
        second.classList.add("second")
        center.appendChild(second)

        data.forEach(x => {
            generate("name", x.name.official)
            generate("capital", x.capital)
            generate("flags", x.flags.png)
            generate("population", x.population)
            generate("area", x.area)
            generate("region", x.region)
            generate("subregion", x.subregion)
            generate("continents", x.continents)
            generate("borders", x.borders)
            generate("timezone", x.timezone)
            generate("landlocked", x.landlocked)
            generate("independent", x.independent)
            generate("unMember", x.unMember)
            generate("maps", x.maps.googleMaps)
            generate("language", Object.values(x.language))
            generate("currencies", Object.values(Object.values(x.currencies)[0]))

        });
    } catch (error) {
        alert("Invalid Country name...")
    }
}
getAPIData()