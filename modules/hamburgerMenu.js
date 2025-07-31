import { listeContacts } from "./listeContacts.js";
import { formulaireContacts } from "./formContact.js";

export function createHamburgerMenu() {
	const select = document.createElement("select");
	document.body.appendChild(select);

	const options = [
		{ value: "", text: "Que voulez-vous faire?" },
		{ value: "list", text: "Lister des contacts" },
		{ value: "add", text: "Ajouter un contact" },
		{ value: "count", text: "Voir le nombre de contacts" },
	];

	options.forEach((opt) => {
		const option = document.createElement("option");
		option.value = opt.value;
		option.textContent = opt.text;
		select.appendChild(option);
	});

	const pageContainer = document.createElement("div");
	pageContainer.classList.add("page-container");
	document.body.appendChild(pageContainer);

	const users = [
		{ nom: "Dijoux", prenom: "Chloe", tel: "09090909" },
		{ nom: "Kader", prenom: "Ludo", tel: "09090909" },
		{ nom: "Carrère", prenom: "Damien", tel: "09090909" },
	];

	select.addEventListener("change", () => {
		const value = select.value;

		pageContainer.innerHTML = "";

		if (value === "list") {
			pageContainer.appendChild(listeContacts(users));
		} else if (value === "add") {
			pageContainer.appendChild(formulaireContacts(users));
		} else if (value === "count") {
			const countDiv = document.createElement("div");
			countDiv.innerHTML = `<h2>Nombre de contacts</h2><p>Vous avez ${users.length} contacts.</p>`;
			pageContainer.appendChild(countDiv);
		}

		select.value = "";
	});
}
