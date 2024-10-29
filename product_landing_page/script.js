// Function to change the main image to the clicked thumbnail
function setMainImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = thumbnail.src;
}

// Optional: Add some basic styling feedback to indicate which thumbnail is active
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Remove 'active' class from all thumbnails
        document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('active-thumbnail'));

        // Add 'active' class to the clicked thumbnail
        thumbnail.classList.add('active-thumbnail');
    });
});

// Handle Buy Now button click
document.querySelector('.buy-now').addEventListener('click', function() {
    alert('Redirecting to checkout...');
    // You can add code here to navigate to the checkout page or handle the purchase process
});

// Handle Add to Cart button click
document.querySelector('.add-to-cart').addEventListener('click', function() {
    alert('Item added to cart');
    // Code to add the item to the cart can be added here
});
