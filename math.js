var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var add = function(number1, number2) {
  return number1 + number2;
};

saySomething("The sum is " + add(3,5) + ".");


var saySomething = function(whatToSay) {
  alert(whatToSay);
};

function subtraction(number1, number2) {
	return number1 - number2;
};

function multiply(number1, number2){
	return number1 * number2;
};

function division(number1, number2){
	return number1/number2;
};

function remainder(number1, number2){
	return number1 % number2;
};

saySomething("Your answer is: " + subtraction(5,2) + "," + "your multiplication " + multiply(2,6) + ", your division answer: " + division(10,2) + ", your remainder answer: " + remainder(10,2));




var age = prompt("What is your age: ");
function yourAge() {
	alert("your age is: " + age);
};
yourAge();

var name = prompt("What is your name: ");
function yourName(){
	alert("Your name is: " + name);
};
yourName();

var favFood = prompt("What is your favorite food? ");
function  yourFood(){
	alert("Your favorite food is: " + favFood);
}
yourFood();
function aboutMe(){
	alert("Welcome, " + name + ". " + "You are "+age + ". " +"Would your like some " + favFood + "?");
}
aboutMe();
