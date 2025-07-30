import { createAndAddElement } from "./createAndAddElement.js";

export function createHamburgerMenu() {
	let divHamburger = createAndAddElement("div", "");
	divHamburger.classList.add = "divHamburger";

	let hamburgerMenu = createAndAddElement("select", "", divHamburger);
	hamburgerMenu.classList.add = "hamburgerMenu";

	let optionDefault = createAndAddElement(
		"option",
		"Que voulez-vous faire?",
		hamburgerMenu
	);
	optionDefault.value = "";
	let optionList = createAndAddElement(
		"option",
		"Lister des contacts",
		hamburgerMenu
	);
	optionList.value = "list";
	let optionAddToList = createAndAddElement(
		"option",
		"Ajouter un contact",
		hamburgerMenu
	);
	optionAddToList.value = "addToList";
	let optionCount = createAndAddElement(
		"option",
		"Voir le nombre de contacts",
		hamburgerMenu
	);
	optionCount.value = "count";
}
