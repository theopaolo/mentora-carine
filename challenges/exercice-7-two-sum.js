/* -------------------- Exercice 7 ------------------------ */

// 1. Two Sum (Hash Map or Sliding Window)
// Prompt: Given an array of numbers and a target, return indices of the two numbers that add up to the target.
// Input: [2,7,11,15], target = 9
// Output: [0,1]
// Why: Classic for testing hash maps and basic logic

// Deux sommes (Hash Map)
// Énoncé : Étant donné un tableau de nombres et une cible, retourner les indices des deux nombres dont la somme est égale à la cible.
// Entrée : [2,7,11,15], cible = 9
// Sortie : [0,1]
// Pourquoi : Classique pour tester les tables de hachage et la logique de base

/* Ressources consultées
    - https://medium.com/@lelianto.eko/hashmap-in-ja-3a5c03a8febc
    - https://javascript.developpez.com/tutoriels/javascript/linking_hash_map/
*/



const array = [2,7,11,15]

function twoSum(arr, target) {
    for(let iterator = 0; iterator < arr.length; iterator+=1) {
        // console.log(arr[iterator])
        for (let y = iterator+1; y < arr.length; y++) {
            // console.log(array[iterator] + array[y])
            if(array[iterator] + array[y] === target) {
                return console.log(iterator, y)
            }
        }
    }
}

// twoSum(array, 26)

function test(arr) {
    arr.forEach(element => {
       return console.log(element + 1) 
    });
}

test(array)