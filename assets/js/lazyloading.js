// const galleryImg = document.querySelectorAll(".gallery img");
// const blogImg = document.querySelectorAll(".blog img")
const all = document.querySelectorAll("img")

function applyLazy(varName) {
    for (let I = 0; I < varName.length; I++) {
        varName[I].setAttribute("loading", "lazy");
    }
}

applyLazy(all)