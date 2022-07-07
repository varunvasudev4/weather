
fetch(`https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=efd88765b4d29e369592296215478161`)
.then(result=>result.json())
.then(cweather=>display(cweather))

function weather(){
    cityInp = inp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=efd88765b4d29e369592296215478161`)
    .then(result=>result.json())
    .then(cweather=>display(cweather))
}
function display(cweather) {
    if(cweather.cod=="404"){
        alert("City not found")
    }else{
        city.innerHTML = cweather.name
        temp.innerHTML = Math.floor(cweather.main.temp-273)
        cloud.innerHTML = cweather.weather[0].main
        feelslike.innerHTML = Math.floor(cweather.main.feels_like-273)
        humidity.innerHTML = cweather.main.humidity
        pressure.innerHTML = cweather.main.pressure
        wind.innerHTML = cweather.wind.speed
        visibility.innerHTML = cweather.visibility
        //sunrise.innerHTML = cweather.sys.sunrise
        picChg(cweather.weather[0].main)

    }
}
function picChg(wthr){
    if(wthr=="Clouds"){
        weather.src="./image/cloudy.jpg"
    }else if(wthr=="Rain"||wthr=="Drizzle"){
        weather.src="./image/rainy.jpg"
    }
}
