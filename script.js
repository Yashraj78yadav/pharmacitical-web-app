// JavaScript for Banner Auto-Sliding
const Banner = document.querySelector('.Banner-slider');
const BannerItems = document.querySelectorAll('.Banner-item');
let currentIndex = 0;
const totalItems = BannerItems.length;
const slideInterval = 3000; // 3 seconds

// Function to change slide
function changeSlide() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0; // Loop back to the first slide
    }
    updateBannerPosition();
}Banner
// Update the position of the Banner
function updateBannerPosition() {
    Banner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Auto-slide every few seconds
let autoSlide = setInterval(changeSlide, slideInterval);

// Optional: Navigation Controls
const prevButton = document.querySelector('.Banner-prev');
const nextButton = document.querySelector('.Banner-next');

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
        updateBannerPosition();
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
        updateBannerPosition();
        resetAutoSlide();
    });
}

// Reset auto-slide interval when navigating manually
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(changeSlide, slideInterval);
}



// sliding effect of card section



// card section


    document.querySelectorAll('.cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });


