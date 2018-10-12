document.addEventListener("DOMContentLoaded", function() {
  var API_KEY = "87b4c2b461ccd3561db88831bbf19c45";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/";
  var URL =
    CORS_WRAPPER +
    "https://api.darksky.net/forecast/" +
    API_KEY +
    "/29.7604,-95.3698?exclude=currently,minutely,daily";
  var ctx = document.getElementById("HOUWeatherChart").getContext("2d");

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx);
});

// makeRequest(URL, function(json) {
//   var data = generateDataSet(getHours(json), getFahrenheits(json));
//   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
// });
// });
