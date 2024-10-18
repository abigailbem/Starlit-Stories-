const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById ('navbar');

if(bar){
    bar.addEventListener( 'click', () => {
        nav.classList.add ('active');
    })
}
if (close){
    bar.addEventListener( 'click', () => {
        nav.classList.remove ('active');
    })
}

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
}
let productNames = ['Funny Feelings', 'Butcher & Blackbird', 'Icebreaker', 'People We Meet On Vacation','The Summer of Broken Rules','Terms and Condition'];
let productPrices = [3000, 4100, 1550, 4100, 1650,5500]; 
let productQuantities = [10, 5, 8, 6,5,7,9]; 

// Function to add a product to the cart
function addToCart(productIndex, quantityToAdd) {
    // Check if enough quantity is available
    if (productQuantities[productIndex] >= quantityToAdd && quantityToAdd > 0) {
        // Reduce the quantity available in stock
        productQuantities[productIndex] -= quantityToAdd;

        // Prepare the item to add to the cart
        const item = {
            name: productNames[productIndex],
            price: productPrices[productIndex],
            quantity: quantityToAdd,
            image: document.querySelector('.single-pro-image img').src
        };

        // Get the existing cart from localStorage or create an empty one
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
        if (existingItemIndex !== -1) {
            // If it exists, update the quantity
            cartItems[existingItemIndex].quantity += quantityToAdd;
        } else {
            // Otherwise, add the new item
            cartItems.push(item);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Redirect to the cart page
        window.location.href = 'cart.html';
    } else {
        alert('Insufficient quantity available or invalid quantity selected.');
    }
}

// Add event listener for "Add to Cart" button
document.getElementById('add-to-cart').addEventListener('click', function() {
    const selectedQuantity = parseInt(document.querySelector('.single-pro-details input[type="number"]').value);
    
    // Get the product index dynamically (you could set this based on the product displayed)
    const productIndex = parseInt(this.dataset.productIndex); // Assuming the button has data attribute for product index

    // Call the addToCart function to handle adding the product
    addToCart(productIndex, selectedQuantity);
});
