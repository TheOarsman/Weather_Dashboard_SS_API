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

currentWeather(city)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const currentDate = dayjs().format("MMMM D, YYYY"); // current date
    const currentIcon = icon(data); // current weather icon
    const currentWeather = description(data); // current weather description
    const currentTemp = temp(data); // current temperature in farenheit
    const currentHumidy = humidity(data); // current humidity
    const currentWind = speed(data); // current wind speed

    const imgCode = data.weather[0].icon; // variale for current weather image symbol
    const icon = document.createElement("img");
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${imgCode}@2x.png`
    );
    weatherWidget(
      "Temperature: " + temperature + " °F",
      "Humidity: " + humidity + " %",
      "Temp. feels like " + butfeelsLike + " °F",
      currentDate,
      "Wind Speed: " + windSpeed + " mph",
      imgCode,
      cityName
    );
  });
locationInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchButton.click();
    document.location.href = "#mapWeatherdata"; // to prevent page from going to recent searches after clicking enter
  }
});

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
