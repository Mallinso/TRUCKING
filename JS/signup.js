// signup.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var newUsername = document.getElementById('newUsername').value.trim();
  var newPassword = document.getElementById('newPassword').value.trim();

  // Check if both fields are filled
  if (!newUsername || !newPassword) {
    alert('Please enter both username and password.');
    return;
  }

  // Get stored users from localStorage (or an empty array if there are none)
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the username is already taken
  var userExists = users.some(function(user) {
    return user.username === newUsername;
  });

  if (userExists) {
    alert('Username already taken. Please choose another one.');
  } else {
    // Add the new user to the users array
    users.push({ username: newUsername, password: newPassword });

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign-up successful! You can now log in.');
    // Redirect to the login page
    window.location.href = 'welcome-page.html';
  }
});
