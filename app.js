'use strict'

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

Product.allProducts = [];

var imageArray = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];


function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesClicked = 0;
  this.prevDisplayed = false;
  // this.click = function() {
  //   console.log('click')
  //   this.timesClicked++;
  //   this.prevDisplayed = true;
  //   renderImages();
  // };
  Product.allProducts.push(this);
};

for (var i = 0; i < 20; i++) {
  var nameExt = imageArray[i].split('/');
  var name = nameExt[1].split('.')[0];
  new Product(name, imageArray[i]);
};

function addVote1() {
  // var imageDisplayed = imageOne.src;
  console.log(imageOne.src);
  renderImages();
  // ++Product.allProducts[imageDisplayed.filepath].clicked;
  // return .clicked++;

};
function addVote2() {
  console.log(imageTwo.src);
  renderImages();
  // Product.clicked += 1;

};
function addVote3() {
  console.log(imageThree.src);
  renderImages();
  // Product.clicked += 1;

};
function random(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function renderImages() {
  imageOne.src = Product.allProducts[random(0,20)].filepath;
  imageTwo.src = Product.allProducts[random(0,20)].filepath;
  imageThree.src = Product.allProducts[random(0,20)].filepath;

  if ((imageOne.src === imageTwo.src) || (imageOne.src === imageThree.src)) {
    //reroll
    imageOne.src = Product.allProducts[random(0,20)].filepath;
  };
  if ((imageTwo.src === imageOne.src) || (imageTwo.src === imageThree.src)) {
    //reroll
    imageTwo.src = Product.allProducts[random(0,20)].filepath;
  };
  if ((imageThree.src === imageTwo.src) || (imageThree.src === imageOne.src)) {
    //reroll
    imageThree.src = Product.allProducts[random(0,20)].filepath;
  };
};

imageOne.addEventListener('click', addVote1);
imageTwo.addEventListener('click', addVote2);
imageThree.addEventListener('click', addVote3);

renderImages();
