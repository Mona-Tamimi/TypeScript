//task 6-3-2025
//task 1: Identify if a Number is Even or Odd
let num : number = 3;
if (num%2==0) {
    console.log("even number");
}else{
    console.log("odd number");
}

//task 2: Filter Expensive Products from an Array 
let products : number[]=[16, 30, 22, 30, 43];
let threshold : number = 20;
products.forEach(element => {
    if (threshold<element) {
        console.log(element)
    }
});

//task 3: Sum All Elements in an Array
let count:number = 0;
let numbers:number[] = [30,7,23,19,34]
numbers.forEach(element => {
    count += element;
});
console.log(count);