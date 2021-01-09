let card = document.getElementById("card")

let p = new Promise((resolve,reject)=>{
    let request = new XMLHttpRequest()
    request.open("GET","https://restcountries.eu/rest/v2/all",true)
    request.send()
    request.onload = function(){
        let data = JSON.parse(this.response)
        resolve(data)
    }
})

p
.then((data)=>{
    console.log(data)

    for(let i=0;i<data.length;i++){
        let div = document.createElement("div")
        div.innerHTML = `<div class="card" style="width: 20rem;"id="">
        <div class="card-head">
            <p>${data[i].name}</p>
        </div>
        <img src="${data[i].flag}" class="card-img-top" alt="...">
        <div class="card-body" >
            <ul>
                <li>Capital:<span id="capital">${data[i].capital}</span></li>
                <li>Country Code:<span id="">${data[i].alpha2Code},${data[i].alpha3Code}</span></li>
                <li>Region:<span id="">${data[i].region}</span></li>
                <li>Lat,Long:<span id="">${data[i].latlng.join(", ")}</span></li>
            </ul>
        </div>
    </div>`
        card.append(div)
    }

})
.catch((err)=>{
    console.log(err)
})