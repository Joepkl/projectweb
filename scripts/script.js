// JavaScript Document

function toggleMenu() {
  var links = document.getElementById("links");
  links.style.display = "block";
}

var buttonMenu = document.getElementById("buttonMenu");
buttonMenu.onclick = toggleMenu;
