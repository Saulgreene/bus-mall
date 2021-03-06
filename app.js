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
imageConstructor.prototype.percentage = function(){
  var percentageNum = ((this.timesClicked / this.timesShown) * 100);
  if(isNaN(percentageNum)){
    percentageNum = 0;
  }
  return percentageNum;
};
//gets a random integer between 0-20
function getRandomInt() {
  return Math.floor(Math.random() * (imageConstructorArray.length - 0)) + 0;
}

//records the click of the image to the constructor and saves for later
//it also clears the parent (content box) at the end of the function
function logClick(imageConstructor) {
  imageConstructor.timesClicked += 1;
  totalClicks += 1;
  var container = document.getElementById('content');
  container.innerHTML = '';
}

var bag = new imageConstructor('bag', 'img/bag.jpg');
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
  unicorn,
  usb,
  waterCan,
  wineGlass,
];

var cumulativeArray = [];
var percentArray = [];
var newData = [];
var oldData = [];
var threePic = [];
var oldPics = [];
var numOfPics = 3;

if (localStorage.imageConstructorArray) {
  cumulativeArray = JSON.parse(localStorage.imageConstructorArray);
  console.log('crap was in local storage!');
  for (var i = 0; i < cumulativeArray.length; i++) {
    imageConstructorArray[i].timesClicked += cumulativeArray[i].timesClicked;
    imageConstructorArray[i].timesShown += cumulativeArray[i].timesShown;
  }
  saveProductsToLocalStorage(imageConstructorArray);
}
// populates three images pulled at an index from the array. the index is a random number
function populateThree(){
  oldPics = threePic;
  threePic = [];
  while (threePic.length < numOfPics) {
    var integerIndex = getRandomInt();
    if (threePic.indexOf(integerIndex) === -1 && oldPics.indexOf(integerIndex) === -1) {
      threePic.push(integerIndex);
    }
  }
  // console.log('threePic: ', threePic);
  // console.log('oldPics: ', oldPics);
};
function showThree(){
  for(var j = 0; j < threePic.length; j++){
    imageConstructorArray[threePic[j]].addPicture(threePic[j]);
  }
}
//calling the function
populateThree();
showThree();
function handleClick(event){
  if(totalClicks < clickLimit){
    // console.log('handleClick', event);
    // console.log(event.target.dataset.integerIndex);
    // console.log(imageConstructorArray[event.target.dataset.integerIndex]);
    logClick(imageConstructorArray[event.target.dataset.integerIndex]);
    console.log('Click Count: ' + totalClicks);
    populateThree();
    showThree();
  }else{
    for( var k = 0; k < imageConstructorArray.length; k++){
      var percentShown = imageConstructorArray[k].percentage();
      console.log(imageConstructorArray[k].imageID, percentShown);
      percentArray.push(percentShown);
    };
    // saveProductsToLocalStorage(imageConstructorArray);
    // console.log(imageConstructorArray);
    // savePercentageToLocalStorage(percentArray);
    // console.log(savePercentageToLocalStorage);
    // for (var i = 0; i < percentArray.length; i++) {
    //   var total = percentArray[i] + newData[i];
    //   newData.push(total);
    // }
    var clickArray = [];
    for(var i = 0; i < imageConstructorArray.length; i++) {
      clickArray.push(imageConstructorArray[i].timesClicked);
    }
    console.log(clickArray);
    saveClickToLocalStorage(clickArray);
    saveProductsToLocalStorage(imageConstructorArray);
    savePercentageToLocalStorage(percentArray);
    console.log(localStorage.clickArray);
    location.href = 'charts.html';
  }
};

function saveProductsToLocalStorage(imageConstructorArray){
  localStorage.imageConstructorArray = JSON.stringify(imageConstructorArray);
  console.log('Saved To Local Storage');
};
function saveClickToLocalStorage(clickArray){
  localStorage.clickArray = JSON.stringify(clickArray);
  console.log('Saved To Local Storage');
};
function savePercentageToLocalStorage(percentArray){
  localStorage.percentArray = JSON.stringify(percentArray);
  console.log('Saved To Local Storage');
};
