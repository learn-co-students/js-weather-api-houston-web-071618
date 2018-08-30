let leakedData;


function getFahrenheit(result){
  return result.map (y => y.temperature);
}

function getHour(result) {
  return result.map(x => {
    let h = new Date(x.time * 1000);
    return h.getHours();
  })

};


function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "HOU Weather Data",
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
  const URL = endpoint;
  let hourlyData;
  fetch(URL)
    .then(res => res.json())
    .then (res => { 
      hourlyData = res.hourly.data;
      leakedData = hourlyData;

  const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))


    });

  // // After your fetch works - use your json data with the line below :)
  
}
