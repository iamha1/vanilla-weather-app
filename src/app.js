function displayTemperature(response){
    //console.log(response.data.main.temp);

    // let temperatureElement = document.querySelector("#temperature");
    // let cityElement = document.querySelector("#city");
    // let descriptionElement = document.querySelector("#description");
    // let humidityElement = document.querySelector("#humidity");
    // let windElement = document.querySelector("#wind");
    //  temperatureElement.innerHTML = Math.round;
    //  (response.data.main.temp);
    //  cityElement.innerHTML = response.data.name
}

let apiKey = "6cc18411b561b1e80a5c6dd7f61c6f82";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
    console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

