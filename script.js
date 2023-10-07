// Initialize cart data
let cart = [];
let total = 0;

// Add to Cart button click event
document.getElementById("addToCart").addEventListener("click", function () {
    // Add the product to the cart
    cart.push({ name: "APPLE IPHONE 14 Pro", price: 140000 });
    
    // Update the cart display
    updateCart();
});

// View Cart button click event
document.getElementById("viewCart").addEventListener("click", function () {
    alert("Cart Items: " + JSON.stringify(cart) + "\nTotal: ₹" + total.toFixed(2));
});

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    
    // Clear the existing cart display
    cartItems.innerHTML = "";
    
    // Update cart items and calculate the total
    total = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name + " - ₹" + item.price.toFixed(2);
        cartItems.appendChild(listItem);
        total += item.price;
    });
    
    // Update the total price
    cartTotal.textContent = total.toFixed(2);
}
