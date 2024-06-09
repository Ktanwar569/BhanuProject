let total = 0;
let itemCount = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.onclick = function () {
        cartItems.removeChild(listItem);
        itemCount -= 1;
        total -= price;
        document.getElementById('item-count').textContent = itemCount;
        document.getElementById('total').textContent = total.toFixed(2);
    };
    listItem.textContent = `${productName}: $${price.toFixed(2)}`;
    listItem.appendChild(removeButton);
    cartItems.appendChild(listItem);

    itemCount += 1;
    total += price;

    document.getElementById('item-count').textContent = itemCount;
    document.getElementById('total').textContent = total.toFixed(2);
}

function buyNow() {
    const orderMessage = document.getElementById('order-message');
    const errorMessage = document.getElementById('error-message');

    if (itemCount === 0) {
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000); // Hide the error message after 3 seconds
    } else {
        setTimeout(() => {
            orderMessage.style.display = 'none';
        }, 3000);
        orderMessage.style.display = 'block';
    }
}
