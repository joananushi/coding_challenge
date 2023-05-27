document.addEventListener("DOMContentLoaded", () => {
  const listaFakteve = document.getElementById("lista");

  // Merr fakte për mace dhe i shfaq
  fetch("https://catfact.ninja/facts")
    .then(response => response.json())
    .then(data => {
      const faktet = data.data;
      faktet.forEach(fakt => {
        const li = document.createElement("li");
        const linku = document.createElement("a");
        linku.href = `detail.html#${fakt.id}`;
        linku.textContent = fakt.fact;
        li.appendChild(linku);
        listaFakteve.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Gabim:", error);
    });

  // Merr dhe shfaq detajet e faktit
  const detajiFaktit = document.getElementById("detajet");
  const faktId = location.hash.substring(1);
  if (faktId) {
    fetch(`https://catfact.ninja/fact/${faktId}`)
      .then(response => response.json())
      .then(data => {
        const fakt = data.data;
        detajiFaktit.textContent = fakt.fact;
      })
      .catch(error => {
        console.error("Gabim:", error);
      });
  }

  // Fshij faktin
  const fshiButonin = document.getElementById("fshi-butonin");
  fshiButonin.addEventListener("click", () => {
    if (confirm("Jeni të sigurt që dëshironi të fshini këtë fakt?")) {
      // Kryej logjikën e fshirjes
      alert("Fakti u fshi me sukses!");
    }
  });
});
