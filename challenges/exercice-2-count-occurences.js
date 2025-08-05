/* -------------------- Exercice 2 ------------------------ */

/* compter le nombre d'occurance d'un élement dans un tableau 
 output { rose : 2, tulipe: 1, lavante : 2, iris: 1}*/

const fleurs = ['rose', 'rose', 'tulipe', 'lavande', 'iris', 'lavande'];

function countFlowers() {
  let count = {};
  fleurs.forEach((flower) => {
    count[flower] = (count[flower] || 0) + 1;
    console.log('flower', flower)
    console.log('count', count)
    console.log('count[flower]', count[flower])
  })
  return count
}

console.log(countFlowers(fleurs)); // avoir le nombre de fois qu'une fleur est écrite dans le tableau

