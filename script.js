let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartBtn = document.getElementById("cart-btn");
const addButtons = document.querySelectorAll(".add-cart");

function updateCartButton() {
    if (cartBtn) {
        cartBtn.textContent = "🛒 Sepet (" + cart.length + ")";
    }
}

updateCartButton();

addButtons.forEach(function(button){

    button.addEventListener("click", function(){

        cart.push({
            name: button.dataset.name,
            price: Number(button.dataset.price)
        });

      localStorage.setItem("cart", JSON.stringify(cart));

        updateCartButton(); 

        

        











    });

});
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

if (cartItems) {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(function(product, index) {

        total += Number(product.price);

        cartItems.innerHTML += `
<div class="product-card">
    <h3>${product.name}</h3>
    <p>₺${product.price}</p>
    <button class="delete-btn" onclick="deleteProduct(${index})">
        ❌ Sil
    </button>
</div>`;
    });

    if (totalPrice) {
        totalPrice.textContent = "Toplam: ₺" + total;
    }
}

function deleteProduct(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

const clearCart = document.getElementById("clear-cart");

if (clearCart) {
    clearCart.addEventListener("click", function() {
        localStorage.removeItem("cart");
        location.reload();
    });
}
const orderItems = document.getElementById("order-items");
const orderTotal = document.getElementById("order-total");

if (orderItems) {
    let total = 0;

    cart.forEach(function(product) {
        total += Number(product.price);

        orderItems.innerHTML += `
<div class="product-card">
    <h3>${product.name}</h3>
    <p>₺${product.price}</p>
</div>`;
    });

    if (orderTotal) {
        orderTotal.textContent = "Toplam: ₺" + total;
    }
}

const orderForm = document.querySelector(".order-form");

if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("🎉 Siparişiniz başarıyla oluşturuldu!");

        localStorage.removeItem("cart");

        window.location.href = "index.html";
    });
}

const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function() {

        const value = search.value.toLowerCase();

        document.querySelectorAll(".product").forEach(function(product) {

            if (product.innerText.toLowerCase().includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter = button.dataset.filter;

        products.forEach(function(product) {

            if (filter === "all" || product.dataset.category === filter) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});
