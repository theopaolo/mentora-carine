
La théorie : https://theogoedert.notion.site/Guide-des-Patterns-d-Algorithmique-2003324cc3d78077ad41c1f0e4b843f0?source=copy_link

Quiz structure de donnée
## Instructions

Pour chaque situation, choisis la structure de données ou la méthode la plus appropriée. Une seule réponse correcte par question.

---

### 1. **Tu dois trouver le premier nombre qui apparaît deux fois dans un tableau.**

- a) Map ✅​
- b) Set
- c) Stack

### 2. **Tu veux créer un système d'annulation (undo) pour un éditeur de texte.**
<!-- Je ne sais pas -->
- a) Queue
- b) Stack
- c) Set

Bonne réponse : b) Stack ✅
Explication : Pour un système d'annulation, on utilise une pile (Stack) car on veut annuler les actions dans l'ordre inverse (LIFO - Last In, First Out).

### 3. **Tu dois associer chaque étudiant à sa note d'examen.**

- a) Array
- b) Set ✅​
- c) Map

Bonne réponse : c) Map ✅
Explication : Pour associer des clés (étudiants) à des valeurs (notes), on utilise une Map, pas un Set qui ne stocke que des valeurs uniques.

### 4. **Tu veux garder seulement les nombres positifs d'un tableau.**

- a) .map()
- b) .filter() ✅​
- c) .forEach()

### 5. **Tu dois vérifier si deux mots sont des anagrammes en comptant leurs lettres.**

- a) Set
- b) Object/Map ✅​
- c) Stack

### 6. **Tu parcours deux tableaux triés pour les fusionner en un seul.**

- a) for...of sur les deux
- b) .forEach() imbriqués
- c) for (i) avec deux indices ✅​

### 7. **Tu veux stocker une liste de tags uniques pour un article de blog.**

- a) Array ✅​
- b) Set
- c) Map

Bonne réponse : b) Set ✅
Explication : Pour garantir l'unicité des tags, un Set est plus approprié qu'un Array.

### 8. **Tu dois calculer la somme totale d'un tableau de nombres.**

- a) .filter()
- b) .map()
- c) .reduce() ✅​

### 9. **Tu implémente une file d'attente "premier arrivé, premier servi".**

- a) Stack
- b) Queue (Array avec shift/push) ✅​
- c) Set

### 10. **Tu veux transformer chaque nom en majuscules dans un tableau.**

- a) .forEach() ✅​
- b) .map()
- c) for...in

Bonne réponse : b) .map() ✅
Explication : Pour transformer chaque élément et créer un nouveau tableau, .map() est la méthode appropriée. .forEach() ne retourne rien.

### 11. **Tu dois détecter un cycle dans une liste chaînée.**

- a) Set
- b) Stack
- c) Queue

### 12. **Tu veux créer un cache qui associe des URLs à leurs réponses.**

- a) Set
- b) Array
- c) Map

Bonne réponse : c) Map ✅
Explication : Pour associer des URLs (clés) à leurs réponses (valeurs), une Map est la structure idéale.

### 13. **Tu parcours un objet pour afficher toutes ses propriétés.**

- a) for...of
- b) for...in ✅​
- c) .map()

### 14. **Tu dois valider qu'une expression mathématique a ses crochets bien équilibrés : `[2 * (3 + 4)]`**

- a) Map
- b) Stack ✅​
- c) Set

### 15. **Tu veux compter combien de fois chaque caractère apparaît dans une chaîne.**

- a) Set
- b) Stack
- c) Object/Map ✅​


----

Hey ! Bien joué =D, 10/15 !

Les erreurs à corriger sont :
Question 2 → Stack (pour le système d'annulation)
Question 3 → Map (pour associer étudiant-note)
Question 7 → Set (pour les tags uniques)
Question 10 → .map() (pour transformer un tableau)
Question 12 → Map (pour le cache URL-réponse)