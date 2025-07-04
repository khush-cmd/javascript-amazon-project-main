// const product = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name :'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count : 87
//     },
//     priceCent: 1090
// },{
//     image:'images/products/intermediate-composite-basketball.jpg',
//     name : 'Intermediate Size Basketball',
//     rating : {
//         stars : 4,
//         count : 127
//     },
//     priceCent : 2095
// },{
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name : 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating : {
//         stars : 4.5,
//         count : 56
//     },
//     priceCent : 799
// }];


import {cart , addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formateCurrency} from './utils/money.js';
let productHTML = '';

products.forEach((products) => {
    productHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          
          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

        


          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${products.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${products.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class = "js-quantity-selector-${products.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${products.extraInfoHTML()}
          <div class="product-spacer"></div>

          <div class="added-to-cart">
          Added
          
          </div>
          <div class='js-message'></div>
          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id = "${products.id}">
          Add to Cart
          </button>
          </div>`
});

console.log(productHTML);

document.querySelector('.js-products-grid').innerHTML = productHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
  
  button.addEventListener('click',() =>{
    const messageContainer = button.parentElement.querySelector('.js-message');
    messageContainer.innerHTML = ` <img src="images/icons/checkmark.png" alt="Checkmark"> Added`;
    messageContainer.style.display = 'block';
    
    setTimeout(function(){
      messageContainer.style.display = 'none';
    },2000);
  });
});

    function updateCartQuantity(){
      let cartQuantity = 0;
      cart.forEach((item) =>{
        cartQuantity += item.quantity;
      });
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      
    }
    
  
document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
  button.addEventListener('click', () =>{
    const productId = button.dataset.productId;
    const selectElement = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(selectElement.value);
    addToCart(productId,quantity);
    updateCartQuantity(); 
   
  });
});
