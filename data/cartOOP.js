// below we have object cart and function loadFromStorage 
// Fucntion inside the object is called "Method"

import { loadFromStorage } from "./cart.js";

// this => giv us the outer object if we change  the name of outer object it doesn't matter
function Cart(localStoragekey){  // this that create or genrate object we use pascal case = start every word with a Capital
  const cart = {
    cartItems : undefined,
     loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStoragekey));
if(!this.cartItems){

  this.cartItems = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId : '1'
  },{
      productId : '1c079479-8586-494f-ab53-219325432536',
      quantity : 4,
      deliveryOptionId : '2'
    }];
  }
},

    saveToStorage(){
      localStorage.setItem(localStoragekey,JSON.stringify(this.cartItems));
    },
    addToCart(productId,quantity){
      let matchingItem;
      this.cartItems.forEach((item) =>{
        if(productId === item.productId){
          matchingItem = item;
        }
    });
  if(matchingItem){
    matchingItem.quantity += quantity;
  }else{
    this.cartItems.push({
      productId : productId,
      quantity : quantity,
      deliveryOptionsId : '1'
  
    });
  }
  this.saveToStorage();
},
  removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach((cartItem) =>{
        if(cartItem.productId != productId){
            newCart.push(cartItem);
        }
    });
    this.cartItems= newCart;
    this.saveToStorage();
},
    updateDeliveryOption(productId, deliveryOptionsId){
    let matchingItem;
    this.cartItems.forEach((item) =>{
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    matchingItem.deliveryOptionsId = deliveryOptionsId;

    this.saveToStorage();
  }

};
return cart;

}
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();

businessCart.loadFromStorage();


// above is two object we just copy pasted one object and just by changing theri name the other object is created . so it is simple with oops to make mutiple object

// above we have grouped our data in object 

// Why do we use oop => tries to represent a real word jaise ki real maine cart hoti hai usme se add  and remove kar sakte (shopping cart  )


// instead of copying the object every time just make the function of the same product and use it as many as time you want 
// just pass a parameter in the function like i have passed (localStoragekey) and use it in the plae of localStorage to make the seprate key
