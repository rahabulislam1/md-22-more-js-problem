const cart = [
    { name: 'iphone', price: 80000, quantity: 1 },
    { name: 'charger', price: 4500, quantity: 1 },
    { name: 'ear-phone', price: 7000, quantity: 5 },
    { name: 'cable', price: 500, quantity: 3 },
    { name: 'HDMI', price: 1500, quantity: 2 }
]
let sum = 0;
for (const product of cart) {
    var totalPrice = product.price * product.quantity;
    sum = sum + totalPrice;
}
// for (let i = 0; i < products.length; i++) {
//     sum = sum + products[i].price;
// }
console.log(sum);