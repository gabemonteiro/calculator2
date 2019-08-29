// weight / height^2//
var weight = prompt("What is your weight? ");
var height = prompt("What is your height? ");
var bmi = function(number1, number2){
  return number1 / (number2 * number2);
}

var number1 = alert(parseInt(weight));
var number2 = alert(parseInt(height));
var number3 = bmi(parseInt(weight), parseInt(height));


//Working bmi
// weight / height^2//

var bmi = function(number1, number2){
  return  number1 / (number2 * number2);
}

var weight = parseFloat(prompt("What is your weight? "));
var height = parseFloat(prompt("What is your height? "));

var number1 = parseFloat(weight);
var number2 = parseFloat(height);
var result = bmi(weight, height);
alert(result); 
