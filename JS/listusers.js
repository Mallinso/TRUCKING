// listusers.js

// Function to display users from localStorage
function displayUsers() {
  var users = JSON.parse(localStorage.getItem("users")) || []; // Get users from localStorage

  var usersList = document.getElementById("usersList");
  usersList.innerHTML = ""; // Clear previous content

  if (users.length === 0) {
    // If no users are registered
    var noUsersRow = document.createElement("tr");
    var noUsersCell = document.createElement("td");
    noUsersCell.colSpan = 1;
    noUsersCell.textContent = "No users registered.";
    noUsersRow.appendChild(noUsersCell);
    usersList.appendChild(noUsersRow);
  } else {
    // List each user
    users.forEach(function (user) {
      var userRow = document.createElement("tr");
      var usernameCell = document.createElement("td");
      usernameCell.textContent = user.username; // Display username only

      userRow.appendChild(usernameCell);
      usersList.appendChild(userRow);
    });
  }
}

// Call the function to display users when the page loads
window.onload = displayUsers;
