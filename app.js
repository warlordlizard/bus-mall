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
  this.nowShown = false;
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
  save();
}

function randomProduct() {
  return Math.floor(Math.random() * Product.allProducts.length);
};

var imageOneIndex = 0;
var imageTwoIndex = 0;
var imageThreeIndex = 0;

function renderImages() {
  // if (Product.allProducts.nowShown) {
  //   Product.allProducts.nowShown = false;
  // }

  imageOneIndex = randomProduct();
  // if (!Product.allProducts[imageOneIndex].nowShown){
    imageOne.src = Product.allProducts[imageOneIndex].filepath;
    Product.allProducts[imageOneIndex].timesShown +=1;
    // Product.allProducts[imageOneIndex].nowShown = true;
  // }
  imageTwoIndex = randomProduct();
  // if (!Product.allProducts[imageTwoIndex].nowShown){
    Product.allProducts[imageTwoIndex].timesShown +=1;
    imageTwo.src = Product.allProducts[imageTwoIndex].filepath;
    // Product.allProducts[imageTwoIndex].nowShown = true;
  // }

  imageThreeIndex = randomProduct();
  // if (!Product.allProducts[imageThreeIndex].nowShown){
    imageThree.src = Product.allProducts[imageThreeIndex].filepath;
    Product.allProducts[imageThreeIndex].timesShown +=1;
    // Product.allProducts[imageThreeIndex].nowShown = true;
  // }

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

var resultButton = document.getElementById('showResults');

function addVote1(event) {
    Product.allProducts[imageOneIndex].totalClicks += 1;
    counter();
    renderImages();
    if (totalCounter === 25) {
      //do something
      resultButton.removeAttribute('hidden');
    }
};
function addVote2(event) {
  Product.allProducts[imageTwoIndex].totalClicks += 1;
  counter();
  renderImages();
  if (totalCounter === 25) {
    //do something
    resultButton.removeAttribute('hidden');
  }
};
function addVote3(event) {
  Product.allProducts[imageThreeIndex].totalClicks += 1;
  counter();
  renderImages();
  // productData.push(Product.allProducts[imageThreeIndex].totalClicks);
  if (totalCounter === 25) {
    //do something
    resultButton.removeAttribute('hidden');
  }
};
makeProducts();
renderImages();

var labels = [];
var productData = []
// [Product.allProducts[0].totalClicks,Product.allProducts[1].totalClicks,Product.allProducts[2].totalClicks,Product.allProducts[3].totalClicks,Product.allProducts[4].totalClicks,Product.allProducts[5].totalClicks,Product.allProducts[6].totalClicks,Product.allProducts[7].totalClicks,Product.allProducts[8].totalClicks,Product.allProducts[9].totalClicks,Product.allProducts[10].totalClicks,Product.allProducts[11].totalClicks,Product.allProducts[12].totalClicks,Product.allProducts[13].totalClicks,Product.allProducts[14].totalClicks,Product.allProducts[15].totalClicks,Product.allProducts[16].totalClicks,Product.allProducts[17].totalClicks,Product.allProducts[18].totalClicks,Product.allProducts[19].totalClicks];

//Product.allProducts
for (var i = 0; i < Product.allProducts.length; i++) {
  labels.push(Product.allProducts[i].name);
}
//



var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

resultButton.addEventListener('click', handleResultButtonClick);

function handleResultButtonClick(event) {
  // numResultButtonClicks += 1;
  var results = document.getElementById('results');
  results.removeAttribute('hidden');

  var images = document.getElementById('images');
  images.setAttribute('hidden','');

  for (var i = 0; i < Product.allProducts.length; i++) {
    productData.push(Product.allProducts[i].totalClicks);
    console.log(Product.allProducts[i].totalClicks);
  }
  localStorage.productData = productData;

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
                  top: 20,
                  bottom: 0
              }
          }
        }
  })
}

function save() {
  localStorage.counter = totalCounter;
}

function load() {
  if (localStorage.counter) {
    totalCounter = parseInt(localStorage.counter);
    if (totalCounter > 25) {
      //do something
      resultButton.removeAttribute('hidden');
      var images = document.getElementById('images');
      images.setAttribute('hidden','');
    }
  }
  productData = localStorage.productData.split(',');
}

load();
