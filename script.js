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
      // Handle future forecast data as needed
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
