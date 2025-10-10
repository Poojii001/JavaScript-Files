var center = document.querySelector(".center")
var second = document.querySelector(".second")
var input = document.querySelector("#name")

function generate(key,value){
    let itemsDiv = document.createElement("div")
    itemsDiv.classList.add("items")

    let keyDiv = document.createElement("div")
    keyDiv.classList.add("key")

    if(key==="flags"){
        let img = document.createElement("img")
        img.src = value
        keyDiv.appendChild(img)
    }
    else if(key==="maps"){
        let a = document.createElement("a")
        a.href = value
        a.innerHTML = "Click here to open google map"
        a_target = "_blank"
        keyDiv.appendChild(a)
    }
    else
    keyDiv.innerHTML = key

    let valueDiv = document.createElement("div")
    valueDiv.classList.add("key")
    valueDiv.innerHTML = value

    itemsDiv.appendChild(keyDiv)
    itemsDiv.appendChild(valueDiv)
    second.append(itemsDiv)
}

function getAPIData(){
    let name = "bharat"

    if(Input.value !== "") {
        name = input.value
        input.value = ""
    }

    let request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/bharat")
    request.send()

    request.addEventListener("load",()=>{
        let data = JSON.parse(request.responseText)
        data.forEach(x => {
            console.log("name",x.name.official)
            console.log("capital",x.capital)
            console.log("flags",x.flags.png)
            console.log("population",x.population)
            console.log("area",x.area)
            console.log("region",x.region)
            console.log("subregion",x.subregion)
            console.log("continents",x.continents)
            console.log("borders",x.borders)
            console.log("timezone",x.timezone)
            console.log("landlocked",x.landlocked)
            console.log("independent",x.independent)
            console.log("unMember",x.unMember)
            console.log("maps",x.maps.googleMaps)
            console.log("langua",x.langua)
            console.log("currencies",x.currencies)

        });
    })
}
getAPIData()