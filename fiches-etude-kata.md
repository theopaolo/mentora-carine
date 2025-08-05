/ Fiches d'étude :

Fiche #1 – Set en JavaScript

Définition :
Un Set est une collection de valeurs uniques.

Propriétés clés :
- new Set([1, 2, 2, 3]) ➜ Set(3) {1, 2, 3}
- .size donne le nombre d’éléments uniques.
- Un Set ne garde pas l’ordre des doublons.

Exemples :

```javascript
const s = new Set("hello");
console.log(s); // Set { 'h', 'e', 'l', 'o' }
console.log(s.size); // 4

// Cas d’usage typique :
// - Éliminer les doublons d’un tableau :
const noDupes = [...new Set(arr)]
// - Vérifier s’il y a des doublons dans une string :
new Set(str).size !== str.length
```

⸻

Fiche #2 – Stack (Pile)

Définition :
Une pile fonctionne sur le principe “Last In, First Out” (LIFO).

Méthodes :
- push(val) ➜ ajoute en haut de la pile
- pop() ➜ retire le dernier élément ajouté

Exemple :

```js
const stack = [];
stack.push('a');
stack.push('b');
stack.pop(); // ➜ 'b'
```

Cas d’usage :
- Vérification de parenthèses imbriquées.
- Simuler un éditeur de texte (ex : "#" = backspace).

⸻

Fiche #3 – Boucles

Types principaux :
- for ➜ classique avec index
- for...of ➜ pour tableaux, strings (itérables)
- for...in ➜ pour objets (clés)

Exemples :

for (let i = 0; i < arr.length; i++) { ... }
for (let item of arr) { ... }
for (let key in obj) { ... }

⸻

Fiche #4 – Objet en tant que dictionnaire

Structure :
```js
const obj = { a: 1, b: 2 };
obj["c"] = 3;
```

Lecture/Écriture :
- Lire ➜ obj["a"] ou obj.a
- Écrire ➜ obj["d"] = 4

Astuce pour compter des éléments :

const count = {};
for (let char of str) {
  count[char] = (count[char] || 0) + 1;
}


⸻

Fiche #5 – Méthodes de tableau utiles

Méthode	But	Exemples
.map()	Transformer chaque élément	arr.map(x => x * 2)
.filter()	Garder certains éléments	arr.filter(x => x > 0)
.includes()	Vérifie si un élément est présent	arr.includes("a")
