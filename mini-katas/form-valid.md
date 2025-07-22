## Kata 3 : Le "Validateur de Champ de Formulaire" (Focus : Prototypage & Logique métier)

**Le Problème Produit :** Les utilisateurs font souvent des erreurs en remplissant des formulaires (ex: un nom d'utilisateur trop court). Comment leur donner un retour en temps réel pour qu'ils puissent corriger leur saisie immédiatement ?

**Votre Mission :** Créer un champ de texte qui vérifie en direct si le nom d'utilisateur respecte une règle simple (ex: plus de 5 caractères) et affiche un message d'aide.

**Étapes (20 minutes) :**

1. **Phase "Règles métier & Design" (5 min) :**
    - Définissez la règle : "Le nom d'utilisateur doit contenir au moins 6 caractères."
    - Comment communiquer cette règle à l'utilisateur ?
        - Un petit texte sous le champ de saisie.
        - Initialement, il est gris.
        - Si la règle n'est pas respectée, il passe au rouge.
        - Si la règle est respectée, il passe au vert.
2. **Phase "Code" (15 min) :**
    - Dans `index.html`, créez un `<input type="text">` et un petit `<p>` juste en dessous pour le message d'aide.
    - Dans `script.js` :
        - Ciblez l'input et le paragraphe.
        - Ajoutez un écouteur d'événement sur l'input, mais cette fois pour l'événement `"input"`. Cet événement se déclenche à chaque fois que l'utilisateur tape une lettre.
        - Dans la fonction de l'événement :
            - Récupérez la valeur actuelle de l'input (`input.value`).
            - Vérifiez sa longueur (`input.value.length`).
            - Utilisez une condition `if` :
                - Si la longueur est inférieure à 6, changez le texte du paragraphe en "Au moins 6 caractères requis" et changez sa couleur en rouge (via une classe CSS).
                - Sinon, changez le texte en "Nom d'utilisateur valide" et sa couleur en vert.

**Ce que vous apprenez :**

- **Logique métier :** Vous avez traduit une "règle business" en code.
- **Feedback en temps réel :** Vous améliorez l'expérience en guidant l'utilisateur au lieu de le bloquer avec une erreur à la fin.
- **Événements du DOM :** Vous utilisez un événement (`"input"`) plus adapté à ce cas d'usage que le simple `"click"`.
