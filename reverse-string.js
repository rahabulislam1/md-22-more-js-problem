// let myString = 'Rahabul Islam';
// let letter = '';
// for (let i = 0; i < myString.length; i++) {
//     letter = myString[i] + letter;
// }
// console.log(letter);

function getReverseString(myString) {
    let reverse = '';
    for (const letter of myString) {
        reverse = letter + reverse;
    }
    // console.log(letter);
    return reverse;
}

let myString = 'Rahabul Islam';
let reverseString = getReverseString(myString);
console.log(reverseString);