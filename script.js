//----------------------------------weather app---------------------------------------------

// Then dynamicaly generating buttons for each movie in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)

// Generate a reference to our location input field
var $inputField = $("#city-input");
var $previousSearches = $("#previousSearches");

// Add an event listener to the 'check weather button' that will make an AJAX call
var $weatherBtn = $("#add-city");
var previousSearches = [];

function makeSearch(userCity) {
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=81fefb486ea6ff0b0adaaf2f65825e9f&q=" + userCity + "&units=metric";

  return $.ajax({
    url: queryUrl,
    method: "GET"
  })
}

function addToSearchHistory(userCity) {
  var $previousSearchListItem = $("<li>");
  $previousSearchListItem.click(makeSearch)
  $previousSearchListItem.text(userCity)
  $previousSearches.append($previousSearchListItem)
  return;
}

$weatherBtn.click(function (event) {
  event.preventDefault()

  //given input field in index.html a variable
  var userCity = $inputField.val()

  //api address + inputted city
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=81fefb486ea6ff0b0adaaf2f65825e9f&q=" + userCity + "&units=metric";

  //var newUrl = "https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";
  //console.log(newUrl)


  //first ajax call to receive weather info of inputted city
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    if (previousSearches.includes(userCity) === false) { 
      previousSearches.push(userCity);
      window.localStorage.setItem("previousSearches", JSON.stringify(previousSearches));

      addToSearchHistory(userCity);
    }
    //our console.log response from api server displaying info we have requested 
    console.log("here is the cities weather info: ", response);
    // console.log("i am her: ", response.name);

    currentWeather(response);
  })


});
//-----------------------------------------------------------------------------------------------------------------------------


//-------------------------block 1- user input and city list-----------------------------------------------------------------
//var cityInput = document.getElementById("city-input");
//var addBtn = cityInput.onclick(

//function addCity

// get current history, if any

/* var history = JSON.parse(window.localStorage.getItem("history")) || [];
if (history.length > 0) {
 currentWeather(history[history.length-1]);
}
for (var i = 0; i < history.length; i++) {
  makeRow(history[i]);
}

$(".history").on("click", "li", function() {
    currentWeather($(this).text());
  });  */

//-------------------------block 2- displayed current city weather info-------------------------------------------------------
function currentWeather(response) {
  var cityName = response.name;
  $("#name").text("City name: " + cityName);
  var cityTemp = response.main.temp;
  $("#temperature").text("City temperature: " + cityTemp + "˚C");
  var cityHumidity = response.main.humidity;
  $("#humidity").text("City humidity: " + cityHumidity + "%");
  var cityWind = response.wind.speed;
  $("#windspeed").text("City wind: " + cityWind + " MPH");
  var cityUv = response.main.humidity;
  $("#uvindex").text("City UV index: " + cityUv + " needs fix");
}

//------------------------block 3- displays 5 day weather forecast------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------

//things to do next
    //-create a <ul> in the input div 
    //create <li> objects using inputted cities inside the <ul>

//create objects in weather div to display attributes targeted in api
    //create div
    //display city name
    //use moment to display city local time and date 



    //var cityInput = document.getElementById("city-input");
//var addBtn = cityInput.onclick(

//function addCity

// get current history, if any

/* var history = JSON.parse(window.localStorage.getItem("history")) || [];
if (history.length > 0) {
  currentWeather(history[history.length-1]);
}
for (var i = 0; i < history.length; i++) {
  makeRow(history[i]);
}

$(".history").on("click", "li", function() {
    currentWeather($(this).text());
  });  */





  //NEED HELP WITH

    //CREATING CITY BUTTONS
    //FINDING UV FROM API
    //CREATING 2ND AJAX CALL
    //FINDING 5 DAY FORECASTS

    //.MOMENT
