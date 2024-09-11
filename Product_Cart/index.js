function showImg(e) {
  let img_show = document.getElementById("img_show");
  img_show.src = e.src;
}

var count = 0;
var pricePerItem = 125;

function plus() {
  count++;
  document.getElementById("count").innerHTML = count;
  cart();
}

function minus() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerHTML = count;
    cart();
  }
}

function cart() {
  if (count > 0) {
    let totalPrice = count * pricePerItem;
    document.getElementById("number").innerHTML = 1;
    document.getElementById(
      "cart_show_item"
    ).innerHTML = `<div class="cart_show_item_top">
      <img src="https://e-commerce-product-page-psi-eight.vercel.app/assets/image-product-2.jpg" id="product_img">
      <div class="cart_show_item_info">
        <p>Fall Limited Edition Sneakers</p>
        <div class='cart_show_item_price'>
          <p id="items_price">$${pricePerItem} <span id="number_of_items"> x ${count}</span></p>
          <p id="price"><b>$${totalPrice}</b></p>
        </div>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjROxoXgqEeX9xDKhOsZmYW8nfVSMz8fW9n92_-3JFoA&s" class="delete_icon" id="delete_img" width="30px" height="30px" onclick="delete_icon()">
    </div>
    <div class="cart_show_item_bottom">
      <h2 id="checkout" onclick="checkout()">Checkout</h2>
    </div>`;
  } else {
    document.getElementById("number").innerHTML = 0;
    document.getElementById(
      "cart_show_item"
    ).innerHTML = `<h3>Your cart is empty.</h3>`;
  }
}

function cart_show() {
  document.getElementById("main2").style.display = "none";
  document.getElementById("cart_show").style.display = "block";
}

function cart_back() {
  document.getElementById("main2").style.display = "block";
  document.getElementById("cart_show").style.display = "none";
}

function delete_icon() {
  count = 0;
  document.getElementById("count").innerHTML = count;
  document.getElementById("number").innerHTML = count;
  document.getElementById(
    "cart_show_item"
  ).innerHTML = `<h3>Your cart is empty.</h3>`;
}

function checkout() {
  document.getElementById("main2").style.display = "block";
  document.getElementById("cart_show").style.display = "none";
}
