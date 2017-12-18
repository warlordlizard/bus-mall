'use strict'

Product.allProducts = [];

var imageArray = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg']

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  Product.allProducts.push(this);
}

for (i = 0; i < 20; i++) {
  new Product()
}


var name = filepath.split('/');
