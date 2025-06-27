

import { renderOrderSummary } from "../../../script/checkout/orderSummary.js";
import { loadFromStorage } from "../../../data/cart.js";
import { renderPaymentSummary } from "../../../script/checkout/paymentSummary.js";
import { cart } from "../../../data/cart.js";

describe('test suite : renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '1c079479-8586-494f-ab53-219325432536';
    beforeEach(()=>{
spyOn(localStorage,'setItem');

    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>`;
    
   

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '1'
        },
        {
          productId: productId2,
          quantity: 4,
          deliveryOptionId: '2'
        }
      ]);
    });

    loadFromStorage();
    renderOrderSummary();
    });
  it('displays the cart', () => {

    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);




    document.querySelector('.js-test-container').innerHTML = ``; // the html is taking the so much space so to remove it


  });
  it('remove a product',()=>{
    
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
    document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
    document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);
    expect(
    document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);


    document.querySelector('.js-test-container').innerHTML = ``

});
});