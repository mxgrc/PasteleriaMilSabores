
document.getElementById("year").textContent = new Date().getFullYear();


const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const emptyCart = document.getElementById("emptyCart");
const checkout = document.getElementById("checkout");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      cart.splice(index, 1);
      saveCart();
    };

    li.appendChild(delBtn);
    cartItems.appendChild(li);
    total += item.precio;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

cartBtn.onclick = () => { 
  renderCart();
  cartModal.style.display = "flex"; 
};

closeCart.onclick = () => { cartModal.style.display = "none"; };
emptyCart.onclick = () => { cart = []; saveCart(); };
checkout.onclick = () => {
  alert("Redirigiendo a la página de pago...");
  window.location.href = "pago.html";
};

renderCart();
cartModal.style.display = "none";
