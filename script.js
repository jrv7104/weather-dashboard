//set variables for days, days of the week and months
var currentDay = document.getElementById("currentDay")
currentDay.innerText = moment().format("dddd, MMMM Do YYYY");

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var nameDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var numberDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

//openweatherapi  
var api = {
    key: "1870842f8aed3c5e2b7fa34a198fffef",
}

var searchCity = document.querySelector("#search");
var searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", search);

//log city name when search button clicked
function search (event) {
    event.preventDefault()
    var baseurl= "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.value + "&appid=1870842f8aed3c5e2b7fa34a198fffef&units=imperial&lat=data.coord.lat&lon=data.coord.lon"
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity.value + "&appid=1870842f8aed3c5e2b7fa34a198fffef&units=imperial"
    // console.log(event.target.value)

    fetch(baseurl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector("#city").textContent = searchCity.value
            document.querySelector("#temp").textContent = data.main.temp + " F"
            document.querySelector("#wind").textContent = data.wind.speed
            document.querySelector("#humidity").textContent = data.main.humidity

            // var uviURL 
            // var lon = data.coord.lon
            // var lat = data.coord.lat
            // fetch(uviURL)
            
        })

    fetch(fiveDayUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector("#temp1").textContent = data.list[0].main.temp + " F"
            document.querySelector("#wind1").textContent = data.list[0].wind.speed
            document.querySelector("#hum1").textContent = data.list[0].main.humidity
            document.querySelector("#temp2").textContent = data.list[8].main.temp + " F"
            document.querySelector("#wind2").textContent = data.list[8].wind.speed
            document.querySelector("#hum2").textContent = data.list[8].main.humidity
            document.querySelector("#temp3").textContent = data.list[15].main.temp + " F"
            document.querySelector("#wind3").textContent = data.list[15].wind.speed
            document.querySelector("#hum3").textContent = data.list[15].main.humidity
            document.querySelector("#temp4").textContent = data.list[15].main.temp + " F"
            document.querySelector("#wind4").textContent = data.list[15].wind.speed
            document.querySelector("#hum4").textContent = data.list[15].main.humidity
            document.querySelector("#temp5").textContent = data.list[23].main.temp + " F"
            document.querySelector("#wind5").textContent = data.list[23].wind.speed
            document.querySelector("#hum5").textContent = data.list[23].main.humidity
        })

        }
    // fetch(fiveDayUrl)
    // localStorage.setItem("result", "city");
    // document.getElementById("search").innerHTML = localStorage.getItem("result");

// EventTarget.addEventListener("click", search())
//     document.querySelector("search").innerHTML


//search for city brings up current and future conditions

//searched city added to history

//searched city brings city name, date, icon of weather conditions, temperature, humidity and UV index

//UV index shows favorable (green), moderate (yellow) or severe (red conditions)

//searched city shows 5-day forecast that has date, icon representation of weather conditions, temperature, wind speed and humidity

//city that is clicked on from search history shows current and future conditions for that city

// var obj = {
//     nameObj: "Mark"
// }

// console.log(obj.nameObj)