function getTodos() {
  fetch("http://127.0.0.1:4000/todos") // Ändere die URL hier!
    .then((response) => response.json())
    .then((json) => loadTodos(json));
}

function loadTodos(todos) {
  console.log(todos);

  document.getElementById("task-list").innerHTML = ""; // Liste leeren

  todos.forEach((todo) => {
    taskToHtml(todo);
  });
}

function taskToHtml(todo) {
  console.log(todo);

  let taskCompleted = todo.completed;

  // listenelement erzeugen
  let listItem = document.createElement("li");
  listItem.id = todo.id;
  listItem.setAttribute("userId", todo.userId); // Benutzerdefiniertes Attribut hinzufügen

  // checkbox erzeugen
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = taskCompleted;

  // Todo text
  let taskText = document.createElement("span");
  taskText.textContent = todo.title + " ";

  // button erzeugen
  let delButton = document.createElement("button");
  delButton.textContent = "Delete Task";

  // Click-Event für den Delete-Button
  delButton.addEventListener("click", function () {
    deleteTask(todo.id);
  });

  // listenelement ergänzen
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(delButton);

  // listenelement in die html liste hinzufügen
  document.getElementById("task-list").appendChild(listItem);
}

function deleteTask(id) {
  fetch(`http://127.0.0.1:4000/todos?id=${id}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        document.getElementById(id).remove(); // Entfernt das Element aus der HTML-Liste
      } else {
        console.error("Fehler beim Löschen des To-Dos");
      }
    })
    .catch((error) => console.error("Netzwerkfehler:", error));
}

function addTask() {
  let taskContent = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";

  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: taskContent,
      completed: false,
    }),
  };

  fetch("http://127.0.0.1:4000/todos", fetchConfig) // URL ändern!
    .then((response) => response.json())
    .then((json) => loadTodos(json));
}

document.getElementById("add-task").addEventListener("click", addTask);

// main

getTodos();
