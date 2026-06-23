const user = {
  email: "alisson@email.com",
  age: 23,
  name: {
    first_name: "Alisson",
    surname: "Pereira",
  },
  addres: {
    street: "Rua X",
    number: 1234,
    city: "Santa Catarina",
  },

  messageAddres: () => {
    console.log(user.addres.city);
  },

  messageUser: function () {
    console.log(`Olá ${this.name.first_name}`);
  },
};

user.messageAddres();
user["messageUser"]();
user.name.first_name = "Vitoria";
user.messageUser();

console.log(user?.description);

let pictureAlisson = "alisson.png";
console.log(pictureAlisson ?? "default.png");
let pictureVitoria = null;
console.log(pictureVitoria ?? "default.png");
