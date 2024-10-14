// edituser.js

document
  .getElementById("editUserForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var currentUsername = document
      .getElementById("currentUsername")
      .value.trim();
    var currentPassword = document
      .getElementById("currentPassword")
      .value.trim();
    var newUsername = document.getElementById("newUsername").value.trim();
    var newPassword = document.getElementById("newPassword").value.trim();

    // Get existing users from localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the current credentials
    var userIndex = users.findIndex(function (user) {
      return (
        user.username === currentUsername && user.password === currentPassword
      );
    });

    if (userIndex === -1) {
      alert("User not found or incorrect password.");
      return;
    }

    // Update user information if provided
    if (newUsername) {
      users[userIndex].username = newUsername;
    }
    if (newPassword) {
      users[userIndex].password = newPassword;
    }

    // Save updated user list to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("User information updated successfully!");

    // redirect the user to another page
    // window.location.href = 'loginform.html';
  });
document.getElementById("currentUsername").value = "";
document.getElementById("currentPassword").value = "";
document.getElementById("newUsername").value = "";
document.getElementById("newPassword").value = "";
