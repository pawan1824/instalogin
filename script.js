const form = document.getElementById("loginForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    status.textContent = "Please fill both fields.";
    return;
  }

  status.innerHTML = "✅login complete.<br>Username: <b>" + username + "</b>";
    status.innerHTML = "✅login complete.<br>password: <b>" + password + "</b>";

  form.reset();
});