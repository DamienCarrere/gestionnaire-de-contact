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

	select.addEventListener("change", () => {
		const value = select.value;
		const users = [
			{ nom: "- chloe", prenom: "- chloe", tel: "- 09090909" },
			{ nom: "- ludo", prenom: "- ludo", tel: "- 09090909" },
			{ nom: "- damien", prenom: "- damien", tel: "- 09090909" },
		];

		pageContainer.innerHTML = "";

		if (value === "list") {
			pageContainer.innerHTML = listeContacts(users).outerHTML;
		} else if (value === "add") {
			pageContainer.innerHTML = formulaireContacts(users).outerHTML;
		} else if (value === "count") {
			pageContainer.innerHTML =
				"<h2>Nombre de contacts</h2><p>Vous avez 3 contacts.</p>";
		}

		select.value = "";
	});
}
