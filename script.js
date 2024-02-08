const searchButton = document.querySelector("#srch-btn");
const searchCity = document.querySelector("#citySearch");
const apiKey = "e2d838addde4c3e26a61a53bde32a41c";

searchButton.addEventListener("click", function () {
  const city = searchCity.value;
  console.log("city on click", city);
  currentWeather(city);
});

function currentWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((wData) => {
      console.log("data from weather API", wData);
      const forecast = fiveDayWeather(wData.coord.lat, wData.coord.lon);
      const currentDate = dayjs().format("MMMM D, YYYY"); // current date
      const currentIcon = wData.weather[0].icon; // current weather icon
      const currentWeather = wData.weather[0].description; // current weather description
      const currentTemp = wData.main.temp; // current temperature in farenheit
      const currentHumidity = wData.main.humidity; // current humidity
      const currentWind = wData.wind.speed; // current wind speed

      //     const icon = document.createElement("img");
      //     icon.setAttribute(
      //       "src",
      //       `https://openweathermap.org/img/wn/${imgCode}@2x.png`
      //     );
      //     weatherWidget(
      //       imgCode,
      //       "Temperature: " + temperature + " °F",
      //       "Humidity: " + humidity + " %",
      //       currentDate,
      //       "Wind Speed: " + currentWind + " mph",
      //       cityName
      //     );
    });
}

function fiveDayWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// locationInput.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     searchButton.click();
//     document.location.href = "#mapWeatherdata"; // to prevent page from going to recent searches after clicking enter
//   }
// });

// /* display current weather */
// function displayCurrentWeather(data) {
//   // Update the HTML elements with the relevant weather data
//   document.querySelector("#todaysWeatherCard .currentSearch").textContent =
//     data.name;
//   document.querySelector(
//     "#todaysWeatherCard .currentTemp"
//   ).textContent = `Temperature: ${data.main.temp} °F`;
//   document.querySelector(
//     "#todaysWeatherCard .currentWind"
//   ).textContent = `Wind Speed: ${data.wind.speed} mph`;
//   document.querySelector(
//     "#todaysWeatherCard .currentHumidy"
//   ).textContent = `Humidity: ${data.main.humidity}%`;
// }
