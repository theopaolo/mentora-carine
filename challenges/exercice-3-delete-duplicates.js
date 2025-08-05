/* -------------------- Exercice 3 ------------------------ */

// Suprimer les doublon
const arrdechiffre = [1, 2, 2, 3, 3, 3, 4, 1, 5, 6, 9, 9]

function deleteOccurences(arr) {
  // on peut utiliser un .filter() pour filtrer les doublons
  // on peut utiliser un .splice() pour ajouter, remplacer ou supprimer les éléments d'un tableau
  // on peut aussi utiliser .includes() et peut-être .reduce()?
  let arraySansDoublons = []
  arr.forEach((chiffre) => {
    if(!arraySansDoublons.includes(chiffre)) {
      arraySansDoublons.push(chiffre)
    }
  })
  return arraySansDoublons;
}

console.log(deleteOccurences(arrdechiffre))

// Version 2, en utilisant Set(). https://fr.javascript.info/map-set#set


