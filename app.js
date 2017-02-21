'use strict';

// links to the content section of the html and adds an event listener which invokes the handle clikc function when someone clicks within the content tag
var content = document.getElementById('content');
// var left = document.getElementById('left');
// var center = document.getElementById('center');
// var right = document.getElementById('right');
content.addEventListener('click', handleClick);

//constructor to save the images and keep track of clicks and show ups
function imageConstructor(imageID, filePath){
  this.imageID = imageID;
  this.filePath = filePath;
  this.timesClicked = 0;
  this.timesShown = 0;
};
var totalClicks = 0;
var clickLimit = 25;

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
  totalClicks += 1;
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
var sweep = new imageConstructor('sweep', 'img/sweep.png');
var tauntaun = new imageConstructor('tauntaun', 'img/tauntaun.jpg');
var thumbs = new imageConstructor('thumbs', 'img/thumbs.jpg');
var unicorn = new imageConstructor('unicorn', 'img/unicorn.jpg');
var usb = new imageConstructor('usb', 'img/usb.gif');
var waterCan = new imageConstructor('water-can', 'img/water-can.jpg');
var wineGlass = new imageConstructor('wine-glass', 'img/wine-glass.jpg');

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
];
var threePic = [];
var oldPics = [];
// populates three images pulled at an index from the array. the index is a random number
function populateThree(){

  oldPics = threePic;
  threePic = [];
  for (var i = 0; i < 3; i++) {
    console.log('populateThree', i);
    var integerIndex = getRandomInt();
    if(threePic.length === 0){
      threePic.push(integerIndex);
      imageConstructorArray[integerIndex].addPicture(integerIndex);
    }else{
      console.log('found index in threePic', i);
      if(threePic.includes(integerIndex)){
        i--;
      }else{
        console.log('index not found in threePic, pushing it in', i);
        threePic.push(integerIndex);
        imageConstructorArray[integerIndex].addPicture(integerIndex);
      }
    }
  }
  console.log(threePic);
};
//make three elements to populate??
// function displayPics(){
//   var leftIndex = getRandomInt();
//   var centerIndex = getRandomInt();
//   var rightIndex = getRandomInt();
//   while (centerIndex === leftIndex){
//     centerIndex = getRandomInt();
//   }
//   while(rightIndex === leftIndex || rightIndex === centerIndex) {
//     rightIndex = getRandomInt();
//   }
//   console.log('leftIndex' + leftIndex);
//   console.log('centerIndex' + centerIndex);
//   console.log('rightIndex' + rightIndex);
//   var currentlyShowing = [leftIndex, centerIndex, rightIndex];
// }
// displayPics();

//-------------------------------

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
