/*Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should 
initially return the number supplied * 1 and from then on whatever the current value is times the 
number supplied. getCurrentValue should return the last answer returned from multiply.*/
/* our interpretation of the directions (take 5ish)
var Multiplier = {
	i: 1,
	lastValue: 0,

	multiply: function(num) {
		lastValue = num * this.i;
		this.i += 1
	},

	getCurrentValue: function() {
		return lastValue;
	}
}

console.log(Multiplier.multiply(2));

console.log(Multiplier.getCurrentValue());

console.log(Multiplier.multiply(2));

console.log(Multiplier.getCurrentValue());

console.log(Multiplier.multiply(2));

console.log(Multiplier.getCurrentValue());
*/
/*Implement an object model that allows you to store strings that represent a Photo. Your model should 
include an Album object that can contain many Photo objects in its photos attribute. Each Album should 
allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
Each Photo should store the photo's file name and the location the photo was taken in as strings. Create 
instances of each object defined to prove that your object model works.*/

//creating a photo object that takes name and location. will be used to populate album object.
function Photo(name, location) {
	this.name = name;
	this.location = location;
};

//creating album object to store photos in blank array. contains functions to add photos to the array, lists the array
//and select a photo based on index
var Album = {
	photos: [],

	add_photo: function(photo) {
		this.photos.push(photo);
	},

	list_photos: function() {
		return this.photos;
	},

	select_photo: function(index) {
		return this.photos[index];
	},
};

//populating the array with photos and testing functions
var photo_one = new Photo("First Photo", "Seattle");
var photo_two = new Photo("Second Photo", "Portland");
var photo_three = new Photo("Third Photo", "Vancouver BC");
var photo_four = new Photo("Fourth Photo", "Los Angeles");
Album.add_photo(photo_one);
Album.add_photo(photo_two);
Album.add_photo(photo_three);
Album.add_photo(photo_four);
console.log(Album.list_photos());
console.log(Album.photos);
console.log(Album.select_photo(3));


/*Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
Each of these objects should have attributes and methods pertinent to what they describe. Also create a 
School object that should be able to store instances of students and teachers. Make sure to write code 
afterwards that creates instances of these objects to make sure that what you've written works well and 
you're able to store the necessary data in each object.*/

/*
function Person(firstName, lastName, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
}

function Teacher() {
	this.teacher = true;
	Person.apply(this, arguments) // Call parent constructor with Person prototype context
}

function Student() {
	this.student = true;
	Person.apply(this, arguments) // Call parent constructor with Person prototype context
}

Teacher.prototype = new User(); //Admin now has all of the traits of a Person as well as its own teacher boolean flag

*/







