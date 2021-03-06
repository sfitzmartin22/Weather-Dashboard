cityname = "austin"

//set api's to vaariable to call them in order to get data //
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=aecd33111ddcc6f97d93723ed12bb220";
var apiUrlF = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=aecd33111ddcc6f97d93723ed12bb220";

// getting and parsing data for the current temperature/wind speed/humidity//

fetch(apiUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);

        currentDate = moment().format("(L)");
// clearing html in order to input new information into it //
        $("#city-name").empty();

// creating and assigning texts to elements based on the info called from the api //
var cityNameEl = $("<h2>").text(data.name + ": " + currentDate);
var currentWeather = data.weather[0].main;
var tempEl = $("<p>").text("Temperature: " + data.main.temp + " °F");
var humEl = $("<p>").text("Humidity: " + data.main.humidity + "%");
var windEl = $("<p>").text("Wind Speed: " + data.wind.speed + " MPH");

// if statement to display the correct current weather icon //

if (currentWeather === "Clear") {
    var Icon = $("<img>").attr("src","http://openweathermap.org/img/wn/01d@2x.png");
    Icon.attr("style", "height: 80px; width: 80px");
} else if (currentWeather === "Clouds") {
    var Icon = $("<img>").attr("src","http://openweathermap.org/img/wn/04d@2x.png");
    Icon.attr("style", "height: 80px; width: 80px");
} else if (currentWeather === "Rain") {
    var Icon = $("<img>").attr("src","http://openweathermap.org/img/wn/10d@2x.png");
    Icon.attr("style", "height: 80px; width: 80px");
} else if (currentWeather === "Thunderstorm") {
    var Icon = $("<img>").attr("src","http://openweathermap.org/img/wn/11d@2x.png");
    Icon.attr("style", "height: 80px; width: 80px");
} else if (currentWeather === "Snow") {
    var Icon = $("<img>").attr("src","http://openweathermap.org/img/wn/13d@2x.png");
    Icon.attr("style", "height: 80px; width: 80px");
} else if (currentWeather === "Mist") {
    var Icon = $("<img>").attr("src","http://openweathermap.org/img/wn/50d@2x.png");
    Icon.attr("style", "height: 80px; width: 80px");
}

// creating and appending all the elements to a div to post the info on the html //
var divFormat = $('<div>');
divFormat.append(cityNameEl, Icon, tempEl, humEl, windEl);

// posting info on html from the div i created //
$("#city-name").html(divFormat);
});

// getting and parsing api for the five day forecast //
fetch(apiUrlF) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
