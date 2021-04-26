//1. GenBuzz
let myNumber = 3;
// myNumber = 15;
// myNumber = 4;
// myNumber = 53;
// myNumber = 55;
// myNumber = 33;
// myNumber = 100;
// myNumber = 131;
// myNumber = 'number';

// if(isNaN(myNumber)){
//     console.log('This is not a number');
// } else if(myNumber % 3 === 0 && myNumber % 5 === 0){
//     console.log('GenBuzz');
// } else if(myNumber % 3 === 0){
//     console.log('Gen');
// } else if(myNumber % 5 === 0) {
//     console.log('Buzz');
// }  else{
//     console.log(myNumber);
// }

// 2. E-Commerce Item List

let itemPrice = 'Shoes';
// itemPrice = 'Jeans';
// itemPrice = 'Hats';
// itemPrice = 'Socks';
// itemPrice = 'Shirts';

switch(itemPrice){
    case 'Shoes':
        console.log('Shoes are $50');
        break;
    case 'Jeans':
        console.log('Jeans are $25');
        break;
    case 'Hats':
        console.log('Hats are $12');
        break;
    case 'Socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid Item');
        break;
}

// 3. Random number between 50 and 100

console.log(Math.floor(Math.random() * 50) + 50);