let username = "Alisson";
let email = "alisson@email.com";
console.log(username);
console.log(typeof username);
console.log('uma string com "aspas duplas" dentro de simples');
console.log("uma string com 'aspas simples' dentro de dupla");
console.log(`Uma string com acento grave permite
    escrever múltiplas linhas e utilizar
    variáveis como username e mostrar
    o valor que tem nela, como ${username}
    `);
console.log(username, email, "teste");

let emptiness;
console.log("O valor é: ", emptiness);
let empty = null;
console.log("O valor é: ", empty);

let age = 1;
console.log(typeof age);
console.log(typeof String(age));
console.log(typeof Boolean(age));
console.log(typeof Number(age));
age = "teste";
console.log(typeof age);
