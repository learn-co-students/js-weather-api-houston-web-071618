document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  const API_KEY = "89b1f7694a3597bbe7bbd7ead2fc067c";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently,minutely,daily";

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx)
});
