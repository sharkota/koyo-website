function reload() {
    location.reload();
}
if (new URL(window.location.href).hash === '#Info' || new URL(window.location.href).hash === '#Interests' || new URL(window.location.href).hash === '#Contacts') {
    document.getElementById("list").classList.toggle("show");
    document.getElementById("pfp").classList.toggle("show");
    document.getElementById("back").classList.toggle("show");
}

if (new URL(window.location.href).hash === '#Menu' || new URL(window.location.href).hash === '') {
document.getElementById("return").classList.toggle("show");
}

if (new URL(window.location.href).hash === '#Info') {
    document.getElementById("Info1").classList.toggle("show");
}

if (new URL(window.location.href).hash === '#Interests') {
    document.getElementById("Interests1").classList.toggle("show");
}

if (new URL(window.location.href).hash === '#Contacts') {
    document.getElementById("Contacts1").classList.toggle("show");
}