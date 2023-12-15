const lazyImage = document.querySelectorAll(".gallery img");

for (let I = 0; I < lazyImage.length; I++) {
    lazyImage[I].setAttribute("loading", "lazy");
}