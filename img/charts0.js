'use strict';

var ctx = document.getElementById('chart').getContext('2d');
var data = [12, 4, 9, 3, 100, 55, 31];
var labelColors = [
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
  'thumbs',
  'unicorn',
  'usb',
  'waterCan',
  'wineGlass',
];

var chartData = {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes / Picture',
      data: data,
      backgroundColor: labelColors,
    }],
  },
  options:{
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero: true
        }
      }]
    }
  }
};

var myChart = new Chart(ctx, chartData);
