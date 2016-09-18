/*Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should 
initially return the number supplied * 1 and from then on whatever the current value is times the 
number supplied. getCurrentValue should return the last answer returned from multiply.*/

//our interpretation of the directions (take 5ish)
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

/*-----------------------------------------------------------------------------------------------------------*/
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

/*-----------------------------------------------------------------------------------------------------------*/
/*Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
Each of these objects should have attributes and methods pertinent to what they describe. Also create a 
School object that should be able to store instances of students and teachers. Make sure to write code 
afterwards that creates instances of these objects to make sure that what you've written works well and 
you're able to store the necessary data in each object.*/

//defines Person object
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

//defines Teacher object with extension of Person
function Teacher(firstName, lastName, subject) {
	Person.apply(this, arguments); 
	this.subject = subject;
	teacher_intro = function() {
		return "Hi, my name is " + this.firstName + " and I teach " + this.subject + ".";
	};
}

//defines Student object with extension of Person
function Student(firstName, lastName, year) {
	Person.apply(this, arguments);
	this.year = year;
	student = function() {
		return "Hi, my name is " + this.firstName + " and I am in grade " + this.year + ".";
	};
}

//creates teachers and logs them to console
var teacher1 = new Teacher("Justin", "Martin", "Math");
console.log(teacher1);

var teacher2 = new Teacher("Kyle", "Fugere", "Geography");
console.log(teacher2);

var teacher3 = new Teacher("Tyler", "Johns", "Phyiscal Education");
console.log(teacher3);

//creates students and logs them to console
var student1 = new Student("Cody", "Kendrick", 10);
console.log(student1);

var student2 = new Student("Dustin", "Meade", 12);
console.log(student2);

var student3 = new Student("Alvin", "Marks", 11);
console.log(student3);

//defines School object consisting of two arrays and functions to populate/select those arrays
var School = {
	teachers: [],
	students: [],

	add_teacher: function(teacher) {
		this.teachers.push(teacher);
	},

	add_student: function(student) {
		this.students.push(student);
	},

	select_teacher: function(index) {
		return this.teachers[index];
	},

	select_student: function(index) {
		return this.students[index];
	},
};

//adds teachers to teachers array and logs them
School.add_teacher(teacher1);
School.add_teacher(teacher2);
School.add_teacher(teacher3);
console.log(School.teachers);

//adds students to students array and logs them
School.add_student(student1);
School.add_student(student2);
School.add_student(student3);
console.log(School.students);

//logs selected teacher and student from based on index
console.log(School.select_teacher(2));
console.log(School.select_student(1));
