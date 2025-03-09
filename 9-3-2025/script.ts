// ----------------------------------------------
// 1️⃣ Defining an Interface in TypeScript
// ----------------------------------------------
// This interface defines a blueprint for a Student Grade object.
interface StudentGrade {
    studentName: string;  // Name of the student
    subject: string;      // Subject name
    score: number;        // Score in that subject
  }
  
  // Example object that follows the StudentGrade interface
  const singleStudent: StudentGrade = {
    studentName: "Ali Ahmed",
    subject: "Mathematics",
    score: 95
  };
  
//   console.log("Single Student Grade:", singleStudent); // Output to console
  
  // -------------------------------------------------------------------------------------------
  // 2️⃣ Defining an Object Structure Using Interfaces &&&   3️⃣ Defining an Array Inside an Interface
  // -------------------------------------------------------------------------------------------
  
  // This interface defines a Classroom that contains an array of student grades.
//   interface Classroom {
//     className: string;         // Name of the classroom
//     students: StudentGrade[];  // Array of students and their grades
//   }
  
//   // Example classroom object
//   const myClass: Classroom = {
//     className: "Grade 10 - A",
//     students: [
//       { studentName: "Ali Ahmed", subject: "Mathematics", score: 95 },
//       { studentName: "Sara Khalid", subject: "Science", score: 89 }
//     ]
//   };
  
//   console.log("Classroom Details:", myClass); // Output classroom details
  
  // ----------------------------------------------
  // 4️⃣ Define an Array of Objects & Load It into HTML
  // ----------------------------------------------
  // Creating an array of student grades using the StudentGrade interface
  const grades: StudentGrade[] = [
    { studentName: "Ali Ahmed", subject: "Mathematics", score: 95 },
    { studentName: "Sara Khalid", subject: "Science", score: 89 },
    { studentName: "Mohammed Saleh", subject: "History", score: 76 }
  ];
  
  /**
   * Function to load student grades dynamically into the HTML table.
   * It finds the table body and fills it with student details.
   */
  function loadGrades(): void {
    const gradesTableBody = document.getElementById("grades-table-body"); // Get the tbody element
  
    if (gradesTableBody) {
      gradesTableBody.innerHTML = ""; // Clear previous content before adding new rows
  
      // Loop through each student and create table rows dynamically
      grades.forEach((student) => {
        const row = document.createElement("tr"); // Create a table row
  
        // Insert table data for student details
        row.innerHTML = `
          <td>${student.studentName}</td>
          <td>${student.subject}</td>
          <td style="color: ${student.score >= 90 ? 'green' : student.score >= 70 ? 'orange' : 'red'};">
            ${student.score}
          </td>
        `;
  
        gradesTableBody.appendChild(row); // Append the row to the table body
      });
    }
  }
  

  //-------------------------------------------------------------------------------

  // 1- Multi-Type Array using union types (|).
// let multiTypeArray: (string | number | boolean)[] = ["Sondos", 24, true, "Programmer"];
// console.log(multiTypeArray);

//--------------------------------------------------------------------
// 2- (Function Types): A. (Return Type) B. (Parameter Types)

// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// console.log(addNumbers(5, 10)); // 15

// 'a' and 'b' must be of type number.
// The function returns a value of type number.

//---------------------------------------------------------------------
// 3- (Optional Parameters) and (Default Parameters):

// (Optional Parameters):
// function greet(name: string, age?: number): string {
   
//     return age ? `Hello ${name}, your age is ${age} years.` : `Hello ${name}`;
// }

// console.log(greet("Sondos"));       // Hello Sondos
// console.log(greet("Mohammed", 25)); // Hello Mohammed, your age is 25 years.

// // (Default Parameters)
// function greetDefault(name: string, age: number = 20): string {
//     return `Hello ${name}, your age is ${age} years.`;
// }

// console.log(greetDefault("Sondos")); // Hello Sondos, your age is 20 years.
//------------------------------------------------------------------------

// 4- (Rest Parameter)
// function sumNumbers(...numbers: number[]): number {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sumNumbers(10, 20, 30));
// console.log(sumNumbers(5, 15, 25, 35, 45))
// ...numbers: number[] means that we can return an unlimited number of numeric values


//----------------------------------------------------------------
// Define an array of objects with 3 items containing product information 
// (name, description, and price). There is a load button in the HTML, and 
// when clicked, it will call a function to load the three objects into the HTML page.


// let products = [
//   { name: "Laptop", description: "Powerful HP Laptop", price: 800 },
//   { name: "Phone", description: "Advanced Samsung Phone", price: 500 },
//   { name: "Headphones", description: "High-quality Bluetooth Headphones", price: 100 }
// ];

// // Function to load products into the page
// function loadProducts(): void {
//   let productList = document.getElementById("product-list");
//   if (productList) {
//       productList.innerHTML = products.map(
//           (product) => `<li>${product.name} - ${product.description} - $${product.price}</li>`
//       ).join("");
//   }
// }