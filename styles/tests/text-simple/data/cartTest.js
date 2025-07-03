import {addToCart,cart,loadFromStorage} from '../../../data/cart.js';



// describe('Test suit : addToCart',()=>{
//     it('adds an existing product to the cart ', ()=>{
//         // spyOn(localStorage,'setItem');
//          spyOn(localStorage,'getItem').and.callFake(()=>{
//             return JSON.stringify([{
//                 productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//                 quantity: 1,
//                 deliveryOptionId: '1'
//             }]);
//         });
        
        
//         loadFromStorage();
//         addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//         expect(cart.length).toEqual(1);
//         expect(localStorage.setItem).toHaveBeenCalledTimes(1);
//         expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//         // expect(cart[0].quantity).toEqual(2);
//     });
        
        
//         spyOn(localStorage ,'setItem');
//         spyOn(localStorage,'getItem').and.callFake(()=>{
//             return JSON.stringify([]);
//         });
//         loadFromStorage();
//         addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//         // to compare value is it does write anything so 
//         // we have do if cart is empty then cart.length() = 0 and vice versa
//         expect(cart.length).toEqual(1);
        
//         // the problem in this is that in cart functin we are exporting there is local storage and beacuse of local storage the problem is arsing
//         // if the cart is empty the code while work if the cart is not empty the code will not work properly 
//         // this type of test are calle flaky test
        
//         // Flaky Test = test that sometimes passes and sometime fails
//         // to  solve this probelm we are going to use "Mocks" = lets us replace a methos with a fake version
        
//         expect(localStorage.setItem).toHaveBeenCalledTimes(1);
//         // // this the method spyOn give us toHaveBeenCalledTimes = that it tell how many times the setItem is called
//         expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      
//             });

// });
describe('test suite : addToCart',()=>{
    it('add an exisiting product to cart ',()=>{
        spyOn(localStorage , 'setItem');
         spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{

                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

         addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    });
    it('add a new product to the cart',()=>{
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        loadFromStorage();


        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual();
    });
});
