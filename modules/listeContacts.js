import { createAndAddElement } from "./createAndAddElement.js";

export function listeContacts(users) {
	const myElement = document.createElement("div");
	myElement.id = "myElement";
	document.body.appendChild(myElement);

	const listTitle = createAndAddElement("h2");
	listTitle.textContent = "Liste de vos contacts";
	listTitle.id = "listTitle";
	myElement.appendChild(listTitle);

	for (let user of users) {
		const nomPrenom1 = document.createElement("h3");
		nomPrenom1.textContent = user.nom;
		nomPrenom1.id = "nomPrenom1";
		myElement.appendChild(nomPrenom1);

		const numero1 = document.createElement("h3");
		numero1.textContent = user.tel;
		numero1.id = "numero1";
		myElement.appendChild(numero1);
	}
}
