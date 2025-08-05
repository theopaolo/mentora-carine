/* -------------------- Exercice 6 ------------------------ */

// # **Parenthèses valides**

// Écris une fonction `isValid()` qui prend en paramètre une chaîne de caractère `str` contenant uniquement les caractères `'('`, `')'`, `'{'`, `'}'`, `'['` et `']'`, et qui retourne si cette chaîne est **valide** ou non.

// Une chaîne est considérée comme valide si elle respecte **toutes les règles suivantes** :

// 1. Les parenthèses ouvrantes doivent être **fermées par le même type de parenthèse**.
// 2. Les parenthèses doivent être **fermées dans le bon ordre**.
// 3. Chaque parenthèse fermante doit avoir **une parenthèse ouvrante correspondante du même type**.

// Pour information, `str` ne contient **que** les caractères : `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`.

// const str = "()";
// isValid(str);
// // retourne `true`

// const str = "()[]{}";
// isValid(str);
// // retourne `true`

// const str = "(]";
// isValid(str);
// // retourne `false`

// const str = "([])";
// isValid(str);
// // retourne `true`

// Le concoept de ce kata est :  STACK – Paires imbriquées (ex : parenthèses)
// Objectif : vérifier si les parenthèses sont correctement ouvertes/fermées.
// Stack (Pile)

// Définition :
// Une pile fonctionne sur le principe “Last In, First Out” (LIFO).

// Méthodes :
// - push(val) ➜ ajoute en haut de la pile
// - pop() ➜ retire le dernier élément ajouté

// Exemple :

// const stack = [];
// stack.push('a');
// stack.push('b');
// stack.pop(); // ➜ 'b'

// Cas d’usage :
// - Vérification de parenthèses imbriquées.
// - Simuler un éditeur de texte (ex : "#" = backspace).

/* Ressources consultées
  -https://buzut.net/la-puissance-des-regex/ => REGEX
  -https://github.com/arturnalbandyan/stack-js/blob/master/BalancedParentheses.js
  -https://medium.com/@nalbandean/stack-data-structure-in-javascript-a-simple-guide-to-lifo-7034c8824184
  -chatGPT 
*/

/* ------------------------------Your code here------------------------------------------- */

// function stringToArray(string) {
//   const strArray = string.split("");
//   // console.log(strArray)
//   return strArray
// }

function isValidString(string) {
  const regex = /^[\[\]{}()]+$/;
  return regex.test(string);
  // ^ et $ ancrent le début et la fin => toute la chaîne doit correspondre
  // [] accepte les caractères spécifiés
  // + signifie "au moins un" (ou * si tu acceptes les chaînes vides)
}

// const stringValid = isValidString("()");
// console.log(stringValid);


function isValid(str) {
  if (!isValidString(str)) 
    return console.log("String is not valid")

    let strArray = []; // On crée une pile (tableau vide) pour stocker les symboles ouvrants
    // Une pile est une structure où on ajoute (push) des éléments au bout, et on retire (pop) le dernier élément ajouté.
    for (let char of str) { // On parcourt chaque caractère de la chaîne
      if (char === '(' || char === '{' || char === '[') { 
        strArray.push(char); // Si le caractère est ouvrant, on le met dans la pile, càd qu'on attendra plus tard une parenthèse fermante correspondante
      } else if (char === ')' || char === '}' || char === ']') { // Si on tombe sur une parenthese fermante
        if (strArray.length === 0) return false; // Si la chaine est vide, on ferme sans avoir ouvert => donc invalide
        let last = strArray.pop(); // On récupère le dernier ouvrant de la pile, on retire le dernier caractère ouvrant ajouté dans la pile (le plus récent)
        if (
          (char === ')' && last !== '(') ||
          (char === '}' && last !== '{') ||
          (char === ']' && last !== '[')
        ) {
          return false; // La fermeture ne correspond pas à l’ouverture => invalide
        } // On compare la parenthèse fermante (char) avec le dernier ouvrant (last) récupéré. Si ce ne sont pas des paires correspondantes (par exemple, } ne peut pas fermer (), la chaîne est invalide.
      }
    }
    return true;
  }


console.log(isValid("{}"));
console.log(isValid("{)"));
console.log(isValid("{ab}"));
// console.log(stringToArray("Bonjour"));
