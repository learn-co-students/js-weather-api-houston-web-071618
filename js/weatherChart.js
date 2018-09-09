function getFahrenheit(result) {
  return result.hourly.data.map(function(item) {
    return item.temperature;
  });
}

// function map(array, callback) {
//   const newArray = [];
//   for (const item of array) {
//     newArray.push(callback(item));
//   }
//   return newArray;
// }

// let dataArray = result.hourly.data;
// map(dataArray, function(item) {
//   return item.temperature;
// });

function getHour(result) {
  return result.hourly.data.map(function(item) {
    return new Date(item.time * 1000).getHours();
  });
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Weather Data',
          data: data,
          backgroundColor: 'rgba(100,150,220,0.2)',
          borderColor: 'rgb(255, 99, 132)'
        }
      ]
    },
    options: {
      // additional configurations here
    }
  };
}

function makeRequest(endpoint, canvas) {
  //Get the weather data using a [fetch request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

  return fetch(endpoint)
    .then((res) => res.json())
    .then((hourlyData) => {
      // console.log(hourlyData);

      let hours = getHour(hourlyData);
      let temp = getFahrenheit(hourlyData);
      let dataset = generateDataSet(hours, temp);

      const tempChart = new Chart(canvas, dataset);
    });

  //   // After your fetch works - use your json data with the line below :)
  //    const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
}
