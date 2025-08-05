/* -------------------- Exercice 1 ------------------------ */

/* Transformer une objet en tableau 

output 
[
  ["nom", "Alice"],
  ["age", 28],
  ["ville", "Paris"]
] */

const user = {
  nom: "Alice",
  age: 28,
  ville: "Paris"
};

const userArray = Object.entries(user); // ça permet après de faire des méthodes de tableau

console.log(userArray);