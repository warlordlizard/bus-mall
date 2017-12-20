'use strict'

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

Product.allProducts = [];
var totalCounter = 0;

var imageArray = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];


function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
  this.prevShown = false;
  this.timesShown = 0;
  this.click = function() {
    console.log('click')
    this.timesClicked++;
    this.prevDisplayed = true;
    renderImages();
  };
  Product.allProducts.push(this);
};
function makeProducts() {
  for (var i = 0; i < 20; i++) {
    var nameExt = imageArray[i].split('/');
    var name = nameExt[1].split('.')[0];
    new Product(name, imageArray[i]);
  };
}

function counter() {
  totalCounter += 1;
}

function randomProduct() {
  return Math.floor(Math.random() * Product.allProducts.length);
};

var imageOneIndex = 0;
var imageTwoIndex = 0;
var imageThreeIndex = 0;

function renderImages() {
  imageOneIndex = randomProduct();
  imageOne.src = Product.allProducts[imageOneIndex].filepath;
  Product.allProducts[imageOneIndex].timesShown +=1;

  imageTwoIndex = randomProduct();
  imageTwo.src = Product.allProducts[imageTwoIndex].filepath;
  Product.allProducts[imageTwoIndex].timesShown +=1;

  imageThreeIndex = randomProduct();
  imageThree.src = Product.allProducts[imageThreeIndex].filepath;
  Product.allProducts[imageThreeIndex].timesShown +=1;

  while ((imageOne.src === imageTwo.src) || (imageOne.src === imageThree.src)) {
    //reroll
    imageOne.src = Product.allProducts[randomProduct()].filepath;
  };
  while ((imageTwo.src === imageOne.src) || (imageTwo.src === imageThree.src)) {
    //reroll
    imageTwo.src = Product.allProducts[randomProduct()].filepath;
  };
  while ((imageThree.src === imageTwo.src) || (imageThree.src === imageOne.src)) {
    //reroll
    imageThree.src = Product.allProducts[randomProduct()].filepath;
  };

};

imageOne.addEventListener('click', addVote1);
imageTwo.addEventListener('click', addVote2);
imageThree.addEventListener('click', addVote3);

function addVote1(event) {
    Product.allProducts[imageOneIndex].totalClicks += 1;
    counter();
    renderImages();
    if (totalCounter === 25) {
      //do something
    }
};
function addVote2(event) {
  Product.allProducts[imageTwoIndex].totalClicks += 1;
  counter();
  renderImages();
  if (totalCounter === 25) {
    //do something
  }
};
function addVote3(event) {
  Product.allProducts[imageThreeIndex].totalClicks += 1;
  counter();
  renderImages();
  if (totalCounter === 25) {
    //do something
  }
};
makeProducts();
renderImages();

var labels = [];
var productData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < Product.allProducts.length; i++) {
  labels.push(Product.allProducts[i].name);
}

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      label: 'Votes for products',
      data: productData,
      backgroundColor: ['#444', '#888', 'orange', 'blue', 'yellow', 'green', 'purple', 'black', 'pink', 'crimson', '#fe4eda', 'red', 'white', '#b0bf1a','#84de02','#551b8c','#3b444b','#ff9966','#ffe135','#9f8170']
    }]
  },
  options: {
    layout: {
            padding: {
                left: 0,
                right: 0,
                top: 100,
                bottom: 0
            }
        }
      }
})
