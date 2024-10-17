document.addEventListener("DOMContentLoaded", function () {
  let username;
  let email;
  let role;
  let user_management = new Map();

  document.getElementById("Submit").onclick = function () {
    username = document.getElementById("myuser").value;
    email = document.getElementById("myemail").value;
    role = document.getElementById("myrole").value;

    if (username && email && role) {
      user_management.set(username, { email: email, rolle: role });
      console.log(user_management);
      displayUsers(); // Benutzerliste aktualisieren
    } else {
      console.log("Bitte alle Felder ausfüllen");
    }
  };

  function displayUsers() {
    let userList = "";
    user_management.forEach((value, key) => {
      userList += `User: ${key}, Email: ${value.email}, Rolle: ${value.rolle} <br>`;
    });
    document.getElementById("userList").innerHTML = userList;
  }
});
