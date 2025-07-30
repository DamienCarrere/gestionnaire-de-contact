import { createAndAddElement } from "./modules/createAndAddElement.js";


export function formulaireContacts (){
const conteneur = document.getElementById("conteneur");

// Création d'une div pour contenir les éléments
const maPremiereDiv = document.createElement('div');
maPremiereDiv.id = "maPremiereDiv";
conteneur.appendChild(maPremiereDiv);


// ------------------Nom----------

// Création du label Nom
const labelNom = document.createElement('h3');
labelNom.textContent = "Nom";
labelNom.id = "labelNom";
maPremiereDiv.appendChild(labelNom);

// Création de l'input texte
const inputNom = document.createElement('input');
inputNom.type = 'text';
maPremiereDiv.appendChild(inputNom);


// --------------------Prenom--------------

// Création du label Prenom
const labelPrenom = document.createElement('h3');
labelPrenom.textContent = "Prénom";
labelPrenom.id = "labelNom";
maPremiereDiv.appendChild(labelPrenom);

// Création de l'input texte Prenom
const inputPrenom = document.createElement('input');
inputPrenom.type = 'text';
maPremiereDiv.appendChild(inputPrenom);


// -------------Numero------------ 

// Création du label Prenom
const labelNumber = document.createElement('h3');
labelNumber.textContent = "Numéro";
labelNumber.id = "labelNom";
maPremiereDiv.appendChild(labelNumber);

// Création de l'input texte Prenom
const inputNumber = document.createElement('input');
inputNumber.type = 'number';
maPremiereDiv.appendChild(inputNumber);

// Événement sur l'input
inputNom.addEventListener('input', function () {
    const nom = inputNom.value;
    console.log("Nom saisi :", nom);
});

// --------------------bouton Valider -------------------

const boutonValider = document.createElement("Button")
boutonValider.textContent = "Valider ";
boutonValider.id = "monBoutonValider";
maPremiereDiv.appendChild(boutonValider);

boutonValider.addEventListener("click", function () {
    console.log("Élément cliqué !");
});


// Création d'une div pour contenir les éléments
const maDeuxiemeDiv = document.createElement('div');
maDeuxiemeDiv.id = "maDeuxiemeDiv";
conteneur.appendChild(maDeuxiemeDiv);

const optionChoix = document.createElement('h3');
optionChoix.textContent = "Choisir une option";
optionChoix.id = "optionChoix";
maDeuxiemeDiv.appendChild(optionChoix);

}