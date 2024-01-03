// Existing JavaScript code...

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    const cartContainer = document.getElementById('cartContainer');

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // If the product is already in the cart, increase its quantity
        existingItem.quantity++;
    } else {
        // If the product is not in the cart, add it as a new item
        cartItems.push({
            name: productName,
            quantity: 1,
            price: productPrice,
        });
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    // Clear the existing cart items
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';

    // Add updated cart items
    cartItems.forEach(createCartItem);

    // Calculate and display total price
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const totalElement = document.createElement('p');
    totalElement.classList.add('total-price');
    totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    cartContainer.appendChild(totalElement);
}
