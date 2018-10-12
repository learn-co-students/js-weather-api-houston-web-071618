function getFahrenheit(result) {
  // return result.map(function(hour){
  //   return hour.temperature
  // })

  //another way using Object.keys
  // return Object.keys(result).map(key => {
  //   console.log(result[key]);
  //   return result[key].temperature;
  // });

  return result.map(hour => hour.temperature);
}

function getHour(result) {
  //another way using Object.keys

  // return Object.keys(result).map(key => {
  //   return new Date(result[key].time * 1000).getHours();

  return result.map(function(hour) {
    let newHour = new Date(hour.time * 1000);
    return newHour.getHours();
  });
}

function generateDataSet(labels, data) {
  return {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Houston Weather Data",
          data: data,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: "rgb(255, 99, 132)"
        }
      ]
    },
    options: {
      // additional configurations here
    }
  };
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  return fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      let hourlyData = json.hourly.data;
      // After your fetch works - use your json data and uncomment these two lines below :)
      const tempChart = new Chart(
        canvas,
        generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData))
      );
    });
}
