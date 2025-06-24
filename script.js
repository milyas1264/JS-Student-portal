function addStudent() {
  // Inputs se value lena
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let marks = document.getElementById("marks").value;

  // Check empty fields
  if (!name || !roll || !marks) {
    alert("Please fill all fields");
    return;
  }

  // Card create karna
  let card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "15px";
  card.style.width = "200px";
  card.style.borderRadius = "8px";
  card.style.background = "#f9f9f9";

  card.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Roll #:</strong> ${roll}</p>
    <p><strong>Marks:</strong> ${marks}</p>
  `;

  // Card ko student container mein dikhana
  document.getElementById("studentContainer").appendChild(card);

  // Inputs ko clear kar den
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("marks").value = "";
}
