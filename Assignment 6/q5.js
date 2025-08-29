const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const msg = document.getElementById("msg");

function check() {
  const p = pass.value;
  const cp = cpass.value;
  if (p && cp) {
    if (p === cp) {
      msg.textContent = "Passwords match";
      msg.className = "success";
    } else {
      msg.textContent = "Passwords do not match";
      msg.className = "error";
    }
  } else {
    msg.textContent = "";
  }
}

pass.addEventListener("input", check);
cpass.addEventListener("input", check);
