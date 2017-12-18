'use strict'

Product.allProducts = [];

var imageArray = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];


function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  Product.allProducts.push(this);
};

for (var i = 0; i < 20; i++) {
  var nameExt = imageArray[i].split('/');
  var name = nameExt[1].split('.')[0];
  new Product(name, imageArray[i]);
};

function addVote() {
  console.log(this.clicked)
  // var image1 = getElementById('imageOne');
  // var image2 = getElementById('imageTwo');
  // var image3 = getElementById('imageThree');
}

function random(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function renderImages() {
  imageOne.src = Product.allProducts[random(0,20)].filepath;
  imageTwo.src = Product.allProducts[random(0,20)].filepath;
  imageThree.src = Product.allProducts[random(0,20)].filepath;

  if ((imageOne.src === imageTwo.src) || (imageOne.src === imageThree.src)) {
    //reroll
    imageOne.src = Product.allProducts[random(0,20)].filepath
  }
  if ((imageTwo.src === imageOne.src) || (imageTwo.src === imageThree.src)) {
    //reroll
    imageTwo.src = Product.allProducts[random(0,20)].filepath
  }
  if ((imageThree.src === imageTwo.src) || (imageThree.src === imageOne.src)) {
    //reroll
    imageThree.src = Product.allProducts[random(0,20)].filepath
  }
};

// imageOne.addEventListener('click', addVote);
// imageTwo.addEventListener('click', addVote);
// imageThree.addEventListener('click', addVote);

renderImages();
