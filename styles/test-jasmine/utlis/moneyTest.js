import { formateCurrency } from "../../../script/utils/money.js";
// create a group of specs (often called a suite).
// calls to describe can be nested with other calls to compose your suite as a tree
// describe (description , specDefinitions)
describe('test suite : formateCurrency',()=>{
    // to create a test in jasmine we are good to use it 
    // it(description, testFunction, timeOut)
    // it create the test 
    it('convert cents into dollars' , ()=>{
       // expect tum bol skate ho if ki tarha kaam karta hai compare kare deta hai ak value ko durse value se
        expect(formateCurrency(2095)).toEqual('20.95');
    });
    it('work with zero ',()=>{
        expect(formateCurrency(0)).toEqual('0.00');

    });
    it('round up to the nearest cent ', ()=>{
        expect(formateCurrency(2000.5)).toEqual('20.01');
    });

});