function getFahrenheit(result) {
  return result.map(hourlyObj => hourlyObj["temperature"])  
}

function getHour(result){
  return result.map( hourlyObj => {
    let date = new Date(hourlyObj["time"] * 1000)
    return date.getHours()
  })
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Bayou City Weather Data",
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
  fetch(endpoint)
    .then(res => res.json())
    // .then(data => getHour(data["hourly"]["data"]))
    // .then(console.log)
    .then(data => {
      let hourlyData = data["hourly"]["data"]  
      const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))  
    })
}
