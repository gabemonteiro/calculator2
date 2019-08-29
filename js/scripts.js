
var add = function(number1, number2){
	return number1 + number2;
};

var subtraction = function (number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var division = function(number1, number2){
	return number1/number2;
};

var remainder = function(number1, number2){
	return number1 % number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));
alert(subtraction(number1, number2));
alert(multiply(number1, number2));
alert(division(number1, number2));
alert(remainder(number1, number2));
