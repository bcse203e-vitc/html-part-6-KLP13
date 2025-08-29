const form = document.getElementById("dateForm");
const dateInput = document.getElementById("date");

form.addEventListener("submit", function(e) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!regex.test(dateInput.value)) {
    alert("Invalid Date Format! Please use DD/MM/YYYY.");
    e.preventDefault();
  } else {
    alert("Valid Date Format.");
  }
});
