let stupidForm = document.getElementById('coordinates-form');
let submitButton = document
  .getElementById('submitButton')
  .addEventListener('click', graphData);
let latitudeSelector = document.getElementById('latitude');
let longitudeSelector = document.getElementById('longitude');
stupidForm.addEventListener('submit', function(e) {
  e.preventDefault();
});
function graphData() {
  let latitude = latitudeSelector.value;
  let longitude = longitudeSelector.value;
  // let address =
  const ctx = document.getElementById('WeatherChart').getContext('2d');
  // const Google_API_KEY = 'AIzaSyC3fQ7Z_mSmslLBYuQTYbz_gsFhcHDI6eY'
  // const Google_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + Google_API_KEY;

  const API_KEY = '54750043e7dedd710de09d777236c338';
  const CORS_WRAPPER = 'https://cors-anywhere.herokuapp.com/';
  const URL =
    CORS_WRAPPER +
    'https://api.darksky.net/forecast/' +
    API_KEY +
    '/' +
    latitude +
    ',' +
    longitude +
    '?exclude=currently,minutely,daily';

  // const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently,minutely,daily";

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx);

  //add a form to make map location dynamic
}

// submitButton.addEventListener('click', graphData());
document.addEventListener('DOMContentLoaded', graphData);
//
// ((result.hourly.data[0].time)*1000);
//
// result.hourly.data.map do |obj|
//   obj.time*1000
// end

// const hours = result.hourly.data.map (x => x * 1000);
