export function formulaireContacts(users) {
	// -------- Première div contenant le formulaire --------
	const maPremiereDiv = document.createElement("div");
	maPremiereDiv.id = "maPremiereDiv";
	document.body.appendChild(maPremiereDiv);

	// ----- Nom -----
	const labelNom = document.createElement("label");
	labelNom.textContent = "Nom";
	labelNom.htmlFor = "inputNom";
	maPremiereDiv.appendChild(labelNom);

	const inputNom = document.createElement("input");
	inputNom.type = "text";
	inputNom.id = "inputNom";
	maPremiereDiv.appendChild(inputNom);

	// ----- Prénom -----
	const labelPrenom = document.createElement("label");
	labelPrenom.textContent = "Prénom";
	labelPrenom.htmlFor = "inputPrenom";
	maPremiereDiv.appendChild(labelPrenom);

	const inputPrenom = document.createElement("input");
	inputPrenom.type = "text";
	inputPrenom.id = "inputPrenom";
	maPremiereDiv.appendChild(inputPrenom);

	// ----- Numéro -----
	const labelNumero = document.createElement("label");
	labelNumero.textContent = "Numéro";
	labelNumero.htmlFor = "inputNumero";
	maPremiereDiv.appendChild(labelNumero);

	const inputNumero = document.createElement("input");
	inputNumero.type = "number";
	inputNumero.id = "inputNumero";
	maPremiereDiv.appendChild(inputNumero);

	// ----- Bouton Valider -----
	const boutonValider = document.createElement("button");
	boutonValider.textContent = "Valider";
	boutonValider.id = "monBoutonValider";
	maPremiereDiv.appendChild(boutonValider);

	// -------- Événement au clic sur le bouton valider --------
	boutonValider.addEventListener("click", function () {
		const nom = inputNom.value;
		const prenom = inputPrenom.value;
		const numero = inputNumero.value;

		users.push({ nom, prenom, numero });

		if (!nom || !prenom || !numero) {
			alert("Veuillez remplir tous les champs.");
			return;
		}
		console.log(users);
	});
}
