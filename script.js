//openweatherapi  api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}
var searchCity = document.querySelector("form");
console.log(searchCity)

//log city name when search button clicked
function search () {
console.log("form");
localStorage.setItem("")
}

// EventTarget.addEventListener("click", search())
//     document.querySelector("search").innerHTML


//search for city brings up current and future conditions

//searched city added to history

//searched city brings city name, date, icon of weather conditions, temperature, humidity and UV index

//UV index shows favorable (green), moderate (yellow) or severe (red conditions)

//searched city shows 5-day forecast that has date, icon representation of weather conditions, temperature, wind speed and humidity

//city that is clicked on from search history shows current and future conditions for that city