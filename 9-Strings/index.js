let name = "Alisson";
let password = 12345;
let message = "Estou estudando JavaScript";
let textWithSpace = "    Texto de exemplo   ";
let text = "Estudar, Aprender, Praticar";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);

console.log(password.toString().length);

console.log(message);
console.log(message.replace("JavaScript", "Programação"));

console.log(message.slice(0, 5));
console.log(message.slice(-11));

console.log(textWithSpace);
console.log(textWithSpace.trim());

console.log(text);
let separete = text.split(",");
console.log(separete);
let joined = separete.join(" - ");
console.log(joined);

console.log(message.indexOf("JavaScript"));
console.log(message.toLocaleLowerCase().includes("javascript"));
