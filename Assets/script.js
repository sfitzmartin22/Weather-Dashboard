cityname = "columbus"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=aecd33111ddcc6f97d93723ed12bb220";
var apiUrlF = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=aecd33111ddcc6f97d93723ed12bb220";

fetch(apiUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });

fetch(apiUrlF) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });