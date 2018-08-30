document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  const API_KEY = "388b98e6a2eb275b0f855b8a8892929f";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/29.7575,-95.3668?exclude=currently,minutely,daily";


  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx)
});
