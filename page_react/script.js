// On récupère l'élément footer dans une variable
let footerElement = document.querySelector("footer");

// On ajoute l'écouteur d'événement
footerElement.addEventListener("click", function () {
    10
    console.log("cliqué");
});

// Compteur de clics
let clickcompteur = 0;
document.querySelector("footer").addEventListener("click", function () {
    console.clear();
    clickcompteur++;
    console.log("vous avez cliqué " + clickcompteur + "fois");
});


let buttonhamburger = document.querySelector(".navbar-toggler");
let navbarmenu = document.getElementById("navbarHeader");
buttonhamburger.addEventListener("click", function () {
    navbarmenu.classList.toggle("collapse");
});


let firstcardchangecolor = document.querySelectorAll(".card")[0]
let buttoneditfirstcard = firstcardchangecolor.querySelector(".btn-outline-secondary");
buttoneditfirstcard.addEventListener("click", function () {
    if (firstcardchangecolor.style.color === "red")
        firstcardchangecolor.style.color = "";
    else
        firstcardchangecolor.style.color = "red";
});


let secondcarchangecolor = document.querySelectorAll(".card")[1]
let buttoneditsecondcard = secondcarchangecolor.querySelectorAll(".btn-outline-secondary")[0];
buttoneditsecondcard.addEventListener("click", function () {
    if (secondcarchangecolor.style.color === "green")
        secondcarchangecolor.style.color = "";
    else
        secondcarchangecolor.style.color = "green";
});

let boostraplink = document.querySelector("link[href*='bootstrap']")
let navbar = document.querySelector(".navbar");
navbar.addEventListener("dblclick", function () {
    if (boostraplink.disabled === true)
        boostraplink.disabled = false;
    else
        boostraplink.disabled = true;
});

let toutemescards = document.querySelectorAll(".card");
// On lance la boucle directement (pas de let)
// On retire les guillemets autour de card
toutemescards.forEach(card => {

    let buttonview = card.querySelector(".btn-success");
    let textcard = card.querySelector(".card-text");
    let imagecard = card.querySelector(".card-img-top");

    buttonview.addEventListener("mouseover", function () {
        if (textcard.style.display !== "none") {
            textcard.style.display = "none";
            imagecard.style.width = "20%";
        } else {
            textcard.style.display = "";
            imagecard.style.width = "100%";
        }
    });
});



let button_gris_Rotation = document.querySelector("a.btn-secondary");

// 2. On cible le conteneur des cartes
let row = document.querySelector(".album .row");

// 3. On crée l'événement au clic
button_gris_Rotation.addEventListener("click", function (e) {
    e.preventDefault();
    // 4. On déplace la dernière carte au début du conteneur
    row.insertBefore(row.lastElementChild, row.firstElementChild);
});

let button_bleu_Rotation = document.querySelector("a.btn-primary");
// On réutilise la variable 'row' que tu as déjà déclarée plus haut

button_bleu_Rotation.addEventListener("click", function (e) {
    e.preventDefault();

    // On prend la première carte et on la pousse à la fin
    // C'est magique : appendChild déplace l'élément automatiquement
    row.appendChild(row.firstElementChild);
});
// On écoute l'appui sur une touche dans toute la page


// 1. On sélectionne le logo
let logo = document.querySelector(".navbar-brand");
let body = document.querySelector("body");

// 2. On utilise l'événement "keypress" (et on passe 'e' en paramètre)
logo.addEventListener("keypress", function (e) {

    // Indice 4 : On nettoie TOUTES les classes du body à chaque appui
    body.className = "";

    // On vérifie la touche pressée
    if (e.key === "a") {
        console.log("Action pour A");
        body.classList.add("col-4"); // 4 colonnes à gauche
    }
    else if (e.key === "y") {
        console.log("Action pour Y");
        body.classList.add("col-4", "offset-md-4"); // 4 colonnes au milieu
    }
    else if (e.key === "p") {
        console.log("Action pour P");
        body.classList.add("col-4", "offset-md-8"); // 4 colonnes à droite
    }
    else if (e.key === "b") {
        console.log("Action pour B : retour à la normale");
        // Le body est déjà nettoyé au début de la fonction, donc rien à faire de plus
    }
});


let boutonBleu= document.querySelector(".btn-primary");
boutonBleu.innerText = "rotation ⬅️ ";

let boutonGris = document.querySelector(".btn-secondary");
boutonGris.innerText = "rotation ➡️";