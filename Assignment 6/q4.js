function addHobby() {
  const div = document.createElement("div");
  div.innerHTML = '<input type="text" name="hobby" class="hobbyInput" placeholder="Enter hobby">';
  document.getElementById("hobbyContainer").appendChild(div);
}

document.getElementById("hobbyForm").addEventListener("input", function(e) {
  if (e.target.classList.contains("hobbyInput")) {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(e.target.value)) {
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.border = "2px solid green";
    }
  }
});
