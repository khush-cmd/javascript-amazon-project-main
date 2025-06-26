export let cart;
loadFromStorage();
export function loadFromStorage(){
cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){

  cart = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionsId : '1'
  },{
      productId : '1c079479-8586-494f-ab53-219325432536',
      quantity : 4,
      deliveryOptionsId : '2'
  }];
  }
}
function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId,quantity){
  let matchingItem;
  cart.forEach((item) =>{
    if(productId === item.productId){
      matchingItem = item;
    }
  });
  if(matchingItem){
    matchingItem.quantity += quantity;
  }else{
    cart.push({
      productId : productId,
      quantity : quantity,
      deliveryOptionsId : '1'
  
    });
  }
  saveToStorage();
}
export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) =>{
        if(cartItem.productId != productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

 export function updateDeliveryOption(productId, deliveryOptionsId){
  let matchingItem;
  cart.forEach((item) =>{
    if(productId === item.productId){
      matchingItem = item;
    }
  });

  matchingItem.deliveryOptionsId = deliveryOptionsId;

  saveToStorage();
}