let btnLégumes = document.getElementById("btnLégumes");
let btnFruits = document.getElementById("btn-fruits");
let btnBoissons = document.getElementById("btn-boissons");
let btnConfitures = document.getElementById("btn-confitures");
let btnAll = document.getElementById("btn-all");

let divLégumes = document.getElementById("légumes");
let divFruits = document.getElementById("fruits");
let divBoissons = document.getElementById("boissons");
let divConfitures = document.getElementById("confitures");


function showAll() {
	divLégumes.style.display = "block";
	divFruits.style.display ="block";
	divBoissons.style.display ="block";
	divConfitures.style.display ="block";

}
btnAll.addEventListener("click", showAll);

function showOnlyLégumes() {
	divLégumes.style.display = "block";
	divFruits.style.display ="none";
	divBoissons.style.display ="none";
	divConfitures.style.display ="none";
}
btnLégumes.addEventListener("click", showOnlyLégumes);

function showOnlyFruits() {
	divFruits.style.display = "block";
	divLégumes.style.display ="none";
	divBoissons.style.display ="none";
	divConfitures.style.display ="none";
}
btnFruits.addEventListener("click", showOnlyFruits);

function showOnlyBoissons() {
	divBoissons.style.display = "block";
	divLégumes.style.display ="none";
	divFruits.style.display ="none";
	divConfitures.style.display ="none";
}
btnBoissons.addEventListener("click", showOnlyBoissons);

function showOnlyConfitures() {
	divConfitures.style.display = "block";
	divLégumes.style.display ="none";
	divFruits.style.display ="none";
	divBoissons.style.display ="none";
}
btnConfitures.addEventListener("click", showOnlyConfitures);

//Pris sur w3 -- rajouter la class active au bouton cliqué
// Get the container element
var btnContainer = document.getElementById("btns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn-primary");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}