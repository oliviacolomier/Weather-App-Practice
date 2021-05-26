//Valentina Molina - 7 Day Weather

let Week = {
    "apiKey": "INSERT KEY",
    fetchWeek: function(lat,lon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" 
            + lat
            + "&lon= " 
            + lon 
            + "&units=imperial&exclude=minutely,current,hourly&appid="
            + this.apiKey
        )
        .then ((response) => {
            if (!response.ok) {
                alert ("No 7 Day Weather Data Found.");
                throw new Error ("No 7 Day Weather Data Found.");
            } return response.json();
        })
        .then ((data) => this.displayweek(data));
    },

    displayWeek: function (data) 
    {
        const { timezone } = data.timezone;
        const { icon, description } = data.Week[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(timezone, icon, description, temp, humidity, speed)
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" 
          + icon + ".png";  
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "Â°F"; 
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";  
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "m/h";  
    },

    search: function () {
        this.fetchWeek(document.querySelector(".search-bar").value);
      }
    };


document.querySelector(".search button").addEventListener("click", function () {
    Week.search();
  });

  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        Week.search();
      }
    });