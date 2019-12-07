//----------------------------------weather app---------------------------------------------

// Then dynamicaly generating buttons for each movie in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)


// Generate a reference to our location input field


var $inputField = $("#city-input");

// Add an event listener to the 'check weather button' that will make an AJAX call
var $weatherBtn = $("#add-city");
$weatherBtn.click(function(event){
    event.preventDefault()
   var userCity = $inputField.val()

   var queryUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=81fefb486ea6ff0b0adaaf2f65825e9f&q=" + userCity;

   $.ajax({
       url: queryUrl,
       method: "GET"
   }).then(function(response){
       console.log("here is the cities weather info: ", response)
       
       // Creating a list to hold the cities
       var cityList = $("<ul class='cityname'>");
       
       // Storing the city weather data
       var weather = response.object.name;
       
       // Creating an element to have the weather displayed
       var weatherElement = $("<p>").text("cityname: " + response.object.name);
       
       // Displaying the weather
       cityBtn.append(weatherElement);
       
    })
})
