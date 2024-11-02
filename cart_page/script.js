// Quantity buttons event listeners
document.querySelectorAll('.quantity button').forEach(button => {
    button.addEventListener('click', function() {
      const quantityDisplay = this.parentNode.querySelector('span');
      let quantity = parseInt(quantityDisplay.textContent);
  
      if (this.textContent === '+') {
        quantity++;
      } else if (this.textContent === '-' && quantity > 1) {
        quantity--;
      }
  
      quantityDisplay.textContent = quantity;
    });
  });
  