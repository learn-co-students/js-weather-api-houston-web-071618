const hourly = document.getElementById("hourly");
console.log("hourly information");

function getFahrenheit(result){
  console.log(result);
  let vari = result.map(data => (data.temperature));
  console.log(vari)
  return vari
}

function getHour(result){
  console.log(result);
  let returnVariable = result.map(panda => new Date(panda.time * 1000).getHours())
  console.log(returnVariable)
  return returnVariable
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "NYC Weather Data",
          data: data,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: 'rgb(255, 99, 132)'
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  fetch(endpoint)
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      let hourlyData = myJson.hourly.data

      const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
    });
  // After your fetch works - use your json data with the line below :)
  // const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
}
