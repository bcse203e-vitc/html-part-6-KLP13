const colorInput = document.getElementById("color");
const msg = document.getElementById("msg");

colorInput.addEventListener("input", function () {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  if (regex.test(this.value)) {
    msg.textContent = "Valid Color Code";
    msg.className = "valid";
    colorInput.style.background = this.value; 
    colorInput.style.color = "#000"; 
  } else {
    msg.textContent = "Invalid Color Code";
    msg.className = "invalid";
    colorInput.style.background = "white";
    colorInput.style.color = "#000";
  }
});
