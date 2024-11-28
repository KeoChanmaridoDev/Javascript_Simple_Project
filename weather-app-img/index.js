const apiKey ="6e4cb3ffa3e72ab954b69b78cd9bb5d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const waetherIcon = document.querySelector(".waether-icon")



async function checkWeather(city) {
    const respones = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await respones.json();
    if (respones.status === 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else 
    document.querySelector(".city").innerHTML  = data.name;
    document.querySelector(".temp").innerHTML  = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML  = data.main.humidity;
    document.querySelector(".wind").innerHTML  = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        waetherIcon.src = "./img/Clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        waetherIcon.src = "./img/Clear.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        waetherIcon.src = "./img/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity"){
        waetherIcon.src = "./img/humidity.png"
    }
    else if (data.weather[0].main == "Mist"){
        waetherIcon.src = "./img/mist.png"
    }
    else if (data.weather[0].main == "Rain"){
        waetherIcon.src = "./img/rain.png"
    }
    else if (data.weather[0].main == "Snow"){
        waetherIcon.src = "./img/snow.png"
    }
    else if (data.weather[0].main == "Wind"){
        waetherIcon.src = "./img/wind.png"
    }
    document.querySelector(".error").style.display = "none"
    document.querySelector(".weather").style.display = "block"
}
   




searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);

})
