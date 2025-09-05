// KATA 2 : Calculatrice Factorielle Interactive (20min)
// Objectifs : Récursion, fonctions, conditions, boucles, localStorage (historique)

/* ressources:
    - https://fr.javascript.info/recursion
    - https://waytolearnx.com/2019/09/calculer-la-factorielle-dun-nombre-en-javascript.html
*/

// Structure de base à compléter
let history = [];

// TODO 1 : Créer la fonction récursive factorielle
function factorial(n) {
  if(n <= 1) {
    return 1
  }
  return n * factorial(n-1)

  for (let index = 1; index < n; index++) {
    
  }
  // Cas de base : si n <= 1, retourner 1
  // Cas récursif : n * factorial(n-1)
  // Gérer les erreurs (nombres négatifs)
}

// TODO 2 : Créer une fonction pour calculer et stocker
function calculate(number) {
  factorial(number);
  // Appeler factorial(number)
  // Créer un objet résultat : { number, result, timestamp }
  // Ajouter à l'historique
  // Limiter l'historique à 10 entrées max (boucle)
  // Sauvegarder dans localStorage
}

// TODO 3 : Créer une fonction pour afficher l'historique
function displayHistory() {
  // Parcourir history avec une boucle
  // Afficher chaque calcul
  // Condition : afficher différemment si erreur
}

// TODO 4 : Créer une fonction pour charger l'historique
function loadHistory() {
  // Récupérer depuis localStorage
  // Parser le JSON ou initialiser tableau vide
}

// TODO 5 : Créer une fonction de recherche dans l'historique
function findInHistory(searchNumber) {
  // Parcourir history avec une boucle
  // Condition : trouver les calculs pour ce nombre
  // Retourner le résultat ou null
}

// Tests à faire fonctionner :
loadHistory();
calculate(5);    // 120
calculate(0);    // 1
calculate(-1);   // Erreur
calculate(7);    // 5040
displayHistory();
console.log(findInHistory(5)); // Doit trouver le résultat
