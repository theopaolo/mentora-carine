// Mini Todo List
// Objectifs : Fonctions, conditions, tableaux, localStorage, objets


// Structure de base à compléter
let todos = [];

// TODO 1 : Créer une fonction pour ajouter une tâche
function addTodo(text) {
    let id = todos.length + 1;
    
    let todo = {
      id: id,
      text: text,
      done: false,
      created_at: new Date(-24 * 3600 * 1000),
    }

    todos.push(todo)
    // console.log(id)
    // console.log('length', todos.length)

    console.log(todos)
  
    // Créer un objet todo avec : id, text, done, createdAt
  // L'ajouter au tableau todos
  // Sauvegarder dans localStorage
}

// TODO 2 : Créer une fonction pour marquer comme terminé
function toggleTodo(id) {
    const todo = todos.find((ID) => ID = id);
    console.log(todo)

    todo.done = true;

    // console.log(todos)
  // Trouver la tâche par son id
  // Inverser son statut done
  // Sauvegarder dans localStorage
}

// TODO 3 : Créer une fonction pour supprimer
function deleteTodo(id) {
  // Filtrer le tableau pour enlever l'id
  // Sauvegarder dans localStorage
}

// TODO 4 : Créer une fonction pour charger depuis localStorage
function loadTodos() {
  // Récupérer depuis localStorage
  // Si rien, initialiser un tableau vide
}

// TODO 5 : Créer une fonction d'affichage
function displayTodos() {
  // Parcourir le tableau avec une boucle
  // Afficher différemment selon le statut done
  // Ajouter les boutons toggle et delete
}

// Tests à faire fonctionner :
// loadTodos();
addTodo("Apprendre JavaScript");
addTodo("Faire les courses");
toggleTodo(1);
// displayTodos();
