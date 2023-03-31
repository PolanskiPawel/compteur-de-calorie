const montantInput = document.getElementById("montant");
const additionInput = document.getElementById("addition");
const calculerButton = document.getElementById("calculer");
const resultatDiv = document.getElementById("resultat");

calculerButton.addEventListener("click", () => {
  const montant = parseFloat(montantInput.value);
  const addition = parseFloat(additionInput.value);
  const total = montant + addition;
  resultatDiv.textContent = `Le total est de : ${total.toFixed(2)} €`;
});
