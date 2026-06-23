let age = 16;

// Condição ? Se verdadeiro : Se falso
console.log(age >= 18 ? "Você pode dirigir." : "Você não pode dirigir.");

if (age <= 16) {
  console.log("Você não pode dirigir.!");
} else if (age < 18) {
  console.log("Você ainda pode dirigir.!");
} else {
  console.log("Você pode dirigir.!");
}

let option = 1;

switch (option) {
  case 1:
    console.log("Caso 1");
    break;
  case 2:
    console.log("Caso 2");
    break;
  case 3:
    console.log("Caso 3");
    break;
  default:
    console.log("Caso desconhecido");
}
