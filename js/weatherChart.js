function getFahrenheit(result){
  // Your code goes here

  const data = result
  // for (point of data){
  //   console.log(point["apparentTemperature"])
  // }
  let temps = [];
  data.forEach(point => temps.push(point["temperature"]));
  return (temps)

}

function getHour(result){
  // Your code goes here
  const data = result
  console.log(result);
  let times = [];
  data.forEach(point => {
    let time = point["time"];
    let myDate = new Date(time * 1000);
    times.push(myDate.getHours());
  });


  return (times)
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "H-Town Weather Data",
          data: data,
          backgroundColor: "rgba(128,128,128)",
          borderColor: 'rgb(176, 48, 193)'
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
  .then(res => res.json())
  .then(hourlyData => {
    const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData.hourly.data), getFahrenheit(hourlyData.hourly.data)))
  });


  // After your fetch works - use your json data with the line below :)

}
