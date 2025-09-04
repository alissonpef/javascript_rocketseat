let execute = true;
let number = 5;
const person = {
  first_name: "Alisson",
  surname: "Pereira",
  age: 23,
  email: "alisson@email.com",
};

while (execute) {
  if (number != 0) {
    console.log("Laço de repetição While:", number);
    number--;
  } else {
    execute = false;
  }
}

do {
  console.log("Laço de repetição Do While:", number);
} while (number != 0);

for (i = 0; i <= 5; i++) {
  console.log("Laço de repetição For:", i);
}

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}
