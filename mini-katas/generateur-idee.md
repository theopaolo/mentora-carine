## Le "Générateur d'Idées Aléatoires" (Focus : API & Valeur immédiate)

**Le Problème Produit :** Parfois, on manque d'inspiration pour une activité. Comment créer un outil ultra-simple qui propose une idée d'activité à faire quand on s'ennuie ?

**Votre Mission :** Utiliser l'API gratuite "Bored API" pour afficher une nouvelle suggestion d'activité à chaque clic sur un bouton.

**Étapes (25 minutes) :**

1. **Phase "Exploration & Produit" (5 min) :**
    - Allez sur le site de la **Bored API** (`boredapi.com`).
    - Regardez la documentation. L'URL à utiliser est `https://www.boredapi.com/api/activity`. Ouvrez-la dans votre navigateur pour voir le format de la réponse (JSON).
    - Décidez de la seule information que vous voulez afficher pour commencer : l'activité elle-même (la clé `"activity"` dans le JSON).
2. **Phase "Code" (20 min) :**
    - Créez un `index.html` avec un bouton "Trouver une idée" et un `<h1>` ou un `<p>` avec un id (ex: `id="idee"`).
    - Dans votre `script.js` :
        - Ciblez le bouton et l'élément de texte.
        - Créez une fonction `async function recupererIdee() { ... }`.
        - À l'intérieur, utilisez `fetch('https://www.boredapi.com/api/activity')` pour appeler l'API.
        - Utilisez `.then(response => response.json())` pour convertir la réponse en JSON.
        - Dans le `.then` suivant, récupérez la donnée (`data.activity`) et mettez-la dans le `textContent` de votre élément de texte.
        - Ajoutez un écouteur d'événement sur le bouton qui appelle votre fonction `recupererIdee`.
        - **Bonus :** Mettez un message de chargement dans le texte pendant que `fetch` travaille.

**Ce que vous apprenez :**

- **Intégrer une API :** Compétence essentielle pour connecter votre application au reste du monde.
- **Créer de la valeur rapidement :** Vous n'avez pas eu à inventer les données, vous avez utilisé une ressource existante pour créer un produit fonctionnel en quelques minutes.
- **Gestion de l'asynchrone :** `fetch` et `async/await` sont au cœur du JavaScript moderne.
