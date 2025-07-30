import { createAndAddElement } from "./createAndAddElement.js";

export function listeContacts() {
	const myElement = document.createElement("div");
	myElement.id = "myElement";
	document.body.appendChild(myElement);

	const listTitle = createAndAddElement("h2");
	listTitle.textContent = "Liste de vos contacts";
	listTitle.id = "listTitle";
	myElement.appendChild(listTitle);

	const nomPrenom1 = document.createElement("h3");
	nomPrenom1.textContent = "- Jean Aymare";
	nomPrenom1.id = "nomPrenom1";
	myElement.appendChild(nomPrenom1);

	const numero1 = document.createElement("h3");
	numero1.textContent = "- 06 85 45 69 95";
	myElement.appendChild(numero1);

	const nomPrenom2 = document.createElement("h3");
	nomPrenom2.textContent = "- Léa Ricault";
	myElement.appendChild(nomPrenom2);

	const numero2 = document.createElement("h3");
	numero2.textContent = "- 06 28 32 78 65";
	myElement.appendChild(numero2);

	const nomPrenom3 = document.createElement("h3");
	nomPrenom3.textContent = "- Mélanie Zetteaufré";
	myElement.appendChild(nomPrenom3);

	const numero3 = document.createElement("h3");
	numero3.textContent = "- 07 35 78 46 22";
	myElement.appendChild(numero3);
}
