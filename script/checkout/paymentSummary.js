
import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOption.js';
import { formateCurrency } from '../utils/money.js';

export function renderPaymentSummary(){
    // with mvc
    // model , view , control
    // save the data
    // 1. Loop through the cart 
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem)=>{
        
        // ab hum product id chaiye taki payment calculate karne ke liye hum product ko qunatity se * kar sake
        // product ke liye humare pass product id hai 
        // or product id ke liye humare pass ak function hai jo product of uski matching id se match karega or productid de dega
        // we have use model to get that function form product.js
    const product =  getProduct(cartItem.productId);
        
    // Step 2 : for each product : price*quantity
    productPriceCents += product.priceCents* cartItem.quantity
    
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
    shippingPriceCents += deliveryOption.priceCents;
    
    
});
// to calculate precent 10% = mutiply by 10 / 100
    // Step 1. save the data(Model)
    const totalBeforeTaxCents =  productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1; // directly 0.1
    const totalCents = totalBeforeTaxCents + taxCents;
    // Step 2: generate the  html
    const paymentSummaryHTML = `
        <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row">
                <div>Items (3):</div>
                <div class="payment-summary-money">$${formateCurrency(productPriceCents)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">$${formateCurrency(shippingPriceCents)}
                </div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${formateCurrency(totalBeforeTaxCents)}
                /div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${formateCurrency(taxCents)}
                </div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${formateCurrency(totalCents)}
                </div>
            </div>

            <button class="place-order-button button-primary">
                Place your order
            </button>
    `;
}
document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;