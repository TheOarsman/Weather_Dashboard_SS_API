const searchButton = document.querySelector("#srch-btn");
const searchCity = document.querySelector("#citySearch");
const apiKey = "e2d838addde4c3e26a61a53bde32a41c";

// EventListener for "Search" button to be clicked
searchButton.addEventListener("click", function () {
  const city = searchCity.value;
  console.log("city on click", city);
  currentWeather(city);
});

// EventListener for "Enter" key to be pressed
searchCity.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const city = searchCity.value;
    saveCityToLocalStorage(city); // Save city to local storage
    currentWeather(city);
  }
});

// Saving searches to Local Storage
function saveCityToLocalStorage(city) {
  // Retrieve existing searches from local storage or initialize an empty array
  const searches = JSON.parse(localStorage.getItem("searches")) || [];
  // Add the new city to the array if it's not already present
  if (!searches.includes(city)) {
    searches.push(city);
    localStorage.setItem("searches", JSON.stringify(searches));
    // Update the search buttons in the UI
    renderSearchButtons();
  }
}

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

      const currentDate = dayjs().format("MMMM D, YYYY"); // current date
      const currentIcon = wData.weather[0].icon; // current weather icon
      // const currentWeather = wData.weather[0].description; // current weather description
      const currentTemp = wData.main.temp; // current temperature in fahrenheit
      const currentHumidity = wData.main.humidity; // current humidity
      const currentWind = wData.wind.speed; // current wind speed
      const weatherIconSrc = `https://openweathermap.org/img/w/${currentIcon}.png`;

      // console.log(currentIcon);
      // console.log(currentDate);
      // console.log(currentWeather);
      // console.log(currentTemp);
      // console.log(currentHumidity);
      // console.log(currentWind);

      const todaysWeatherCardElement =
        document.getElementById("todaysWeatherCard");
      const todaysWeatherCard = `<div class="card">
  <div class="card-body">
    <h3 class="currentSearch">${city}</h3>
    <h4 class="currentTime">${currentDate}</h4>
    <br />
    <img src="${weatherIconSrc}" alt="weather image">
    <br />
    <div class="currentTemp">Temp: ${currentTemp}</div>
    <div class="currentWind">Wind Speed: ${currentWind}</div>
    <div class="currentHumid"> Humidity: ${currentHumidity}</div>
  </div>
</div>`;
      todaysWeatherCardElement.innerHTML = todaysWeatherCard;

      fiveDayWeather(wData.coord.lat, wData.coord.lon);
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
    .then((futureForecast) => {
      console.log(futureForecast);
      //instead of returning future forecast, just call after doing "the stuff"
      return futureForecast;
    });
}

function renderSearchButtons() {
  const searchButtonContainer = document.getElementById(
    "searchButtonContainer"
  );
  searchButtonContainer.innerHTML = ""; // Clear previous buttons
  const searches = JSON.parse(localStorage.getItem("searches")) || [];
  // Create a button for each saved city
  searches.forEach((city) => {
    const button = document.createElement("button");
    button.textContent = city;
    button.classList.add("btn", "btn-primary");
    button.addEventListener("click", function () {
      currentWeather(city);
    });
    searchButtonContainer.appendChild(button);
  });
}
