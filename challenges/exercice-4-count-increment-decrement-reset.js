
/* -------------------- Exercice 4 ------------------------ */

// Challenge: 
// Create an object representing a counter with methods to increment, 
// decrement, and reset the count. Use this to access and modify the count property.

const userInfo = {
  nom: "Alice",
  age: 28,
  ville: "Paris",

  presentation : function() {
    return `Bonjour je m'appel ${this.nom}, je vie à ${this.ville}, et j'ai ${this.age} ans`
  }

};

// console.log(userInfo.presentation())

// Pour la prochaine fois, faire la même mais de façon dynamique avec un tableau d'users.

const counter = {
  
  // propriété privée
  count: 0,

  // des methodes lié à l'objet
  increment: function() {
    // Your code here
    this.count++
    return this.count;
  },
  
  decrement: function() {
     this.count--
    return this.count;
  },

  reset: function() {
    // Your code here
    this.count = 0;
    return this.count;
  }
};

counter.increment();
counter.increment();
console.log(counter.count); // Should be 2
counter.decrement();
console.log(counter.count); // Should be 1
counter.reset();
console.log(counter.count); // Should be 0

