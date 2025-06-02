const products = [];

// Load f1.jpg to f8.jpg from /img/products/
for (let i = 1; i <= 8; i++) {
  products.push({
    name: `Product f${i}`,
    price: 400 + i * 50,
    image: `img/products/f${i}.jpg`
  });
}

// Load n1.jpg to n8.jpg from /img/products/
for (let i = 1; i <= 8; i++) {
  products.push({
    name: `Product n${i}`,
    price: 500 + i * 60,
    image: `img/products/n${i}.jpg`
  });
}

const container = document.getElementById("product-list");

products.forEach((product, index) => {
  const div = document.createElement("div");
  div.classList.add("product-card");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button data-index="${index}">Add to Cart</button>
  `;
  container.appendChild(div);
});

container.addEventListener("click", function(event) {
  if(event.target.tagName === "BUTTON") {
    const index = event.target.getAttribute("data-index");
    addToCart(products[index]);
  }
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
