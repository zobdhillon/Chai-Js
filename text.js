// console.log("Hello World");  

// let newDate = new Date();

// console.log(newDate.toJSON());
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toLocaleDateString());

// for (let i = 0; i <= 10; i++) {
//    console.log(`outer value is: ${i}`);
//    for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//    }
// }

const map = new Map();
map.set('USA', "United States of America")
map.set('SA', "United States of America")
map.set('A', "United States of America")

// for (const key in map) {
//     console.log(key);
//  }

const shoppingCart = [
    {
        price: 2999,
    },
    {
        price: 3999,
    },
    {
        price: 4999,
    },
    {
        price: 5999,
    }
]

const priceToPay = shoppingCart.reduce((acc, Item) => acc + Item.price, 0);
console.log(priceToPay)