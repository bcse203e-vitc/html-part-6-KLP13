document.getElementById("phone").addEventListener("input", function() {
  const regex = /^(\(\d{3}\)\s?\d{3}-\d{4}|\d{3}-\d{3}-\d{4})$/;
  if (regex.test(this.value)) {
    document.getElementById("status").textContent = "Valid";
    document.getElementById("status").className = "success";
  } else {
    document.getElementById("status").textContent = "Invalid";
    document.getElementById("status").className = "error";
  }
});
