const apiKey= "openweather-apiKey numarasını gir"
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const arama=document.querySelector(".icerik input")
const aramaButton=document.querySelector(".icerik button")
const HavaDurumuIkon= document.querySelector(".havaDurumu-ikonlar")

async function HavaKontrol (sehir) {
    const response= await fetch(apiUrl + sehir +`&appid=${apiKey}`)
    if(response.status== 404) {
        document.querySelector(".error").style.display= "block"
        document.querySelector(".havaDurumu").style.display= "none"
    }
    var data= await response.json()

    document.querySelector(".sehir").innerHTML= data.name
    document.querySelector(".derece").innerHTML= Math.round(data.main.temp) + "°C "
    document.querySelector(".nem").innerHTML= data.main.humidity + "%"
    document.querySelector(".ruzgar").innerHTML= data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds") {
         HavaDurumuIkon.scr="img/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
                        HavaDurumuIkon.src= "img/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
                        HavaDurumuIkon.src= "img/rain.png"
                    }
    else if (data.weather[0].main == "Drizzle") {
                        HavaDurumuIkon.src= "img/drizzle.png"
                    }
    else if (data.weather[0].main == "Mist") {
                        HavaDurumuIcon.src= "img/mist.png"
                    }
                    document.querySelector(".havaDurumu").style.display= "block"
                    document.querySelector(".error").style.display= "none"
            }

aramaButton.addEventListener("click", ()=> {
        HavaKontrol(arama.value)
     }) 
