// function getFahrenheit(result){
//   // Your code goes here
//   var newArr = []
//   result.hourly.data.forEach(function(element){
//     newArr.push(element.temperature)

//   })
    
//       return newArr

// }

function getFahrenheit(result) {
 // Your code goes here
 return result.hourly.data.map(element => {
   return element.temperature;
 });
}

// function getHour(result){
//   // Your code goes here

//   var newArr = []
//   result.hourly.data.forEach(function(element){


//   let myDate = new Date(element.time * 1000)


//   newArr.push(myDate.getHours())



// })
//   return newArr

// }

function getHour(result) {
 // Your code goes here
 //debugger
 return result.hourly.data.map(function(element) {

   let myDate = new Date(element.time * 1000);
   return myDate.getHours();

 });

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
  .then(function(hourlyData){
    //console.log(hourlyData)
    const tempChart = new Chart(canvas, generateDataSet(getHour(hourlyData), getFahrenheit(hourlyData)))
  })


  // After your fetch works - use your json data with the line below :)
}
