let historicalWeather = 
{
    "apiKey": "INSERT KEY",
    fetchHistoricalWeather: function (lat, lon, time) {
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="
        + lat
        + "&lon="
        + lon
        + "&dt={time}"
        + time 
        + "&appid="
        + this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No Historical Weather found.");
            throw new Error("No Historical Weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayHistoricalWeather(data));
    },
    displayHistoricalWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind_speed;
      document.querySelector(".city").innerText = name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },
    search: function () {
      this.fetchHistoricalWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
