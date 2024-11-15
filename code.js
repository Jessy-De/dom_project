// Select the necessary elements
const items = document.querySelectorAll(".card-body"); // Each item container
const totalPriceElement = document.querySelector(".total"); // Total price display

// Function to update the total price
function updateTotal() {
  let total = 0;
  items.forEach((item) => {
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    const unitPrice = parseFloat(
      item.querySelector(".unit-price").textContent.replace("$", "")
    );
    total += quantity * unitPrice;
  });
  totalPriceElement.textContent = `${total} $`;
}

// Event listeners for each item
items.forEach((item) => {
  const plusButton = item.querySelector(".fa-plus-circle");
  const minusButton = item.querySelector(".fa-minus-circle");
  const deleteButton = item.querySelector(".fa-trash-alt");
  const likeButton = item.querySelector(".fa-heart");
  const quantityElement = item.querySelector(".quantity");

  // Handle the "+" button click to increase quantity
  plusButton.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = ++quantity;
    updateTotal();
  });

  // Handle the "-" button click to decrease quantity
  minusButton.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = --quantity;
      updateTotal();
    }
  });

  // Handle delete button click to remove item from cart
  deleteButton.addEventListener("click", () => {
    item.parentElement.remove(); // Remove the item card from DOM
    updateTotal();
  });

  // Handle like button click to toggle heart color
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
  });
});

// Styling for liked heart button
const style = document.createElement("style");
style.textContent = `
  .fa-heart.liked {
    color: red;
  }
`;
document.head.appendChild(style);
