## Le "Clarificateur de Bouton" (Focus : UX & Prise de décision)

**Le Problème Produit :** Sur de nombreux sites, on clique sur un bouton et on ne sait pas si quelque chose se passe. L'utilisateur clique alors plusieurs fois, ce qui peut causer des bugs (par exemple, envoyer un formulaire 4 fois).

**Votre Mission :** Créer une petite page web avec un bouton qui simule l'envoi de données. Lorsque l'on clique, le bouton doit donner un retour visuel immédiat à l'utilisateur pour lui faire comprendre qu'une action est en cours et qu'il doit patienter.

**Étapes (20 minutes) :**

1. **Phase "Design" (5 min) :**
    - Prenez une feuille de papier ou ouvrez un éditeur de texte simple.
    - Décrivez ce que l'utilisateur doit voir. Quelles sont les 3 étapes de vie du bouton ?
        1. État initial (ex: "Envoyer ma demande")
        2. État de chargement (ex: le texte change pour "Envoi en cours...", une icône tournante apparaît, le bouton est désactivé).
        3. État de succès (ex: le texte devient "Envoyé !", le bouton devient vert pendant 2 secondes, puis redevient normal).
2. **Phase "Code" (15 min) :**
    - Créez un fichier `index.html` avec un bouton.
    - Créez un fichier `style.css` pour donner un style de base au bouton.
    - Dans un fichier `script.js` :
        - Ciblez le bouton avec `document.querySelector`.
        - Ajoutez un écouteur d'événement au clic (`addEventListener`).
        - Dans la fonction de clic :
            - Désactivez immédiatement le bouton (`button.disabled = true;`).
            - Changez son texte (`button.textContent = 'Envoi en cours...';`).
            - Utilisez `setTimeout` pour simuler un temps de chargement de 2 secondes.
            - Après ces 2 secondes :
                - Changez le texte en "Envoyé !" et ajoutez une classe CSS pour le rendre vert.
                - Utilisez un autre `setTimeout` de 2 secondes pour remettre le bouton à son état initial (texte et couleur) et le réactiver.

**Ce que vous apprenez :**

- **Penser à l'utilisateur :** Vous ne codez pas juste un bouton, vous concevez une expérience qui réduit la frustration.
- **Gestion des états :** Vous manipulez l'état d'un élément de l'interface, une compétence fondamentale en front-end.
- **Prototypage rapide :** En 20 minutes, vous avez résolu un problème d'UX courant.
