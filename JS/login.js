// login.js

// Show modal when "Forgot Password" is clicked
document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("forgotPasswordModal").style.display = "block";
    console.log("Forgot Password modal should be visible now.");
  });
// Close the modal when clicking the close button
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("forgotPasswordModal").style.display = "none";
});
// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("forgotPasswordModal")) {
    document.getElementById("forgotPasswordModal").style.display = "none";
  }
});

//  "Forgot Password" form submission
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;

    if (email) {
      // password reset logic
      console.log("Password reset link sent to:", email);
      alert(
        "If this email is registered, a reset link will be sent to " + email
      );
      // Hide the form and show the confirmation message
      setTimeout(function () {
        document.getElementById("forgotPasswordModal").style.display = "none";
        document.getElementById("forgotPasswordForm").style.display = "none";
        document.getElementById("confirmationMessage").style.display = "block";
      }, 2000); // Closes after 2 seconds
    } else {
      alert("Please enter a valid email address.");
    }
  });

// Show modal with animation
document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var modal = document.getElementById("forgotPasswordModal");
    modal.classList.add("show");
  });

// Close modal with animation (when clicking the close button or outside the modal)
document.querySelector(".close").addEventListener("click", function () {
  var modal = document.getElementById("forgotPasswordModal");
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 900); // Allow time for the fade-out effect
});

window.addEventListener("click", function (event) {
  var modal = document.getElementById("forgotPasswordModal");
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(function () {
      modal.style.display = "none";
    }, 900); // Allow time for the fade-out effect
  }
});

///Add Local Storage Logic for Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  if (!username || !password) {
      alert('Please enter both username and password.');
      return;
  }

  // Get stored users from localStorage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the username and password match any stored user
  var validUser = users.find(function(user) {
      return user.username === username && user.password === password;
  });

  if (validUser) {
      alert('Login successful! Redirecting...');
      window.location.href = 'trucks.html';
  } else {
      alert('Invalid username or password.');
      window.location.href = 'progress.html';

  }
});