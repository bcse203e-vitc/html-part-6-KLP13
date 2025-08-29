const data = {
  Asia: ["India", "China", "Japan"],
  Europe: ["France", "Germany", "Italy"]
};

document.getElementById("continent").addEventListener("change", function() {
  const cont = this.value;
  const country = document.getElementById("country");
  country.innerHTML = "";

  if (data[cont]) {
    data[cont].forEach(c => {
      const opt = document.createElement("option");
      opt.text = c;
      opt.value = c;
      country.add(opt);
    });
  }
});
