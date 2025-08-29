document.getElementById("addBtn").addEventListener("click", addField);

function addField() {
  const type = document.getElementById("type").value;
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = "Enter " + type;

  const form = document.getElementById("dynamicForm");
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
}
