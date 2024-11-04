function getTodos() {
  fetch("http://127.0.0.1:4000/todos") // Ändere die URL hier!
    .then((response) => response.json())
    .then((json) => loadTodos(json));
}

function loadTodos(todos) {
  console.log(todos);

  for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i].title);
    taskToHtml(todos[i]);
  }
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
  if (taskCompleted === true) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  // Todo text
  let taskText = document.createElement("span");
  taskText.textContent = todo.title + " ";

  // button erzeugen
  let delButton = document.createElement("button");
  delButton.textContent = "Delete Task";

  // listenelement ergänzen
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(delButton);

  // listenelement in die html liste hinzufügen
  document.getElementById("task-list").appendChild(listItem);
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
