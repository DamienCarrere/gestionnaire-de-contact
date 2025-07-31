export function formulaireContacts(users) {
	const maPremiereDiv = document.createElement("div");
	maPremiereDiv.id = "maPremiereDiv";

	// Labels et inputs
	const labelNom = document.createElement("label");
	labelNom.textContent = "Nom";
	labelNom.htmlFor = "inputNom";
	maPremiereDiv.appendChild(labelNom);

	const inputNom = document.createElement("input");
	inputNom.type = "text";
	inputNom.id = "inputNom";
	maPremiereDiv.appendChild(inputNom);

	const labelPrenom = document.createElement("label");
	labelPrenom.textContent = "Prénom";
	labelPrenom.htmlFor = "inputPrenom";
	maPremiereDiv.appendChild(labelPrenom);

	const inputPrenom = document.createElement("input");
	inputPrenom.type = "text";
	inputPrenom.id = "inputPrenom";
	maPremiereDiv.appendChild(inputPrenom);

	const labelNumero = document.createElement("label");
	labelNumero.textContent = "Numéro";
	labelNumero.htmlFor = "inputNumero";
	maPremiereDiv.appendChild(labelNumero);

	const inputNumero = document.createElement("input");
	inputNumero.type = "number";
	inputNumero.id = "inputNumero";
	maPremiereDiv.appendChild(inputNumero);

	// Bouton Valider
	const boutonValider = document.createElement("button");
	boutonValider.textContent = "Valider";
	boutonValider.id = "monBoutonValider";
	maPremiereDiv.appendChild(boutonValider);

	boutonValider.addEventListener("click", () => {
		const nom = inputNom.value.trim();
		const prenom = inputPrenom.value.trim();
		const numero = inputNumero.value.trim();

		if (!nom || !prenom || !numero) {
			alert("Veuillez remplir tous les champs.");
			return;
		}

		users.push({ nom, prenom, tel: numero });

		// Reset formulaire
		inputNom.value = "";
		inputPrenom.value = "";
		inputNumero.value = "";
	});

	return maPremiereDiv;
}
