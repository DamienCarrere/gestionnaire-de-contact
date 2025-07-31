export function listeContacts(users) {
	const myElement = document.createElement("div");
	myElement.id = "myElement";
	myElement.style.textAlign = "left";

	const listTitle = document.createElement("h2");
	listTitle.textContent = "Liste de vos contacts";
	myElement.appendChild(listTitle);

	users.forEach((user) => {
		const nomPrenom = document.createElement("h3");
		nomPrenom.textContent = `${user.nom} ${user.prenom}`;
		myElement.appendChild(nomPrenom);

		const numero = document.createElement("h3");
		numero.textContent = user.tel;
		myElement.appendChild(numero);
	});

	return myElement;
}
