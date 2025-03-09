// TS task 2 : 
// Get existing products from localStorage 
var products = JSON.parse(localStorage.getItem("products") || "[]");
// Display existing products
displayProducts();
// Add event listener to handle form submission
var form = document.getElementById("product-form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent from reloading the page
    var name = document.getElementById("product-name").value;
    var description = document.getElementById("product-description").value;
    var price = parseFloat(document.getElementById("product-price").value);
    var quantity = parseInt(document.getElementById("product-quantity").value);
    var newProduct = { name: name, description: description, price: price, quantity: quantity };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    form.reset();
    displayProducts();
});
function displayProducts() {
    var container = document.getElementById("product-cards-container");
    if (container) {
        container.innerHTML = "";
        products.forEach(function (product) {
            var card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = "\n          <h3>".concat(product.name, "</h3>\n          <p><strong>Description:</strong> ").concat(product.description, "</p>\n          <p><strong>Price:</strong> $").concat(product.price, "</p>\n          <p><strong>Quantity:</strong> ").concat(product.quantity, "</p>\n        ");
            container.appendChild(card);
        });
    }
}
