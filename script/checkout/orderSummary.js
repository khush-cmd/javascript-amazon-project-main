// now we going to add js to this checkout page
// first and for most things that we have connected to checkout page to amazon page by using
// <a href = " tag";

// Now the main idea of Js 
// 1. Save the data
// 2. Generate the HTML
// 3. Make it interactive

// 1. Save the data
import {cart,removeFromCart,updateDeliveryOption} from '../../data/cart.js';
import {getProduct, products} from '../../data/products.js';
import {formateCurrency} from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {getDeliveryOption,deliveryOptions} from '../../data/deliveryOption.js';




// console.log(dayjs()); // this will gave persent date in the console



 
export function renderOrderSummary(){
    let cartSummaryHTML = '';
cart.forEach((cartItem) =>{
    const productId = cartItem.productId;

    
    const matchingProduct = getProduct(productId);
    const deliveryOptionId = cartItem.deliveryOptionId;    
    let deliveryOption = getDeliveryOption(deliveryOptionId);
   
    
    const today = dayjs();
    const deliveryDate = today.add(
        deliveryOptions.deliveryDays,
        'days'
    );
        const dateString = deliveryDate.format(
            'dddd, MMMM D'
        );


    
    cartSummaryHTML += `
    <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
    
    <div class = "delivery-date">
    Delivery date : ${dateString}
    </div>

    <div class="cart-item-details-grid">
    <img class="product-image"
    src="${matchingProduct.image}">
    
    <div class="cart-item-details">
    <div class="product-name">
    ${matchingProduct.name}
    </div>
    <div class="product-price">
    $${formateCurrency(matchingProduct.priceCents)}
    </div>
    <div class="product-quantity">
    <span>
    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
    </span>
    <span class="update-quantity-link link-primary">
    Update
    </span>
    <span class="delete-quantity-link link-primary js-delete-link"
    data-product-id = "${matchingProduct.id}">
    
    Delete
    </span>
    </div>
    </div>
    <div class="delivery-options">
    <div class="delivery-options-title">
    Choose a delivery option:
    </div>
    ${deliveryOptionHTML(matchingProduct,cartItem)}
    
    </div>
    </div>
    </div>
    `;
});

    function deliveryOptionHTML(matchingProduct,cartItem){
    let html = ``;
    deliveryOptions.forEach((deliveryOption) =>{
    const today = dayjs();
    const deliveryDate = today.add(
    deliveryOption.deliveryDays,'days'
    );
    const dateString = deliveryDate.format('dddd , MMMM D');
    const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formateCurrency(deliveryOption.priceCents)} -`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionsId;
    html +=`      
    <div class="delivery-option js-delivery-option"
    data-product-id="${matchingProduct.id}"
    data-delivery-option-id= "${deliveryOption.id}">
    <input type="radio" 
    ${isChecked ? 'checked' : ''}
    class="delivery-option-input"
    name="delivery-option-${matchingProduct.id}">
    <div>
    <div class="delivery-option-date">
    ${dateString}
    </div>
    <div class="delivery-option-price">
    ${priceString} Shipping
    </div>
    </div>
    </div>
    `
    });

    return html;
    }

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


    document.querySelectorAll('.js-delete-link')
    .forEach((link) =>{
    link.addEventListener('click',()=>{
    const productId = link.dataset.productId;
    removeFromCart(productId);


    const container = document.querySelector(
    `.js-cart-item-container-${productId}`
    );
    container.remove();
    });
    });

    document.querySelectorAll('.js-delivery-option').forEach((element) =>{
    element.addEventListener('click',()=>{
    const {productId,deliveryOptionsId} = element.dataset;// this is shorthand property
    updateDeliveryOption(productId,deliveryOptionsId);
    
    });
    });

}

