const searchButton = document.querySelector("#srch-btn");
const searchCity = document.querySelector("#citySearch");
const apiKey = "e2d838addde4c3e26a61a53bde32a41c";

searchButton.addEventListener("click", function () {
  const city = searchCity.value;
  console.log(city);
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
    .then((data) => {
      console.log(data);
      fiveDayWeather(data.coord.lat, data.coord.lon);
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

/* display current weather */
function displayCurrentWeather(data) {
  // Update the HTML elements with the relevant weather data
  document.querySelector("#todaysWeatherCard .currentSearch").textContent =
    data.name;
  document.querySelector(
    "#todaysWeatherCard .currentTemp"
  ).textContent = `Temperature: ${data.main.temp} °F`;
  document.querySelector(
    "#todaysWeatherCard .currentWind"
  ).textContent = `Wind Speed: ${data.wind.speed} mph`;
  document.querySelector(
    "#todaysWeatherCard .currentHumidy"
  ).textContent = `Humidity: ${data.main.humidity}%`;
}
