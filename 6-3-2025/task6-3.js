//task 6-3-2025
//task 1: Identify if a Number is Even or Odd
var num = 3;
if (num % 2 == 0) {
    console.log("even number");
}
else {
    console.log("odd number");
}
//task 2: Filter Expensive Products from an Array 
var products = [16, 30, 22, 30, 43];
var threshold = 20;
products.forEach(function (element) {
    if (threshold < element) {
        console.log(element);
    }
});
//task 3: Sum All Elements in an Array
var count = 0;
var numbers = [30, 7, 23, 19, 34];
numbers.forEach(function (element) {
    count += element;
});
console.log(count);
