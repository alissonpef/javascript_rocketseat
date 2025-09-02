console.log("Soma: ", 12 + 2);
console.log("subtração: ", 12 - 2);
console.log("Multiplicação: ", 12 * 2);
console.log("Divisão: ", 12 / 2);
console.log("Resto da divisão: ", 12 / 2);
console.log("Exponencial: ", 12 ** 2);

let number = 10;
number += 10;
number -= 10;
number *= 1;
number /= 1;
number %= 1;
number **= 1;

console.log("Incremento após: ", number++);
console.log("Incremento antes: ", ++number);
console.log("Decremento após: ", number--);
console.log("Decremento antes: ", --number);

const one = 1;
const oneString = "1";

console.log('1 é igual a "1" usando == ?', one == oneString);
console.log('1 é estritamente igual a "1" usando === ?', one === oneString);
console.log('1 é diferente a "1" usando != ?', one != oneString);
console.log('1 é estritamente diferente a "1" usando !== ?', one !== oneString);

let email = true;
let password = false;

console.log(email && password);
console.log(email || password);
console.log(!password);
