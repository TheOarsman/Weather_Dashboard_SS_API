const searchButton = document.querySelector("#srch-btn");
const searchCity = document.querySelector("#citySearch");
const apiKey = "e2d838addde4c3e26a61a53bde32a41c";

// Event listeners
searchButton.addEventListener("click", handleSearchButtonClick);
searchCity.addEventListener("keypress", handleSearchEnterPress);

// Saving searches to Local Storage
function saveCityToLocalStorage(city) {
  const searches = JSON.parse(localStorage.getItem("searches")) || [];

  // Ensure only the latest 8 searches are stored
  if (searches.length >= 8) {
    searches.shift(); // Remove the oldest search
  }

  // Add the new search to the end of the array
  searches.push(city);

  localStorage.setItem("searches", JSON.stringify(searches));
  renderSearchButtons();
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
      console.log("Current weather data:", wData);

      //data pulled from Weather API for current day Forecast
      const currentDate = dayjs().format("MMMM D, YYYY");
      const currentIcon = wData.weather[0].icon;
      console.log("Current weather icon:", currentIcon);
      const currentTemp = wData.main.temp;
      const currentFeelsLIke = wData.main.feels_like;
      const currentHumidity = wData.main.humidity;
      const currentWind = wData.wind.speed;
      const weatherIconSrc = `https://openweathermap.org/img/w/${currentIcon}.png`;

      // Set background image or animation based on weather condition
      setBackgroundBasedOnWeather(currentIcon);

      //element for populating main card with current weather
      const todaysWeatherCardElement =
        document.getElementById("todaysWeatherCard");
      const todaysWeatherCard = `<div class="card">
  <div class="card-body">
    <h1>${city}</h1>
    <h4>${currentDate}</h4>
    <!-- Adjust the width and height of the image using inline style -->
    <img src="${weatherIconSrc}" alt="weather image" style="width: 70px; height: 70px;">
    <h5>Temp(°F): ${currentTemp}</h5>
    <h5>Feels Like(°F): ${currentFeelsLIke}</h5>
    <h5>Wind Speed(MPH): ${currentWind}</h5>
    <h5> Humidity: ${currentHumidity}%</h5>
  </div>
</div>`;
      todaysWeatherCardElement.innerHTML = todaysWeatherCard;

      fiveDayWeather(city, wData.coord.lat, wData.coord.lon);
    });
}

function setBackgroundBasedOnWeather(iconCode) {
  console.log("Setting background based on weather with icon code:", iconCode);
  const body = document.querySelector("body");
  // Defining mapping of weather condition to background animation
  switch (iconCode) {
    case "11d":
      body.style.backgroundImage = "assets/images/Thunderstorm.gif";
      break;
    case "09d":
    case "10d":
    case "13d":
      body.style.backgroundImage = "assets/images/Snow.gif";
      break;
    case "13d":
      body.style.backgroundImage = "assets/images/Fog_Haze.gif";
      break;
    case "01d":
    case "01n":
      body.style.backgroundImage = "assets/images/Clear.gif";
      break;
    case "02d":
    case "02n":
    case "03d":
    case "03nd":
    case "04d":
    case "04d":
      body.style.backgroundImage = "assets/images/Cloudy.gif";
    default:
      body.style.backgroundImage =
        "assets/images/C5F02B2D-1E76-4AD7-A376-75569D65BD94.png";
  }
}

