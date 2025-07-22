Mini-challenge Front + JS logique

Thème : “Motus !” — Le jeu du mot mystère version simplifié

Un mot caché de 5 lettres est choisi aléatoirement.
L’utilisateur tape un mot dans un champ (input), clique sur “Essayer”,
et voit s’afficher si :
- il y a des lettres en bonne position (🟩),
- des lettres présentes mais mal placées (🟨),
- ou absentes (⬛).

⸻

Objectifs pédagogiques
- Manipuler des Set pour détecter les lettres en double.
- Utiliser une stack ou un tableau pour gérer l’historique.
- Créer une logique de comparaison de string caractère par caractère.
- Structurer un peu de DOM en vanilla JS

⸻

Composants à coder

HTML

<input id="guess" maxlength="5" />
<button id="try">Essayer</button>
<div id="history"></div>

JS
- Tableau history pour stocker les essais.
- Mot secret généré aléatoirement depuis une liste (ex : ["pomme", "plage", "livre"])
- Fonction checkGuess(guess) qui retourne un tableau de feedbacks :
["🟩", "⬛", "🟨", "⬛", "⬛"]
- Affichage progressif des essais dans #history.

⸻

Bonus
- Empêche les mots non-valide avec un Set de mots autorisés.
- Ajoute une limite de 6 essais (comme Wordle).
- Style coloré avec classList.add() au lieu des emojis.
- Permets d’effacer avec # (utilisation du kata 10 cleanText()).
- Intègre un compteur ou un effet de vibration CSS en cas de mauvaise réponse.

⸻

Notions mobilisées

Concept	Appliqué ici
Set	Détection de lettres uniques ou doublons
Array.map()	Transformation du feedback
Boucle for ou for...of	Comparaison des lettres
Object	Fréquence ou mappage des lettres du mot secret
DOM + JS	Interaction utilisateur, rendu HTML dynamique
Stack / historique	Stocker et afficher les essais précédents
