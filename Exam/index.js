// API fetch
const message = document.getElementById("message");
const table = document.getElementById("usersTable");
const tableBody = document.getElementById("tableBody");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then(users => {

    message.style.display = "none";
    table.style.display = "table";

    users.forEach(user => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.street}, ${user.address.city}</td>
      `;

      tableBody.appendChild(row);
    });

  })
  .catch(error => {
    message.innerText = "Failed to load data";
  });

