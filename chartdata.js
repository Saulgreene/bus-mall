'use strict';

var colors = [
  'rgba(255, 0, 0, 0.5)', 'rgba(255, 50, 0, 0.5)', 'rgba(255, 100, 0, 0.5)', 'rgba(255, 150, 0, 0.5)', 'rgba(255, 200, 0, 0.5)',
  'rgba(0, 255, 0, 0.5)', 'rgba(0, 255, 50, 0.5)', 'rgba(0, 255, 100, 0.5)', 'rgba(0, 255, 150, 0.5)', 'rgba(0, 255, 200, 0.5)',
  'rgba(0, 0, 255, 0.5)', 'rgba(50, 0, 255, 0.5)', 'rgba(100, 0, 255, 0.5)', 'rgba(150, 0, 255, 0.5)', 'rgba(200, 0, 255, 0.5)',
  'rgba(255, 100, 100, 0.5)', 'rgba(100, 255, 100, 0.5)', 'rgba(100, 100, 255, 0.5)', 'rgba(125, 125, 125, 0.5)', 'rgba(40, 100, 140, 0.5)'
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
var clickArray = JSON.parse(localStorage.clickArray);
var perc = JSON.parse(localStorage.percentArray);
console.log(perc);

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
      data: perc,
      backgroundColor: colors,
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
