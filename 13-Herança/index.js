class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Faz algum som de animal");
  }
}

class Dog extends Animal {
  run() {
    console.log("Correndo.");
  }
  makeNoise() {
    console.log("Au au au");
  }
}

const dog = new Dog("Cacau");
dog.makeNoise();
dog.run();
