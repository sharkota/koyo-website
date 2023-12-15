// Variables
var stylesheet = document.querySelector(`#theme`);
var userThemeKey = localStorage['themeKey'];

// Toggle Theme List
function toggleThemePicker() {
    document.getElementById("mainNav").classList.toggle("show");
    document.getElementById("themeNav").classList.toggle("show");
}


// Change Theme
function toggleTheme(theme) {
    var themeName = ("/assets/css/theme/" + theme + ".css");
    stylesheet.setAttribute("href", themeName);
    localStorage['themeKey'] = theme;
}

// Load Last Theme
function onLoad(){
    if (userThemeKey == undefined) {
        console.log("First Visit, setting theme!")
        localStorage['themeKey'] = "paranoid";
        userThemeKey = localStorage['themeKey'];
    }
    toggleTheme(userThemeKey);
}

// DOM Listeners
window.addEventListener("load", onLoad);