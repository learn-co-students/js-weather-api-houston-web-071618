document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("HOUWeatherChart").getContext("2d")
  const API_KEY = "4225cdc2fed2b88c1fedeaa3e0369224";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/29.8005,-95.3995?exclude=currently,minutely,daily";

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx)
});