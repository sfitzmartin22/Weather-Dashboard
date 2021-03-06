cityname = "columbus"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=aecd33111ddcc6f97d93723ed12bb220";
var apiUrlF = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=aecd33111ddcc6f97d93723ed12bb220";

fetch(apiUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        currentDate = moment().format("dddd, MMMM Do");

var cityNameEl = $("<h2>").text(data.name + ": " + currentDate);
var currentweather = data.weather[0].main;
var tempEl = $("<p>").text("Temperature: " + data.main.temp);
var humEl = $("<p>").text("Humidity: " + data.main.humidity);
var windEl = $("<p>").text("Wind Speed: " + data.wind.speed);

var divFormat = $('<div>');
divFormat.append(cityNameEl, tempEl, humEl, windEl);

$("#city-name").html(divFormat);
    });


