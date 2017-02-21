'use strict';

// links to the content section of the html and adds an event listener which invokes the handle clikc function when someone clicks within the content tag
var content = document.getElementById('content');
content.addEventListener('click', handleClick);

//constructor to save the images and keep track of clicks and show ups
function imageConstructor(imageID, filePath){
  this.imageID = imageID;
  this.filePath = filePath;
  this.timesClicked = 0;
  this.timesShown = 0;
};

//prototype added onto the constructor to render a picture to the DOM
  //step 1 it creates an id for the image to reffer to later
  //step 2 it creates a source to add the photo within the img tag on the html
  //step 3 it appends the .........
imageConstructor.prototype.addPicture = function(index){
  var image = document.createElement('img');
  image.dataset.integerIndex = index;
  image.setAttribute('id', this.imageID);
  image.setAttribute('src', this.filePath);
  var imageContainer = document.getElementById('content');
  imageContainer.appendChild(image);
  this.timesShown += 1;
};
//gets a random integer between 0-20
function getRandomInt() {
  return Math.floor(Math.random() * (20 - 0)) + 0;
}


//records the click of the image to the constructor and saves for later
//it also clears the parent (content box) at the end of the function
function logClick(imageConstructor) {
  imageConstructor.timesClicked += 1;
  var container = document.getElementById('content');
  container.innerHTML = '';
}


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

var aFuckingArray = [];

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
// populates three images pulled at an index from the array. the index is a random number
function populateThree(){
  for (var i = 0; i < 3; i++) {
    var integerIndex = getRandomInt();
    //this makes the number we generated storeable since calling the functon just makes a new number
    imageConstructorArray[integerIndex].addPicture(integerIndex);
  }
};
//calling the function
populateThree();

//handle click event logs the click and once it logs and wipes it populates three more
function handleClick(event){
  console.log('handleClick', event);
  console.log(event.target.dataset.integerIndex);
  console.log(imageConstructorArray[event.target.dataset.integerIndex]);
  logClick(imageConstructorArray[event.target.dataset.integerIndex]);
  populateThree();
};