// Fetch five day weather forecast
function fiveDayWeather(city, lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  )
    .then((res) => res.json())
    .then((futureForecast) => {
      console.log("Five day weather forecast data:", futureForecast);

      // Loop over each day's forecast data and set background image or animation
      futureForecast.list.forEach((forecast) => {
        const iconCode = forecast.weather[0].icon;
        setBackgroundBasedOnWeather(iconCode);
      });
      //data pulled from Weather API for day 1 Forecast
      const day1ForecastDate = dayjs(futureForecast.list[6].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day1ForecastIcon = futureForecast.list[6].weather[0].icon;
      console.log("Day 1 forecast icon:", day1ForecastIcon);
      const day1ForecastTemp = futureForecast.list[6].main.temp;
      const day1ForecastHumidity = futureForecast.list[6].main.humidity;
      const day1ForecastWind = futureForecast.list[6].wind.speed;
      const day1weatherIconSrc = `https://openweathermap.org/img/w/${day1ForecastIcon}.png`;

      //element for populating main card with day 1 weather
      const day1WeatherCardElement = document.getElementById("day1WeatherCard");
      const day1WeatherCard = `<div class="card">
  <div class="card-body">
    <h4>${day1ForecastDate}</h4>
    <img src="${day1weatherIconSrc}" alt="weather image">
    <h6>Temp(°F): ${day1ForecastTemp}</h6>
    <h6>Wind Speed(MPH): ${day1ForecastWind}</h6>
    <h6> Humidity: ${day1ForecastHumidity}%</h6>
  </div>
</div>`;
      day1WeatherCardElement.innerHTML = day1WeatherCard;

      //data pulled from Weather API for day 2 Forecast
      const day2ForecastDate = dayjs(futureForecast.list[14].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day2ForecastIcon = futureForecast.list[14].weather[0].icon;
      console.log("Day 2 forecast icon:", day2ForecastIcon);
      const day2ForecastTemp = futureForecast.list[14].main.temp;
      const day2ForecastHumidity = futureForecast.list[14].main.humidity;
      const day2ForecastWind = futureForecast.list[14].wind.speed;
      const day2weatherIconSrc = `https://openweathermap.org/img/w/${day2ForecastIcon}.png`;

      //element for populating main card with day 2 weather
      const day2WeatherCardElement = document.getElementById("day2WeatherCard");
      const day2WeatherCard = `<div class="card">
  <div class="card-body">
    
    <h4>${day2ForecastDate}</h4>
    <img src="${day2weatherIconSrc}" alt="weather image">
    <h6>Temp(°F): ${day2ForecastTemp}</h6>
    <h6>Wind Speed(MPH): ${day2ForecastWind}</h6>
    <h6> Humidity: ${day2ForecastHumidity}%</h6>
  </div>
</div>`;
      day2WeatherCardElement.innerHTML = day2WeatherCard;

      //data pulled from Weather API for day 3 Forecast
      const day3ForecastDate = dayjs(futureForecast.list[22].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day3ForecastIcon = futureForecast.list[22].weather[0].icon;
      console.log("Day 3 forecast icon:", day3ForecastIcon);
      const day3ForecastTemp = futureForecast.list[22].main.temp;
      const day3ForecastHumidity = futureForecast.list[22].main.humidity;
      const day3ForecastWind = futureForecast.list[22].wind.speed;
      const day3weatherIconSrc = `https://openweathermap.org/img/w/${day3ForecastIcon}.png`;

      //element for populating main card with day 3 weather
      const day3WeatherCardElement = document.getElementById("day3WeatherCard");
      const day3WeatherCard = `<div class="card">
  <div class="card-body">
    
    <h4>${day3ForecastDate}</h4>
    <img src="${day3weatherIconSrc}" alt="weather image">
    <h6>Temp(°F): ${day3ForecastTemp}</h6>
    <h6>Wind Speed(MPH): ${day3ForecastWind}</h6>
    <h6> Humidity: ${day3ForecastHumidity}%</h6>
  </div>
</div>`;
      day3WeatherCardElement.innerHTML = day3WeatherCard;

      //data pulled from Weather API for day 4 Forecast
      const day4ForecastDate = dayjs(futureForecast.list[30].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day4ForecastIcon = futureForecast.list[30].weather[0].icon;
      console.log("Day 4 forecast icon:", day4ForecastIcon);
      const day4ForecastTemp = futureForecast.list[30].main.temp;
      const day4ForecastHumidity = futureForecast.list[30].main.humidity;
      const day4ForecastWind = futureForecast.list[30].wind.speed;
      const day4weatherIconSrc = `https://openweathermap.org/img/w/${day4ForecastIcon}.png`;

      //element for populating main card with day 4 weather
      const day4WeatherCardElement = document.getElementById("day4WeatherCard");
      const day4WeatherCard = `<div class="card">
  <div class="card-body">
    
    <h4>${day4ForecastDate}</h4>
    <img src="${day4weatherIconSrc}" alt="weather image">
    <h6>Temp(°F): ${day4ForecastTemp}</h6>
    <h6>Wind Speed(MPH): ${day4ForecastWind}</h6>
    <h6> Humidity: ${day4ForecastHumidity}%</h6>
  </div>
</div>`;
      day4WeatherCardElement.innerHTML = day4WeatherCard;

      //data pulled from Weather API for day 5 Forecast
      const day5ForecastDate = dayjs(futureForecast.list[38].dt_txt).format(
        "MMMM D, YYYY"
      );
      const day5ForecastIcon = futureForecast.list[38].weather[0].icon;
      console.log("Day 5 forecast icon:", day5ForecastIcon);
      const day5ForecastTemp = futureForecast.list[38].main.temp;
      const day5ForecastHumidity = futureForecast.list[38].main.humidity;
      const day5ForecastWind = futureForecast.list[38].wind.speed;
      const day5weatherIconSrc = `https://openweathermap.org/img/w/${day5ForecastIcon}.png`;

      //element for populating main card with day 5 weather
      const day5WeatherCardElement = document.getElementById("day5WeatherCard");
      const day5WeatherCard = `<div class="card">
  <div class="card-body">
    
    <h4>${day5ForecastDate}</h4>
    <img src="${day5weatherIconSrc}" alt="weather image">
    <h6>Temp(°F): ${day5ForecastTemp}</h6>
    <h6>Wind Speed(MPH): ${day5ForecastWind}</h6>
    <h6> Humidity: ${day5ForecastHumidity}%</h6>
  </div>
</div>`;
      day5WeatherCardElement.innerHTML = day5WeatherCard;

      setBackgroundBasedOnWeather(day1ForecastIcon);
      setBackgroundBasedOnWeather(day2ForecastIcon);
      setBackgroundBasedOnWeather(day3ForecastIcon);
      setBackgroundBasedOnWeather(day4ForecastIcon);
      setBackgroundBasedOnWeather(day5ForecastIcon);
    });
}

// Function to render search buttons with saved search history
function renderSearchButtons() {
  const recentSearches = JSON.parse(localStorage.getItem("searches")) || [];
  const searchButtons = document.querySelectorAll(".recent-search-button");

  // Loop over the searchButtons in reverse order and recentSearches array normally
  for (let i = 0; i < searchButtons.length; i++) {
    const city = recentSearches[recentSearches.length - 1 - i];
    searchButtons[i].textContent = city || ""; // If city is undefined, set button text to empty string
    searchButtons[i].setAttribute("data-city", city); // Add data attribute
    searchButtons[i].addEventListener("click", function () {
      const clickedCity = this.getAttribute("data-city"); // Retrieve city from data attribute
      currentWeather(clickedCity);
    });
  }
}

// Call the renderSearchButtons function after defining it
renderSearchButtons();
