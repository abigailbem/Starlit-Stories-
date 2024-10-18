// Load cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to display the invoice items
function displayInvoice() {
    const invoiceBody = document.getElementById('invoice-body');
    let invoiceSubtotal = 0;

    // Iterate through the cart items to generate the invoice rows
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        invoiceSubtotal += itemTotal;

        // Insert product details in the invoice table
        invoiceBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)} JMD</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)} JMD</td>
            </tr>
        `;
    });

    // Calculate tax and total
    const tax = invoiceSubtotal * 0.15;
    const total = invoiceSubtotal + tax;

    // Update the invoice summary (subtotal, tax, total)
    document.getElementById('invoice-subtotal').textContent = `Subtotal: $${invoiceSubtotal.toFixed(2)} JMD`;
    document.getElementById('invoice-tax').textContent = `Tax (15%): $${tax.toFixed(2)} JMD`;
    document.getElementById('invoice-total').textContent = `Total: $${total.toFixed(2)} JMD`;
}

// Event listeners for buttons
document.getElementById('cancel-btn').addEventListener('click', () => {
    localStorage.removeItem('cartItems'); // Clear the cart
    alert("Your order has been canceled.");
    window.location.href = 'mainpage.html'; // Redirect to the main page
});

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'mainpage.html'; // Redirect to the main page
});

// Display the invoice when the page loads
if (cartItems.length > 0) {
    displayInvoice();
} else {
    document.getElementById('invoice-body').innerHTML = '<tr><td colspan="4">No items in your cart.</td></tr>';
}
document.getElementById('confirm-btn').addEventListener('click', () => {
    alert("Your order has been confirmed. Thank you!");
    localStorage.removeItem('cartItems'); // Optionally clear cart after confirming
    window.location.href = 'confirmation.html'; // Redirect to a confirmation page
});
