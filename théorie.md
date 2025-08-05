## les boucles 
-> for...of : Idéal pour lire simplement chaque élément d'un tableau.
Exemple : for (let item of arr)

-> for i : À utiliser quand tu as besoin de l'index des éléments ou pour faire une boucle à sauts.
Exemple : for (let i = 0; i < arr.length; i++)

-> for...in : Parfait pour parcourir les clés d'un objet (attention, pas un tableau !).
Exemple : for (let key in obj)

-> .forEach() : Pour appliquer une fonction à chaque élément d'un tableau, sans créer de nouveau tableau.
Exemple : arr.forEach(x => console.log(x))

-> .map() : Pour transformer chaque élément d'un tableau et en créer un nouveau.
Exemple : arr.map(x => x * 2)

-> .filter() : Pour filtrer un tableau et ne garder que les éléments qui remplissent une condition.
Exemple : arr.filter(x => x > 10)