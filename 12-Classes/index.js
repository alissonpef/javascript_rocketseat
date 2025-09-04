class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail() {
    console.log("Email enviado para", this.email);
  }
}

const user = new User("Alisson", "alisson@email.com");
user.sendEmail();
