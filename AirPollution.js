//Sakib Ahmed - Air Pollution

let airPollution = {
    "apiKey" : "INSERT KEY" ,
    fetchAirPollution: function (lat, lon) {
        fetch(
            "http://api.openweathermap.org/data/2.5/air_pollution?lat="
            + lat
            + "&lon=" + lon
            + "&appid=" +
            this.apiKey
        )
        .then ( (response) => {
            if (!response.ok) {
                alert ("No Air Pollution Data Found.");
                throw new Error ("No Air Pollution Data Found.");
            }
            return response.json();
        })
        .then ((data) => this.displayAirPollution(data));
    },

    displayAirPollution: function (data) 
    {
        const { airQuality } = data.main;
        document.querySelector(".airQuality").innerText = airQuality;
        document.querySelector(".airPollution").classList.remove("Loading");
    },

    search: function () {
      this.fetchAirPollution(document.querySelector(".search-bar").value);
    }
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    airPollution.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        airPollution.search();
      }
    });


  

  
  