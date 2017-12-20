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
  // this.click = function() {
  //   console.log('click')
  //   this.timesClicked++;
  //   this.prevDisplayed = true;
  //   renderImages();
  // };
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

function addVote() {
  var imgPath = document.getElementById('imageOne').src
  // var imageDisplayed = imageOne.src;
  console.log('vote1');
  renderImages();
  // ++Product.allProducts[imageDisplayed.filepath].clicked;
  // return .clicked++;
  if (imgPath.split('bus-mall')[1] === Product.allProducts.filepath) {
    totalClicks += 1;
    counter();
  }

};
// function addVote2() {
//   console.log(imageTwo.src);
//   renderImages();
//   // Product.clicked += 1;
//
// };
// function addVote3() {
//   console.log(imageThree.src);
//   renderImages();
//   // Product.clicked += 1;

// };
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

imageOne.addEventListener('click', addVote);
imageTwo.addEventListener('click', addVote);
imageThree.addEventListener('click', addVote);
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
