import { createAndAddElement } from "./createAndAddElement.js";
import { createHamburgerMenu } from "./hamburgerMenu.js";

export function createSiteLogo() {
	let siteLogo = createAndAddElement("img", "");
	siteLogo.classList.add = "siteLogo";
	siteLogo.src = "assets/images/logosite.jpg";
	siteLogo.alt = "Logo du site";
	siteLogo.addEventListener(
		"click",
		() => {
			createHamburgerMenu();
		},
		{ once: true }
	);
}
