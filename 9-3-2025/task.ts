// TS task 2 : 

// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
// interface Person {
//     name: string;
//     age: number;
// }

// const P1: Person = {
//     name: "Mona",
//     age: 22,
// }

// function checkAge(P:Person): void {
//     if (P.age >= 18) {
//         console.log(`${P.name} is an Adult.`);
//     }else{
//         console.log(`${P.name} is a Minor.`);
//     }
// }

// // Task 2: Iterate Through an Array in an Interface
// // You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

// interface Teacher{
//     name:string;
//     subjects:string[];
// }
// const t1:Teacher = {
//     name: "yara",
//     subjects: ["math","physics","E","arabic"]
// }

// console.log(`subjects for ${t1.name}: `);
// t1.subjects.forEach(element => {
//     console.log(element);
// });


// // Task 3: Modify Object in an Array of Interfaces
// // You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// interface Product {
//     name: string;       
//     price: number;       
//     quantity: number; 
//   }
//   const products: Product[] = [
//     { name: "Laptop",price: 1500, quantity:15 },
//     { name: "pc",price: 2000, quantity:9 },
//     { name: "Headphones",price: 65, quantity:20 },
//   ];

//   for (let i = 0; i < products.length; i++) {
//     const element = products[i];
//     if (products[i].quantity >= 5) {
//         const old = element.price;
//         element.price = old-0.15*old;  
//         console.log(`The price for ${element.name} NOW is: ${element.price}`);
//     } 
//   }

// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product


interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

// Get existing products from localStorage 
let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

// Display existing products
displayProducts();

// Add event listener to handle form submission
const form = document.getElementById("product-form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent from reloading the page

    const name = (document.getElementById("product-name") as HTMLInputElement).value;
    const description = (document.getElementById("product-description") as HTMLInputElement).value;
    const price = parseFloat((document.getElementById("product-price") as HTMLInputElement).value);
    const quantity = parseInt((document.getElementById("product-quantity") as HTMLInputElement).value);

    const newProduct: Product = { name, description, price, quantity };

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    form.reset();

    displayProducts();
});

function displayProducts(): void {
    const container = document.getElementById("product-cards-container");
    if (container) {
        container.innerHTML = ""; 

        products.forEach((product) => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
          <h3>${product.name}</h3>
          <p><strong>Description:</strong> ${product.description}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Quantity:</strong> ${product.quantity}</p>
        `;

            container.appendChild(card); 
        });
    }
}
