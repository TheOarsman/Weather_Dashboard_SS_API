const searchButton = document.querySelector("#srch-btn");
const searchCity = document.querySelector("#citySearch");
const apiKey = "e2d838addde4c3e26a61a53bde32a41c";

// Event listeners
searchButton.addEventListener("click", handleSearchButtonClick);
searchCity.addEventListener("keypress", handleSearchEnterPress);

// Saving searches to Local Storage
function saveCityToLocalStorage(city) {
  const searches = JSON.parse(localStorage.getItem("searches")) || [];
  if (!searches.includes(city)) {
    searches.push(city);
    localStorage.setItem("searches", JSON.stringify(searches));
    renderSearchButtons();
  }
}

// Function to handle search button click
function handleSearchButtonClick() {
  const city = searchCity.value.trim();
  if (city !== "") {
    saveCityToLocalStorage(city);
    currentWeather(city);
    searchCity.value = ""; // Clear the input field after the search
  }
}

// Function to handle enter key press
function handleSearchEnterPress(e) {
  if (e.key === "Enter") {
    const city = searchCity.value.trim();
    if (city !== "") {
      saveCityToLocalStorage(city);
      currentWeather(city);
      searchCity.value = ""; // Clear the input field after the search
    }
  }
}

// Display current weather
function currentWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  )
    .then((res) => res.json())
    .then((wData) => {
      const currentDate = dayjs().format("MMMM D, YYYY");
      const currentIcon = wData.weather[0].icon;
      const currentTemp = wData.main.temp;
      const currentHumidity = wData.main.humidity;
      const currentWind = wData.wind.speed;
      const weatherIconSrc = `https://openweathermap.org/img/w/${currentIcon}.png`;

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
    });
}

// Fetch five day weather forecast
function fiveDayWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  )
    .then((res) => res.json())
    .then((futureForecast) => {
      console.log(futureForecast);
      const day1ForecastDate = dayjs(futureForecast.list[6].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day1ForecastIcon = futureForecast.list[6].weather[0].icon;
      const day1ForecastTemp = futureForecast.list[6].main.temp;
      const day1ForecastHumidity = futureForecast.list[6].main.humidity;
      const day1ForecastWind = futureForecast.list[6].wind.speed;
      const day1weatherIconSrc = `https://openweathermap.org/img/w/${day1ForecastIcon}.png`;

      const day2ForecastDate = dayjs(futureForecast.list[14].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day2ForecastIcon = futureForecast.list[14].weather[0].icon;
      const day2ForecastTemp = futureForecast.list[14].main.temp;
      const day2ForecastHumidity = futureForecast.list[14].main.humidity;
      const day2ForecastWind = futureForecast.list[14].wind.speed;
      const day2weatherIconSrc = `https://openweathermap.org/img/w/${day2ForecastIcon}.png`;

      const day3ForecastDate = dayjs(futureForecast.list[22].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day3ForecastIcon = futureForecast.list[22].weather[0].icon;
      const day3ForecastTemp = futureForecast.list[22].main.temp;
      const day3ForecastHumidity = futureForecast.list[22].main.humidity;
      const day3ForecastWind = futureForecast.list[22].wind.speed;
      const day3weatherIconSrc = `https://openweathermap.org/img/w/${day3ForecastIcon}.png`;

      const day4ForecastDate = dayjs(futureForecast.list[30].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day4ForecastIcon = futureForecast.list[30].weather[0].icon;
      const day4ForecastTemp = futureForecast.list[30].main.temp;
      const day4ForecastHumidity = futureForecast.list[30].main.humidity;
      const day4ForecastWind = futureForecast.list[30].wind.speed;
      const day4weatherIconSrc = `https://openweathermap.org/img/w/${day4ForecastIcon}.png`;

      const day5ForecastDate = dayjs(futureForecast.list[38].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day5ForecastIcon = futureForecast.list[38].weather[0].icon;
      const day5ForecastTemp = futureForecast.list[38].main.temp;
      const day5ForecastHumidity = futureForecast.list[38].main.humidity;
      const day5ForecastWind = futureForecast.list[38].wind.speed;
      const day5weatherIconSrc = `https://openweathermap.org/img/w/${day5ForecastIcon}.png`;
    });
}

// Function to render search buttons with saved search history
function renderSearchButtons() {
  const recentSearches = JSON.parse(localStorage.getItem("searches")) || [];
  const searchButtons = document.querySelectorAll(".recent-search-button");

  for (let i = 0; i < recentSearches.length; i++) {
    const city = recentSearches[i];
    const buttonIndex = i % searchButtons.length;

    searchButtons[buttonIndex].textContent = city;
    searchButtons[buttonIndex].setAttribute("data-city", city); // Add data attribute
    searchButtons[buttonIndex].addEventListener("click", function () {
      const clickedCity = this.getAttribute("data-city"); // Retrieve city from data attribute
      currentWeather(clickedCity);
    });
  }
}

// Call the renderSearchButtons function after defining it
renderSearchButtons();
