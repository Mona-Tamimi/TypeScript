// Example object that follows the StudentGrade interface
var singleStudent = {
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
var grades = [
    { studentName: "Ali Ahmed", subject: "Mathematics", score: 95 },
    { studentName: "Sara Khalid", subject: "Science", score: 89 },
    { studentName: "Mohammed Saleh", subject: "History", score: 76 }
];
/**
 * Function to load student grades dynamically into the HTML table.
 * It finds the table body and fills it with student details.
 */
function loadGrades() {
    var gradesTableBody = document.getElementById("grades-table-body"); // Get the tbody element
    if (gradesTableBody) {
        gradesTableBody.innerHTML = ""; // Clear previous content before adding new rows
        // Loop through each student and create table rows dynamically
        grades.forEach(function (student) {
            var row = document.createElement("tr"); // Create a table row
            // Insert table data for student details
            row.innerHTML = "\n          <td>".concat(student.studentName, "</td>\n          <td>").concat(student.subject, "</td>\n          <td style=\"color: ").concat(student.score >= 90 ? 'green' : student.score >= 70 ? 'orange' : 'red', ";\">\n            ").concat(student.score, "\n          </td>\n        ");
            gradesTableBody.appendChild(row); // Append the row to the table body
        });
    }
}
