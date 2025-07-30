/* TUTO:

createAndAddElement("type (genre h1, div, p...)", "content(contenu (laisser "" pour aucun contenu))", parent (facultatif)(le parent (par défaut c'est le body)), refParent (facultatif)(le parent de l'element a ajouter))

*/

export function createAndAddElement(
	type,
	content,
	parent = document.body,
	refParent
) {
	let elementType = document.createElement(type);
	elementType.textContent = content;

	if (refParent) {
		parent.insertBefore(elementType, refParent);
	} else {
		parent.appendChild(elementType);
	}
	return elementType;
}
