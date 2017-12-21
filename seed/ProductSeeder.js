var Product = require('../models/product.js');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost/27017/nodestore')

var products = [
new Product({
	imgPath: '../public/images/PinkFloyd.jpg',
	title: 'The Piper at the Gates of Dawn',
	price: 12
	}),
new Product({
	imgPath: '../public/images/Saucerful.jpg',
	title: 'Saucerful of secrets',
	price: 12
	}),
new Product({
	imgPath: '../public/images/More.jpg',
	title: 'More',
	price: 12
	}),
new Product({
	imgPath: '../public/images/Ummagumma.jpg',
	title: 'Ummagumma',
	price: 12
	}),
new Product({
	imgPath: '../public/images/Atom.jpeg',
	title: 'Atom Heart Mother',
	price: 12
	}),
new Product({
	imgPath: '../public/images/Meddle.jpeg',
	title: 'Meddle',
	price: 12
	}),
new Product({
	imgPath: '../public/images/obscured.jpg',
	title: 'Obscured by Clouds',
	price: 12
	}),
new Product({
	imgPath: '../public/images/Dark.jpeg',
	title: 'The Dark Side of the Moon',
	price: 12
	}),
new Product({
	imgPath: '../public/images/wish.jpg',
	title: 'Wish you were here',
	price: 12
	}),
new Product({
	imgPath: '../public/images/animals.jpg',
	title: 'Animals',
	price: 12
	}),
new Product({
	imgPath: '../public/images/wall.jpg',
	title: 'the Wall',
	price: 12
	}),
new Product({
	imgPath: '../public/images/final.jpg',
	title: 'The Final Cut',
	price: 12
	}),
new Product({
	imgPath: '../public/images/momentary.jpg',
	title: 'Momentary Lapse of reason',
	price: 12
	}),
new Product({
	imgPath: '../public/images/division.jpg',
	title: 'The division bell',
	price: 12
	})


]


var done = 0;
for(var i=0; i<products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			exit()
		}
	});
}





function exit(){
	mongoose.disconnect();	
}