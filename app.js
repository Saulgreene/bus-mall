'use strict';

function imageConstructor(imageID, filePath){
  this.imageID = imageID;
  this.filePath = filePath;
  this.timesClicked = 0;
  this.timesShown = 0;
};

imageConstructor.prototype.addPicture = function(){
  var image = document.createElement('img');
  image.setAttribute('id', this.imageID);
  image.setAttribute('src', this.filePath);
  // image.setAttribute('onclick', console.log('hello'));
  var imageContainer = document.getElementById('content');
  imageContainer.appendChild(image);
  this.timesShown += 1;
};
function getRandom(){
  return Math.floor(Math.random());
}


function logClick(clickedImage) {
  this.timesClicked += 1;
  var container = document.getElementById('content');
  container.innerHTML = '';
}

var imageConstructorArray = [
  bag,
  banana,
  bathroom,
  boots,
  breakfast,
  bubblegum,
  chair,
  cthulhu,
  dogDuck,
  dragon,
  pen,
  petSweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  thumbs,
  unicorn,
  usb,
  waterCan,
  wineGlass,
] ;

var bag = new imageConstructor('cthulhu', 'img/cthulhu.jpg');
var banana = new imageConstructor('banana', 'img/banana.jpg');
var bathroom = new imageConstructor('bathroom', 'img/bathroom.jpg');
var boots = new imageConstructor('boots', 'img/boots.jpg');
var breakfast = new imageConstructor('breakfast', 'img/breakfast.jpg');
var bubblegum = new imageConstructor('bubblegum', 'img/bubblegum.jpg');
var chair = new imageConstructor('chair', 'img/chair.jpg');
var cthulhu = new imageConstructor('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new imageConstructor('dog-duck', 'img/dog-duck.jpg');
var dragon = new imageConstructor('dragon', 'img/dragon.jpg');
var pen = new imageConstructor('pen', 'img/pen.jpg');
var petSweep = new imageConstructor('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new imageConstructor('scissors', 'img/scissors.jpg');
var shark = new imageConstructor('shark', 'img/shark.jpg');
var sweep = new imageConstructor('sweep', 'img/sweep.jpg');
var tauntaun = new imageConstructor('tauntaun', 'img/tauntaun.jpg');
var thumbs = new imageConstructor('thumbs', 'img/thumbs.db');
var unicorn = new imageConstructor('unicorn', 'img/unicorn.jpg');
var usb = new imageConstructor('usb', 'img/usb.gif');
var waterCan = new imageConstructor('water-can', 'img/water-can.jpg');
var wineGlass = new imageConstructor('wine-glass', 'img/wine-glass.jpg');


wineGlass.addPicture();
getRandom();
console.log(getRandom());
