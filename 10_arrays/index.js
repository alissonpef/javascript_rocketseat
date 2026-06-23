let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("Watermelon");
fruits.unshift("Grape");
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits);

let position = fruits.indexOf("Orange");
console.log(fruits[position]);

fruits.splice(position, 1);
console.log(fruits);

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Lemon"));
