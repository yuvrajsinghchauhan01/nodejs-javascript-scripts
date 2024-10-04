// Branching statements
number = 12
if (number % 2 == 0){
    console.log("number is even")
}
else {
    console.log("number is odd")
}

// Loops :- for
let sum = 0
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("Sum is:",sum) // Sum is: 15

// while loop
let factorial = 1
counter = 5
while (counter > 0) {
    factorial *= counter
    counter -= 1
}
console.log("Factorial is:",factorial) // Factorial is: 120

// for-in loop
let numbers = [1, 2, 3, 4, 5];
let add = 0
for (let num in numbers) {
    add = add + num
}
console.log("add is:",add) // not working i dont know why

// loop control -- break
let SUM = 0;
for (let i=1; i<5; i++){
    if (i==4){
        break;
    }
    SUM+=i;
}
console.log(SUM); // 1 + 2 + 3 = 6

// continue

let FACT = 1;
for (let i=5; i>=1; i--){
    if (i==4){
        continue;
    }
    FACT*=i;
}
console.log(FACT); // 5 * 3 * 2 * 1

// Functions
function calculateArea(width, height) {
    let area = width * height
    return area;
}
let result = calculateArea(12, 8)
console.log("Area is:",result)

let item1 = {name:"shoes", price:20, quantity:2}
function calculateTotalPrice(item){
    let totalPrice = item.price * item.quantity
    console.log("Total price is: "+ totalPrice)
}
calculateTotalPrice(item1)

// Local vs global scope

// console.log(totalPrice) 
// undefined why? beacuse it is initialised inside a scope({})

// return
function calculateTotalPrice2(itemslist, discountPct=0) {
    let totalPrice = 0;
    for (let index in itemslist) {
        totalPrice += itemslist[index].price * itemslist[index].quantity;
    }
    let discountAmount = totalPrice * discountPct / 100
    let discountedPrice = totalPrice - discountAmount
    return {totalPrice, discountAmount, discountedPrice}
}

let cart = [
    { name: "shoes", price: 20, quantity: 2 },
    { name: "tie", price: 40, quantity: 1 }
];

// let Result = calculateTotalPrice2(cart);
let Result = calculateTotalPrice2(cart,10);
console.log("cart total price:", Result);


for (let i in cart){
    console.log(i)
}


