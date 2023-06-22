let contenu = {
    en: {
        bienvenue: "Welcome to CheatSheets",
        /* autres traductions en anglais */
    },
    fr: {
        bienvenue: "Bienvenue sur CheatSheets",
        /* autres traductions en français */
    },
    /* autres langues */
};

let langue = navigator.language.slice(0, 2); // obtient les deux premiers caractères du code de la langue
if (!contenu[langue]) {
    langue = "en"; // langue par défaut si la langue du navigateur n'est pas prise en charge
}

document.querySelector("h1").textContent = contenu[langue].bienvenue;