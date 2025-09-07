// Tipagem explicita
let username: string;
let num: number;
let bool: boolean;

username = "Alisson";
num = 23;
num = 23.6;
bool = true;

// Inferência de Tipos
let message = "Oi, tudo bem?";
message = "Teste";

// Tipo Any
let text: any;
text = "Oi, tudo bem?";
text = 123;

// Funções
function sum(num1: number, num2: number): void {
  console.log(num1 + num2);
}
sum(2, 2);

// objetos
let user: { name: string; age: number; avatar?: string } = {
  name: "Alisson",
  age: 23,
};

let response: string | null;
response = "Teste";
response = null;

// Tipagem personalizada com Interface
interface IBaseProduct {
  price: number;
}

interface Product1 extends IBaseProduct {
  id: number;
  name: string;
}

let product1: Product1 = { id: 1, name: "Teclado", price: 500 };

// Tipagem personalizada com Type
type TBaseProduct = {
  price: number;
};

type Product2 = TBaseProduct & {
  id: number;
  name: string;
};

let product2: Product2 = { id: 1, name: "Teclado", price: 500 };

// Asserção de Tipos
let userResponse = {} as Product2;
userResponse.id;

// Restringir valores
type Size = "small" | "medium" | "large";

let size: Size;
size = "small";
