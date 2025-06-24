import { formateCurrency } from "../../script/utils/money.js";


console.log('Test Suite : formate Currency ');

console.log('convert the digit into cents');
if(formateCurrency(2095) === '20.95'){
    console.log('passed');
}
else{
    console.log('failed');
}
console.log('work with zero');
if(formateCurrency(0) === '0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}
console.log('round up the nearest cent')
if(formateCurrency(2000.5) === '20.01'){
    console.log('passed');
}
else{
    console.log('failed');
}