// var student = {
//     id: 'CE16009',
//     name: 'Rahabul',
//     blood_grp: 'A+',
//     mark: 23,
//     phone: 347698
// };




const phones = [
    { name: 'samsung', price: 90000, camera: 20, ram: 16, rom: 128 },
    { name: 'xaumi', price: 12000, camera: 20, ram: 8, rom: 128 },
    { name: 'huawei', price: 28000, camera: 30, ram: 16, rom: 128 },
    { name: 'nokia', price: 9000, camera: 8, ram: 4, rom: 8 },
    { name: 'htc', price: 18000, camera: 12, ram: 8, rom: 128 },
    { name: 'iPhone', price: 110000, camera: 64, ram: 16, rom: 256 }
]

// console.log(phones[0].price);

let cheapestPrice = phones[0];
// for (let i = 0; i < phones.length; i++) {
//     if (phones[i].price < cheapestPrice.price) {
//         cheapestPrice = phones[i];
//     }
// }
for (const phone of phones) {
    if (phone.price < cheapestPrice.price) {
        cheapestPrice = phone;
    }
}
console.log(cheapestPrice);


