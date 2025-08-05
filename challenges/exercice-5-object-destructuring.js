
/* -------------------- Exercice 5 ------------------------ */

// ### Object Destructuring
// **Explanation:** Object destructuring allows you to extract properties from objects and bind them to variables.
// **Exercise:** Use object destructuring to extract the make and model from the car object into separate variables.
// https://fr.javascript.info/destructuring-assignment
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring
// https://fr.javascript.info/rest-parameters-spread

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

// on doit avoir const make = "Toyota"
// Your destructuring code here
let {make, model, year} = car;

console.log(make);  // Should print: "Toyota"
console.log(model); // Should print: "Corolla"