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
