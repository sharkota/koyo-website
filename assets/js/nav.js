// Variables
var hashLocation = new URL(window.location.href).hash.toString().replace("#", "");
const elements = document.querySelectorAll(".show");
const hashNavList = document.querySelectorAll("nav a");
var navString = ('[href="#' + hashLocation + '"]')
var hashLocaationNav = document.querySelectorAll(navString);

// Set up page for hidden sections.
document.documentElement.style.setProperty('--js', 'none');
document.documentElement.style.setProperty('--jsButton', 'block');

// Set Home on no hash.
if (hashLocation == "") {
    document.location.hash = "#Home"
}

// Toggle Show on hash changes.
function locationHashChanged() {
    hashLocation = new URL(window.location.href).hash.toString().replace("#", "")
    navString = ('[href="#' + hashLocation + '"]');
    hashLocaationNav = document.querySelectorAll(navString);
    for (let I = 0; I < elements.length; I++) {
        elements[I].classList.add("show");
    }
    for (let I = 0; I < hashNavList.length; I++) {
        hashNavList[I].classList.remove("selected");
    }
    for (let I = 0; I < hashLocaationNav.length; I++) {
        hashLocaationNav[I].classList.add("selected");
    }
    document.getElementById(hashLocation).classList.remove("show");
    scrollTop();
}

function scrollTop(){
window.scroll({
    top: 0, 
    left: 0
   });
}

// DOM Listeners
window.addEventListener("load", locationHashChanged);
window.addEventListener("hashchange", locationHashChanged);