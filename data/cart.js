export const cart = [{
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},{
    productId : '1c079479-8586-494f-ab53-219325432536',
    quantity : 4,
}];
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
      quantity : quantity
  
    });
  }
}