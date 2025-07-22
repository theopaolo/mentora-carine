let history = [];

let wordstoGuess = [
  "chaleur",
  "pluie",
  "soleil",
  "vent",
  "neige",
  "orage",
  "nuage",
  "brouillard",
  "tempête",
  "arc-en-ciel",
];

let currentWord = "";

const maxAttempts = 6;
const wordInput = document.getElementById("word-input");
const guessButton = document.getElementById("guess-button");
const historyElement = document.getElementById("history");

//  tableau de feedbacks ["🟩", "⬛", "🟨", "⬛", "⬛"]
function checkWord(word) {
  if (word.length !== currentWord.length) {
    return { valid: false, feedback: [] };
  }

  let feedback = [];
  let currentWordArray = currentWord.split("");
  let wordArray = word.split("");

  // Check for correct letters in the correct position
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === currentWordArray[i]) {
      feedback.push("🟩");
      currentWordArray[i] = null; // Mark as checked
      wordArray[i] = null; // Mark as checked
    } else {
      feedback.push("⬛");
    }
  }

  // Check for correct letters in the wrong position
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== null && currentWordArray.includes(wordArray[i])) {
      feedback[i] = "🟨";
      currentWordArray[currentWordArray.indexOf(wordArray[i])] = null; // Mark as checked
    }
  }

  return { valid: true, feedback };
}

function gameStart() {
  currentWord = wordstoGuess[Math.floor(Math.random() * wordstoGuess.length)];
  console.log("Mot à deviner:", currentWord); // For debugging purposes
  history = [];
  wordInput.value = "";
  historyElement.innerHTML = "";
}

guessButton.addEventListener("click", () => {
  const guessedWord = wordInput.value.toLowerCase().trim();

  if (guessedWord === "") {
    alert("Veuillez entrer un mot.");
    return;
  }

  if (history.length >= maxAttempts) {
    alert("Vous avez atteint le nombre maximum de tentatives.");
    return;
  }

  const result = checkWord(guessedWord);
  if (!result.valid) {
    alert("Mot trop court ou trop long !");
    return;
  }

  history.push({ word: guessedWord, feedback: result.feedback });

  // Display the history
  historyElement.innerHTML = history
    .map((entry) => `<div>${entry.word}: ${entry.feedback.join(" ")}</div>`)
    .join("");

  wordInput.value = "";

  // Check if the word is correct
  if (guessedWord === currentWord) {
    alert("Félicitations ! Vous avez trouvé le mot !");
    // Optionally, start a new game
    // startNewGame();
  } else if (history.length >= maxAttempts) {
    alert(
      `Désolé, vous avez épuisé vos tentatives. Le mot était "${currentWord}".`
    );
    // Optionally, start a new game
    // startNewGame();
  }
});
