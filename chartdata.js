'use strict';

var colorsArray = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'red',
  'orange',
];
var imageLabelArray = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dogDuck',
  'dragon',
  'pen',
  'petSweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'waterCan',
  'wineGlass',
];

var imageConstructorArray = JSON.parse(localStorage.imageConstructorArray);
// var percentArray = JSON.parse(localStorage.percentArray);

var productClicks = [];
function allProductClicks(products){
  for (var i = 0; i < products.length; i++) {
    productClicks.push(products[i].timesClicked);
  }
  console.log('all product clicks' + productClicks);
  return productClicks;
}
// var clickData = allProductClicks(imageConstructorArray);

// function allProductNames(products){
//   var productNames = [];
//   for (var i = 0; i < products.length; i++) {
//     productNames.push(products[i].imageID);
//   }
//   console.log('all product names' + productNames);
//   return productNames;
// }
// var shownData = allProductNames(imageConstructorArray);


var ctx = document.getElementById('chart').getContext('2d');
var chartData = {
  type: 'bar',
  data: {
    labels: imageLabelArray,
    datasets: [{
      label: '# of Votes / Picture',
      data: productClicks,
      backgroundColor: 'grey',
    }],
  },
  options:{
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero: true,
          labels: '# Of Clicks'
        }
      }]
    }
  }
};

var myChart = new Chart(ctx, chartData);


// var ctx = document.getElementById('chartTwo').getContext('2d');
// var options = imageLabelArray;
// var myRadarChart = new Chart(ctx, {
//   type: 'radar',
//   data: productClicks,
//   options: options
// });
