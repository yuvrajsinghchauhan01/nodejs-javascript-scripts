// declare a variable
let firstname = "John";
// print the variable
console.log(firstname);

// re-assign the variable without using let
firstname = 'jonny';
console.log(firstname);

// store number in variable and add them
let num1 = 56;
let num2 = 4;
console.log(num1+num2);

// data type -- number
let num3 = 2;
let num4 = 3.14;
console.log(typeof(num3));
console.log(typeof(num4));

// data type -- string
let Name = 'adam';
let surname = "doe";
console.log(typeof(Name));
console.log(typeof(surname));

// data type -- boolean
let selected = true;
let failed = false;
console.log(typeof(selected));
console.log("type is",typeof(failed));

// data type -- undefined
let unknown = undefined;
console.log(typeof(unknown));

// arithmetic operators
console.log(2+2) // add
console.log(5-2) // subtract
console.log(10%2) // modulus
console.log(1/2) // divide
console.log(2**2) // power

// Comparison Operators ==, !=, >, <, >=, <=, ===
num1 = 4;
num2 = 5;
console.log(num1==num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 != num2);

// Logical operators  &&, ||, !
console.log("Logical operators........")
let myFavoriteNumber = 1;
console.log(myFavoriteNumber > 0 && myFavoriteNumber <=3) // should be True
console.log(myFavoriteNumber < 0 && myFavoriteNumber <=3) // should be False
console.log(myFavoriteNumber > 0 && myFavoriteNumber >=3); // should ne False

// String data type
let company = 'DataSage'
console.log("length of the string is:",company.length)
console.log("indexing...",company.charAt(0)) // D
console.log("indexing...",company.charAt(company.length - 1)) // e
console.log(company.concat(".","AI")) // Datasage.AI
console.log(company.toUpperCase()) // DATASAGE
console.log(company.indexOf("S")) // 4
console.log(company.substring(4)) // Sage:- from index 4 till end because end is not defined
console.log(company.replace("Sage","Mage")) // DataMage

// Arrray data type
let game = ["counter strike", "contra", "mario"]
console.log(game) // ["counter strike", "contra", "mario"]

let mixed = [2.2, true, undefined, game, 3]
console.log(mixed) // [2.2, true, undefined, ["counter strike", "contra", "mario"], 3]
console.log(mixed.length) // 5
console.log(game[1]) // contra
game.push("Adventure Island") // adds the item at the end of th array
console.log(game) // [ 'counter strike', 'contra', 'mario', 'Adventure Island' ]
console.log(game.pop()) // 'Adventure Island' :- removes the last element and can be saved.
console.log(game.indexOf("mario")) // 2 (index)
gameSliced = game.slice(0,2)
console.log(gameSliced) // [ 'counter strike', 'contra' ]

// Object data type
let person = {
    "name": "John Doe",
    "age":56,
    "gender": "Male"
}

console.log(person) // { name: 'John Doe', age: 56, gender: 'Male' }
console.log(person['gender']) // Male
console.log(Object.keys(person)) // [ 'name', 'age', 'gender' ]
allentries = Object.entries(person)
console.log(allentries) // [ [ 'name', 'John Doe' ], [ 'age', 56 ], [ 'gender', 'Male' ] ]
console.log(person.hasOwnProperty("age")) // true