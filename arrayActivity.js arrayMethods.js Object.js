
let favSingers = ["Adele", "Taylor Swift", "Beyoncé"];
console.log(favSingers[0]); // Output: "Adele"
let favNumbers = [7, 11, 23, 42];
let mixedArr = ["string", ["otherarray"], 123, true];
console.log(mixedArr[0]); // Output: "string"
console.log(mixedArr[1]); // Output: ["otherarray"]
console.log(mixedArr[2]); // Output: 123
console.log(mixedArr[3]); // Output: true

for (let i = 0; i < mixedArr.length; i++) {
  console.log(mixedArr[i]);
}

let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let result = arr1.concat(arr2);
console.log(result); // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); // Output: [4, 5, 1, 2, 3]
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let removedElement = fruits.pop();
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango"]
console.log(removedElement); // Output: "Kiwi"
let array2 = [1, 2, 3];
let removedElement = array2.shift();
console.log(array2); // Output: [2, 3]
console.log(removedElement); // Output: 1
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Kiwi", "Mango", "Orange"]
let fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
let newFruits = fruits.slice(1, 3);
console.log(newFruits); // Output: ["Banana", "Kiwi"]

let favSingers = ["Adele", "Taylor Swift", "Beyoncé"];
console.log(favSingers[0]); // Output: "Adele"
let favNumbers = [7, 11, 23, 42];
let mixedArr = ["string", ["otherarray"], 123, true];

console.log(mixedArr[0]); // Output: "string"
console.log(mixedArr[1]); // Output: ["otherarray"]
console.log(mixedArr[2]); // Output: 123
console.log(mixedArr[3]); // Output: true
REFERENCE:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
