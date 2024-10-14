// deleteuser.js

document
  .getElementById("deleteUserForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var deleteUsername = document.getElementById("deleteUsername").value.trim();
    var deletePassword = document.getElementById("deletePassword").value.trim();

    // Get stored users from localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user by matching username and password
    var userIndex = users.findIndex(function (user) {
      return (
        user.username === deleteUsername && user.password === deletePassword
      );
    });

    // If user is found
    if (userIndex !== -1) {
      // Remove user from the array
      users.splice(userIndex, 1);

      // Save the updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("Account deleted successfully.");
    } else {
      alert("User not found or incorrect credentials.");
    }

    // Optionally, clear the input fields
    document.getElementById("deleteUsername").value = "";
    document.getElementById("deletePassword").value = "";
  });
