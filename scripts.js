let cart = [];

function addToCart(button) {
    const productElement = button.parentElement;
    const id = productElement.getAttribute('data-id');
    const name = productElement.getAttribute('data-name');
    const price = productElement.getAttribute('data-price');
    
    const product = {
        id,
        name,
        price,
        quantity: 1
    };
    
    const existingProductIndex = cart.findIndex(item => item.id === id);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 2;
    } else {
        cart.push(product);
    }
    
    updateCartCount();
    saveCart();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

document.addEventListener('DOMContentLoaded', loadCart);
