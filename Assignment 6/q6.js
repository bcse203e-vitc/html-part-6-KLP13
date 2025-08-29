const form = document.getElementById("userForm");
const username = document.getElementById("username");

form.addEventListener("submit", function(e) {
  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  if (!regex.test(username.value)) {
    alert("Invalid Username! Use 3–16 letters, numbers, or underscores.");
    e.preventDefault();
  } else {
    alert("Valid Username!");
  }
});
